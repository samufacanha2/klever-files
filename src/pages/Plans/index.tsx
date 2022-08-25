import PlanItem from 'components/Layout/PlanItem';
import plans from 'mocks/plans';
import React from 'react';
import { Container, PlansBody, PlansContainer } from './styles';

const Plans: React.FC = () => {
  return (
    <Container>
      <PlansContainer>
        <PlansBody>
          {plans.map((plan, _) => (
            <PlanItem {...plan} key={plan.price} />
          ))}
        </PlansBody>
      </PlansContainer>
    </Container>
  );
};

export default Plans;
