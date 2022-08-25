import Copy from 'components/Copy';
import Loader from 'components/Loader';
import { fileHeaders } from 'configs/file/headers';
import files from 'mocks/files';
import React, { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { IFile } from 'types';
import {
  Container,
  CurrentPlan,
  HashItem,
  InputFile,
  ListBody,
  ListContainer,
  ListHeader,
  ListHeaders,
  ListItem,
  ListRow,
  LoadingContainer,
  Plan,
  PlanInfo,
  Remaining,
  RemainingStorage,
  SectionHeader,
  UploadContainer,
  UploadLoaderContainer,
} from './styles';

import { useWidth } from 'contexts/width';
import plans from 'mocks/plans';
import { formatSize, stringEllipsis } from 'utils';

const Files: React.FC = () => {
  const [isDragging, setDragging] = useState(false);
  const [draggingOverlayCount, setDragginOverlayCount] = useState(0);

  const [isUploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);

  const { isMobile } = useWidth();

  const plan = plans[0];

  const FetchFiles = useCallback(async () => {
    setLoading(true);
    await new Promise<void>(resolve =>
      setTimeout(() => {
        resolve(setLoading(false));
      }, 500),
    );
  }, []);
  useEffect(() => {
    FetchFiles();
  }, []);

  const preventEvent = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const processFile = async (event: any, isDrop: boolean) => {
    preventEvent(event);
    const file = isDrop ? event.dataTransfer.files : event.target.files;
    await uploadFile(file);
  };

  const uploadFile = async (file: any) => {
    setUploading(true);
    try {
      await new Promise<void>(resolve =>
        setTimeout(() => {
          resolve();
        }, 2000),
      );
      const newFile: IFile = {
        name: file[0].name,
        hash: `${files[0].hash.split('-')[0]}-${files.length}`,
        size: file[0].size,
      };
      files.push(newFile);
      setUploading(false);
      setLoading(true);
      await new Promise<void>(resolve =>
        setTimeout(() => {
          resolve(setLoading(false));
        }, 500),
      );

      toast.success('Uploaded Successfully');
    } catch (error: any) {
      setUploading(false);
      toast.error(error.message);
    }
  };

  const handleDragEnter = (event: any) => {
    preventEvent(event);

    let count = draggingOverlayCount;
    count++;

    setDragginOverlayCount(count);
    setDragging(true);
  };

  const handleDragLeave = (event: any) => {
    preventEvent(event);

    let count = draggingOverlayCount;
    count--;

    setDragginOverlayCount(count);

    if (count === 0) {
      setDragging(false);
    }
  };

  const getTotalStorage = () => {
    return files.reduce((acc, curr) => {
      return acc + curr.size;
    }, 0);
  };

  return (
    <>
      {!loading ? (
        <Container
          onDragOver={preventEvent}
          onDrop={(event: any) => processFile(event, true)}
          onChange={(event: any) => processFile(event, false)}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
        >
          <SectionHeader>
            Files
            <PlanInfo>
              <CurrentPlan>
                Your Plan:
                <Plan to="/plans">{plan.name}</Plan>
              </CurrentPlan>

              <RemainingStorage>
                Remaining Storage:
                <Remaining>
                  {formatSize((plan.storage - getTotalStorage()) / 1000)}{' '}
                </Remaining>
              </RemainingStorage>
            </PlanInfo>
          </SectionHeader>

          <ListContainer>
            {!isMobile && (
              <ListHeaders>
                {fileHeaders.map(header => (
                  <ListHeader>{header}</ListHeader>
                ))}
              </ListHeaders>
            )}
            <ListBody>
              {files.map(file => (
                <ListRow key={file.hash}>
                  <ListItem>{file.name}</ListItem>
                  <ListItem>
                    <HashItem>
                      {isMobile ? stringEllipsis(file.hash, 18) : file.hash}
                      <Copy data={file.hash} />
                    </HashItem>
                  </ListItem>
                  <ListItem>{formatSize(file.size)}</ListItem>
                  <ListItem>
                    <a href="#">Config</a>
                  </ListItem>
                </ListRow>
              ))}
            </ListBody>
          </ListContainer>
          <UploadLoaderContainer>
            <UploadContainer>
              <InputFile isDragging={isDragging} htmlFor="input">
                {isUploading ? (
                  <>
                    <span>Uploading...</span>
                  </>
                ) : (
                  <>
                    {window.matchMedia('(max-device-width: 768px)').matches ? (
                      <>
                        <input id="input" type="file" />
                        <label htmlFor="input">Select file</label>
                      </>
                    ) : (
                      <>
                        <input id="input" type="file" />
                        <span>
                          Drag and drop a file, or{' '}
                          <label htmlFor="input">Select file</label>
                        </span>
                      </>
                    )}
                  </>
                )}
              </InputFile>
            </UploadContainer>
            {isUploading && <Loader inline />}
          </UploadLoaderContainer>
        </Container>
      ) : (
        <LoadingContainer>
          <Loader />
        </LoadingContainer>
      )}
    </>
  );
};

export default Files;
