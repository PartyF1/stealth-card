import styled from "styled-components";

export const Actions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 33px;
`;

export const PageShell = styled.div`
  padding-left: 94px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background.light};
  color: ${({ theme }) => theme.colors.text.onLight.primary};
`;

export const WelcomeHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  padding: 24px 94px 24px 0;
  gap: 24px;
`;

export const LogoGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  min-width: 0;
`;

export const ProjectLogo = styled.span`
  font-size: 40px;
  line-height: 0.9;
  letter-spacing: -0.05em;
  text-transform: uppercase;
  white-space: nowrap;
`;

export const FoundationLogo = styled.img`
  display: block;
  max-height: 72px;
  width: auto;
`;

export const ContentRow = styled.div`
  flex: 1;
  min-height: 0;
  display: flex;
  gap: 0;
`;

export const SideColumn = styled.aside`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  min-height: 0;
`;

export const SideBody = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`;

export const SideFooter = styled.footer`
  flex-shrink: 0;
  padding-bottom: 24px;
`;

export const DirectorContact = styled.span`
  font-weight: 300;
  font-size: 18px;
  line-height: 26px;
`;

export const LoginModalActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const Splitter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: stretch;
  flex-shrink: 0;
`;

export const SplitterLine = styled.div`
  height: 100%;
  border-style: dashed;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.text.onLight.primary};
`;

export const MainColumn = styled.main`
  width: 60%;
  min-height: 0;
  padding: 0 94px 24px;
  display: flex;
  flex-direction: column;
`;
