import styled from "@emotion/styled";

export const FindFamilyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  overflow: scroll;
`;


export const FindFamilyHeader = styled.div`
  width: 100%;
  max-width: 400px;
  height: 56px;
  position: absolute;
  top: 0px;
  background: #D9D9D9;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #000;
  text-align: center;
  font-family: "Pretendard-Regular";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 20px */
  letter-spacing: -0.4px;
`;

export const FindFamilyBackIcon = styled.img`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 100;
`;

export const FindFamilyContent = styled.div`
  display: flex;
  width: 100%;
  max-width: 400px;
  margin: auto;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: scroll;
`;