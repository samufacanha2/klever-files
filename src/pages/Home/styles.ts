import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;

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
  background-color: ${props => props.theme.white};

  padding: 1rem;
  border-radius: 1rem;

  border-spacing: 0 0.5rem;
`;

export const ListHeaders = styled.thead`
  border-radius: 0.5rem;
  backdrop-filter: brightness(1.1);
`;

export const ListBody = styled.tbody``;

export const ListHeader = styled.th`
  font-weight: normal;
  padding: 1rem 2rem;
  text-align: left;
`;

export const ListRow = styled.tr`
  backdrop-filter: brightness(1.1);
  border-radius: 0.5rem;
`;

export const ListItem = styled.td`
  padding: 1rem 2rem;
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
