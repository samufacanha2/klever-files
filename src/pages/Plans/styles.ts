import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 3rem;
  gap: 2rem;
`;

export const PlansContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const PlansBody = styled.div`
  min-height: 60vh;
  width: 100%;
  display: flex;

  gap: 3rem;
`;

export const SectionHeader = styled.div`
  color: ${props => props.theme.white};
  font-size: 2.5rem;
  font-weight: bold;
`;

export const Plan = styled.div`
  background-color: ${props => props.theme.white};
  width: 50%;
  border-radius: 1rem;
  padding: 1rem;
`;
