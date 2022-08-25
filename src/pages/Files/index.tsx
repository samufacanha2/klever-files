import Button from 'components/Button';
import React from 'react';
import {
  Container,
  CurrentPlan,
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
          <ListHeader>Name</ListHeader>
          <ListHeader>Size</ListHeader>
          <ListHeader>Actions</ListHeader>
        </ListHeaders>
        <ListBody>
          <ListRow>
            <ListItem>Test.png</ListItem>
            <ListItem>42 KB</ListItem>
            <ListItem>
              <a href="#">Config</a>
            </ListItem>
          </ListRow>
          <ListRow>
            <ListItem>Test.jpg</ListItem>
            <ListItem>42 KB</ListItem>
            <ListItem>
              <a href="#">Config</a>
            </ListItem>
          </ListRow>
          <ListRow>
            <ListItem>Teste.webp</ListItem>
            <ListItem>42 KB</ListItem>
            <ListItem>
              <a href="#">Config</a>
            </ListItem>
          </ListRow>
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
