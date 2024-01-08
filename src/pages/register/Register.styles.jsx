import styled from "@emotion/styled";

export const RegisterHeader = styled.div`
  width: 100%;
  max-width: 400px;
  height: 56px;
  position: absolute;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F8F8F8;
  border-bottom: 0.5px solid #C7C7C7;
  color: var(--grey-black, #1F1F1F);
  text-align: center;
  font-family: "Pretendard-Regular";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 20px */
  letter-spacing: -0.4px;
`;

export const BackIcon = styled.img`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 100;
`;


export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  height: calc(var(--vh, 1vh) * 100);
  overflow: scroll;
`;

export const RegisterContent = styled.div`
  width: 100%;
  max-width: 400px;
  margin: auto;
  margin-top: 60px;
`;
