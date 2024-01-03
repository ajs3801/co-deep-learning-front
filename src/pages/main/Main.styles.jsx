import styled from "@emotion/styled";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  height: calc(var(--vh, 1vh) * 100 - 56px);
`;

export const Header = styled.div`
  width: 100%;
  max-width: 400px;
  height: 56px;
  position: absolute;
  background: var(--background, #F8F8F8);
  border-bottom: 0.5px solid #C7C7C7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderLogo = styled.img`
  width: 80px;
  height: 17px;
`;

export const MainContent = styled.div`
  width: 100%;
  max-width: 400px;
  height: 100%;
  overflow: scroll;
  margin-top: 56px;
`;

export const Footer = styled.div`
  width: 100%;
  max-width: 400px;
  height: 56px;
  position: absolute;
  bottom: 0px;
  background: var(--grey-white, #FFF);  
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const FooterButton = styled.img`
  border: none;
  width: 32px;
  height: 32px;
`;

export const MainBellIcon = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 100;
`;