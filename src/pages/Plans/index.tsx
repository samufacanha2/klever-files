import PlanItem from 'components/Layout/PlanItem';
import React from 'react';
import { Container, Plan, PlansBody, PlansContainer } from './styles';

const Plans: React.FC = () => {
  return (
    <Container>
      <PlansContainer>
        <PlansBody>
          <Plan>
            <PlanItem></PlanItem>
          </Plan>
          <Plan>
            <PlanItem></PlanItem>
          </Plan>
          <Plan>
            <PlanItem></PlanItem>
          </Plan>
          <Plan>
            <PlanItem></PlanItem>
          </Plan>
        </PlansBody>
      </PlansContainer>
    </Container>
  );
};

export default Plans;
