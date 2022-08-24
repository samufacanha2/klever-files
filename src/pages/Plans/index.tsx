import React from 'react';
import { Container, Plan, PlansBody, PlansContainer } from './styles';

const Plans: React.FC = () => {
  return (
    <Container>
      <PlansContainer>
        <PlansBody>
          <Plan>1 real</Plan>
          <Plan>2 real</Plan>
          <Plan>3 real</Plan>
        </PlansBody>
      </PlansContainer>
    </Container>
  );
};

export default Plans;
