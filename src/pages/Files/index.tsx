import Copy from 'components/Copy';
import Loader from 'components/Loader';
import { fileHeaders } from 'configs/file/headers';
import defaultFiles from 'mocks/files';
import React, { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { IFile } from 'types';
import {
  ActionsButton,
  Container,
  CurrentPlan,
  EmptyRow,
  HashItem,
  HashLink,
  InputFile,
  ItemContent,
  ListBody,
  ListContainer,
  ListHeader,
  ListHeaders,
  ListItem,
  ListRow,
  LoadingContainer,
  NameContent,
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
import { MdOutlineFileDownload } from 'react-icons/md';
// import Axios from 'axios';
import axios from 'axios';
import { formatSize, stringEllipsis } from 'utils';

const Files: React.FC = () => {
  const [isDragging, setDragging] = useState(false);
  const [draggingOverlayCount, setDragginOverlayCount] = useState(0);

  const [isUploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);

  const [files, setFiles] = useState<IFile[]>(defaultFiles);

  const { isMobile } = useWidth();

  const planName = sessionStorage.getItem('plan') || 'free';
  const plan = plans.find(({ name }) => name === planName) || plans[0];

  const FetchFiles = useCallback(async () => {
    setLoading(true);
    setFiles(
      localStorage.getItem('files')
        ? JSON.parse(localStorage.getItem('files') || '[]')
        : [],
    );
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
    const files = isDrop ? event.dataTransfer.files : event.target.files;
    await uploadFile(files);
  };

  // const downloadFile = async (hash: string) => {
  //   try {
  //     await new Promise<void>(resolve =>
  //       setTimeout(() => {
  //         resolve();
  //       }, 2000),
  //     );

  // interface IQuery {
  //   [key: string]: any;
  // }

  //     const fileResponse = await api.get({
  //       route: 'v1',
  //       service: Service.IPFS,
  //       query: { hash: `${hash}` },
  //     });

  //     console.log(fileResponse);

  //     setLoading(true);
  //     await new Promise<void>(resolve =>
  //       setTimeout(() => {
  //         resolve(setLoading(false));
  //       }, 500),z
  //     );

  //     toast.success('Download Successfully');
  //   } catch (error: any) {
  //     setUploading(false);
  //     toast.error(error.message);
  //   }
  // };

  const uploadFile = async (fileArray: any) => {
    setUploading(true);
    try {
      await new Promise<void>(resolve =>
        setTimeout(() => {
          resolve();
        }, 2000),
      );

      const formData = new FormData();
      formData.set('file', fileArray[0]);

      const newFileResponse = await axios
        .post('http://localhost:8081/v1/', formData)
        .then(res => {
          const newFile: IFile = {
            name: fileArray[0].name,
            hash: res.data.data.hash,
            size: fileArray[0].size,
          };
          localStorage.setItem('files', JSON.stringify([...files, newFile]));
          setFiles([...files, newFile]);
        });

      // const newFileResponse = await Axios.post(
      //   'https://1276-45-174-189-188.sa.ngrok.io/v1',
      //   formData,
      //   {
      //     headers: {
      //       'Content-Type': 'multipart/form-data',
      //       'Access-Control-Allow-Origin': '*',
      //       'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
      //     },
      //   },
      // );
      // .then(resp => {
      //   if (resp.status === 200) {
      //     console.log('File uploaded');
      //   }
      // });

      console.log(newFileResponse);

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
                  {formatSize(plan.storage - getTotalStorage())}{' '}
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
              {files.length > 0 ? (
                files.map(file => (
                  <ListRow key={file.hash}>
                    <ListItem>
                      <NameContent>
                        <ActionsButton>
                          <MdOutlineFileDownload size={24} />
                        </ActionsButton>
                        {file.name}
                      </NameContent>
                    </ListItem>
                    <ListItem>
                      <HashItem>
                        <HashLink
                          href={`https://ipfs.io/ipfs/${file.hash}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {isMobile ? stringEllipsis(file.hash, 18) : file.hash}
                        </HashLink>
                        <Copy data={file.hash} />
                      </HashItem>
                    </ListItem>
                    <ListItem>
                      <ItemContent>{formatSize(file.size)}</ItemContent>
                    </ListItem>
                  </ListRow>
                ))
              ) : (
                <EmptyRow htmlFor="input">Add an item to get started!</EmptyRow>
              )}
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
