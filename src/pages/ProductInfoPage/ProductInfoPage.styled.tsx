import styled from "styled-components";

export const ScrollableMain = styled.div`
  max-height: calc(100vh - 135px);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 48px;
  width: 100%;
`;

export const MockupsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  width: 100%;
`;

export const MockupImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

export const FoundationLogo = styled.img`
  display: block;
  max-width: 300px;
  margin-top: 8px;
`;

export const Description = styled.p`
  margin: 0 0 20px;

  &:last-child {
    margin-bottom: 0;
  }

  font-weight: 300;
  font-size: 18px;
  line-height: 26px;
`;
