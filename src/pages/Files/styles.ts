import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { darken, lighten } from 'polished';
import { FadeIn } from 'styles/global';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  padding: 2rem 3rem;

  gap: 2rem;
`;

export const UploadContainer = styled.div`
  width: 40%;
  opacity: 0;

  animation: ${FadeIn} 0.3s ease-in-out 0.2s forwards;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const UploadLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  > div {
    &:nth-child(2) {
      width: 6rem;
    }
  }
`;

export const InputFile = styled.label<{ isDragging: boolean }>`
  padding: 1.25rem 1.5rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px dashed ${props => props.theme.card.border};
  border-radius: 0.5rem;

  background-color: ${props => lighten(0.1, props.theme.background)};

  background-color: ${props =>
    props.isDragging && darken(0.025, props.theme.card.background)} !important;
  border-color: ${props =>
    darken(props.isDragging ? 0.01 : 0, props.theme.card.border)};

  color: ${props => props.theme.white};
  font-weight: 400;
  font-size: 0.9rem;

  transition: 0.1s linear;

  &:hover {
    border-color: ${props => darken(0.05, props.theme.card.border)};
    background-color: ${props => darken(0.025, props.theme.card.background)};
  }

  input {
    display: none;
  }

  label {
    cursor: pointer;

    color: #f372ff;
    font-weight: 500;
  }
  &:hover {
    cursor: pointer;
    label {
      text-decoration: underline;
    }
  }
`;

export const ListContainer = styled.table`
  min-height: 30vh;
  background-color: ${props => props.theme.card.background};

  padding: 1rem;
  border-radius: 1rem;

  border-spacing: 0 0.5rem;
  opacity: 0;
  animation: ${FadeIn} 0.3s ease-in-out 0.15s forwards;
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
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }
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
  display: flex;
  flex-direction: row;

  justify-content: space-between;

  opacity: 0;
  animation: ${FadeIn} 0.3s ease-in-out 0.1s forwards;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const PlanInfo = styled.div`
  color: ${props => props.theme.white};

  font-size: 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;

  opacity: 0;
  animation: ${FadeIn} 0.3s ease-in-out 0.2s forwards;
`;

export const CurrentPlan = styled.div`
  color: ${props => props.theme.card.text};
  font-size: 1rem;
  display: flex;
  justify-content: flex-start;
  gap: 0.5rem;
`;

export const Plan = styled(Link)`
  color: ${props => props.theme.card.text};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const RemainingStorage = styled.div`
  color: ${props => props.theme.card.text};
  font-size: 1rem;
  display: flex;
  gap: 0.5rem;
`;
export const Remaining = styled.div``;

export const LoadingContainer = styled.div`
  color: ${props => props.theme.card.text};
  width: 100%;
  height: calc(100vh - 10rem);
  display: grid;
  place-items: center;
`;
