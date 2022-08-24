import Button from 'components/Button';
import React from 'react';
import {
  Container,
  ListBody,
  ListContainer,
  ListHeader,
  ListHeaders,
  ListItem,
  ListRow,
  SectionHeader,
  UploadContainer,
} from './styles';

const Home: React.FC = () => {
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
    </Container>
  );
};

export default Home;
