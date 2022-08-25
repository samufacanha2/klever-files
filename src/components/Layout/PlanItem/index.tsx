import Button from 'components/Button';
import React from 'react';
import { Container, List, Price, Title } from './styles';

const PlanItem: React.FC = () => {
  return (
    <Container>
      <Title>Start</Title>
      <List>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </List>
      <Price>$19.99 / Month</Price>
      <Button>Buy now</Button>
    </Container>
  );
};

export default PlanItem;
