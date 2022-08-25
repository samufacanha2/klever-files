import Button from 'components/Button';
import React from 'react';
import { Container, List, ListItem, Price, Status, Title } from './styles';

const PlanItem: React.FC = () => {
  return (
    <Container>
      <Title>Start</Title>
      <List>
        <ListItem>
          <Status>
            <p>X</p>
          </Status>
          <p>Item 1</p>
        </ListItem>
        <ListItem>
          <Status>
            <p>X</p>
          </Status>
          <p>Item 1</p>
        </ListItem>
        <ListItem>
          <Status>
            <p>X</p>
          </Status>
          <p>Item 1</p>
        </ListItem>
        <ListItem>
          <Status>
            <p>X</p>
          </Status>
          <p>Item 1</p>
        </ListItem>
      </List>
      <Price>$19.99 / Month</Price>
      <Button>Buy now</Button>
    </Container>
  );
};

export default PlanItem;
