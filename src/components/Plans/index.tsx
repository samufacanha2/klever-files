import Button from 'components/Button';
import PlanItem from 'components/Layout/PlanItem';
import plans from 'mocks/plans';
import { PlansButton } from 'pages/Login/styles';
import React from 'react';
import { Container, PlansBody, PlansContainer } from './styles';

interface IPlansProps {
  setModalOpen: (value: boolean) => void;
  isModalOpen: boolean;
}

const Plans: React.FC<IPlansProps> = ({ setModalOpen, isModalOpen }) => {
  return (
    <Container isModalOpen={isModalOpen}>
      <PlansContainer>
        <PlansBody>
          {plans.map((plan, _) => (
            <PlanItem {...plan} key={plan.price} />
          ))}
        </PlansBody>
      </PlansContainer>
      <PlansButton>
        <Button styleType="secondary" onClick={() => setModalOpen(false)}>
          Close
        </Button>
      </PlansButton>
    </Container>
  );
};

export default Plans;
