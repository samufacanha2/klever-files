import Button from 'components/Button';
import React from 'react';
import { IPlanItem } from 'types';
import {
  Container,
  List,
  ListItem,
  PaymentContainer,
  Price,
  Status,
  StyledLink,
  Title,
  UnderText,
} from './styles';

const PlanItem: React.FC<IPlanItem> = ({
  name,
  price,
  pros,
  cons = [],
  productLink,
  main,
}) => {
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
      <Price>{price ? `$${price}/Month` : 'Free!'}</Price>
      {!!price && (
        <PaymentContainer>
          <Button styleType={`${main ? 'primary' : 'outlined'}`}>
            Pay with Crypto
          </Button>
          <StyledLink
            href={productLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <UnderText>Pay with credit card</UnderText>
          </StyledLink>
        </PaymentContainer>
      )}
    </Container>
  );
};

export default PlanItem;
