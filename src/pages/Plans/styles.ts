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

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const SectionHeader = styled.div`
  color: ${props => props.theme.white};
  font-size: 2.5rem;
  font-weight: bold;
`;
