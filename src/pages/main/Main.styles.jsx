import styled from "@emotion/styled";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  height: calc(var(--vh, 1vh) * 100 + 56px);
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
  height: 100%;
  margin-top: 56px;
  margin-bottom: 56px;
  padding-bottom: 100px;
  overflow: scroll;
`;

export const Footer = styled.div`
  width: 100%;
  max-width: 400px;
  height: 56px;
  position: absolute;
  bottom: 0px;
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

export const MainEditIcon = styled.img`
  width: 48px;
  height: 48px;
  position: absolute;
  top: 5px;
  right: 10px;
  z-index: 100;
`;