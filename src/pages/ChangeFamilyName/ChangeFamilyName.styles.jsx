import styled from "@emotion/styled";

export const ChangeFamilyNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  max-width: 400px;
  height: calc(var(--vh, 1vh) * 100);
`;

export const ChangeFamilyNameHeader = styled.div`
  width: 100%;
  max-width: 400px;
  height: 56px;
  position: absolute;
  top: 0px;
  background: #F8F8F8;
  border-bottom: 0.5px solid #C7C7C7;
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

export const ChangeFamilyNameBackIcon = styled.img`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 100;
`;

export const ChangeFamilyNameContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  height: calc(var(--vh, 1vh) * 100 - 56px);
  overflow: scroll;
  margin-top: 56px;
`;

