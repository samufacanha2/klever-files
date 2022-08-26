import PlanItem from 'components/Layout/PlanItem';
import plans from 'mocks/plans';
import { PlansButton } from 'pages/Login/styles';
import React from 'react';
import { Container, PlansBody, PlansContainer } from './styles';

interface IPlansProps {
  setModalOpen: (value: boolean) => void;
}

const Plans: React.FC<IPlansProps> = ({ setModalOpen }) => {
  return (
    <Container>
      <PlansContainer>
        <PlansBody>
          {plans.map((plan, _) => (
            <PlanItem {...plan} key={plan.price} />
          ))}
        </PlansBody>
      </PlansContainer>
      <PlansButton onClick={() => setModalOpen(false)}>Close</PlansButton>
    </Container>
  );
};

export default Plans;
