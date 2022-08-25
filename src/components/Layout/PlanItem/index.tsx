import Button from 'components/Button';
import React from 'react';
import { IPlanItem } from 'types';
import { Container, List, ListItem, Price, Status, Title } from './styles';

const PlanItem: React.FC<IPlanItem> = ({ name, price, pros, cons = [] }) => {
  return (
    <Container>
      <Title>{name}</Title>
      <List>
        {pros.map((pro, index) => (
          <ListItem>
            <Status>
              <p>✔️</p>
            </Status>
            <p>{pro}</p>
          </ListItem>
        ))}
        {cons.map((con, index) => (
          <ListItem>
            <Status>
              <p>❌</p>
            </Status>
            <p>{con}</p>
          </ListItem>
        ))}
      </List>
      <Price>{price ? `${price}/Month` : 'Free!'}</Price>
      {!!price && <Button>Buy now</Button>}
    </Container>
  );
};

export default PlanItem;
