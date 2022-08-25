import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  padding: 2rem 3rem;

  gap: 2rem;
`;

export const UploadContainer = styled.div`
  width: 40%;
`;

export const ListContainer = styled.table`
  min-height: 30vh;
  background-color: ${props => props.theme.card.background};

  padding: 1rem;
  border-radius: 1rem;

  border-spacing: 0 0.5rem;
`;

export const ListHeaders = styled.thead`
  border-radius: 0.5rem;
  backdrop-filter: brightness(1.6);
`;

export const ListBody = styled.tbody``;

export const ListHeader = styled.th`
  font-weight: normal;
  padding: 1rem 2rem;
  text-align: left;
  color: ${props => props.theme.card.text};
`;

export const ListRow = styled.tr`
  backdrop-filter: brightness(1.25);
  border-radius: 0.5rem;
`;

export const ListItem = styled.td`
  padding: 1rem 2rem;
  color: ${props => props.theme.card.text};
`;

export const HashItem = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const SectionHeader = styled.div`
  color: ${props => props.theme.white};
  font-size: 2.5rem;
  font-weight: bold;
`;

export const PlanInfo = styled.div`
  color: ${props => props.theme.white};

  font-size: 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const CurrentPlan = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Plan = styled(Link)`
  color: ${props => props.theme.white};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const RemainingStorage = styled.div`
  display: flex;
  gap: 0.5rem;
`;
export const Remaining = styled.div``;
