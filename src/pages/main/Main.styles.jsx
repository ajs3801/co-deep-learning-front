import styled from "@emotion/styled";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  height: 100%;
`;

export const Header = styled.div`
  width: 100%;
  max-width: 400px;
  height: 56px;
  position: absolute;
  background: #D9D9D9;
`;

export const MainContent = styled.div`
  width: 100%;
  max-width: 400px;
  margin-top: 56px;
  margin-bottom: 56px;
`;

export const Footer = styled.div`
  width: 100%;
  max-width: 400px;
  height: 56px;
  position: absolute;
  top: calc(100vh - 56px);
  background: #D9D9D9;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const FooterButton = styled.button`
  border: none;
  width: 48px;
  height: 48px;
  background-color: #9D9D9D;
`;