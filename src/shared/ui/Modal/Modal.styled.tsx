import styled from "styled-components";

export const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
  transition: opacity 0.2s ease;
  z-index: 200;
`;

export const Dialog = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
    scale(${({ $isOpen }) => ($isOpen ? 1 : 0.96)});
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;

  width: min(360px, calc(100vw - 32px));
  padding: 24px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.text.onLight.primary};
  z-index: 201;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.2;
  text-transform: uppercase;
`;

export const CloseButton = styled.button`
  border: none;
  background: transparent;
  font-size: 28px;
  line-height: 1;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.onLight.primary};
  padding: 0 4px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
