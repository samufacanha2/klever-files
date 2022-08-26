import styled, { css } from 'styled-components';

export const Container = styled.div<{ isModalOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 3rem;
  gap: 2rem;
  backdrop-filter: brightness(0.4);

  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;

  ${props =>
    props.isModalOpen &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`;

export const PlansContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;

export const PlansBody = styled.div`
  min-height: 60vh;
  width: 100%;
  display: flex;

  gap: 1.4rem;

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
