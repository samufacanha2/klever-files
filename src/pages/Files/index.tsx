import Button from 'components/Button';
import Copy from 'components/Copy';
import { fileHeaders } from 'configs/file/headers';
import files from 'mocks/files';
import React from 'react';
import {
  Container,
  CurrentPlan,
  HashItem,
  ListBody,
  ListContainer,
  ListHeader,
  ListHeaders,
  ListItem,
  ListRow,
  Plan,
  PlanInfo,
  Remaining,
  RemainingStorage,
  SectionHeader,
  UploadContainer,
} from './styles';

const Files: React.FC = () => {
  return (
    <Container>
      <UploadContainer>
        <Button>Upload</Button>
      </UploadContainer>
      <SectionHeader>Files</SectionHeader>

      <ListContainer>
        <ListHeaders>
          {fileHeaders.map(header => (
            <ListHeader>{header}</ListHeader>
          ))}
        </ListHeaders>
        <ListBody>
          {files.map(file => (
            <ListRow>
              <ListItem>
                {file.name}.{file.extension}
              </ListItem>
              <ListItem>
                <HashItem>
                  {file.hash} <Copy data={file.hash} />
                </HashItem>
              </ListItem>
              <ListItem>{file.size}B</ListItem>
              <ListItem>
                <a href="#">Config</a>
              </ListItem>
            </ListRow>
          ))}
        </ListBody>
      </ListContainer>

      <PlanInfo>
        <CurrentPlan>
          Your Plan:
          <Plan to="/plans">Free</Plan>
        </CurrentPlan>

        <RemainingStorage>
          Remaining Storage:
          <Remaining>42 KB</Remaining>
        </RemainingStorage>
      </PlanInfo>
    </Container>
  );
};

export default Files;
