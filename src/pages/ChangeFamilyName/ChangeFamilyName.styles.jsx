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
  justify-content: start;
  align-items: center;
  width: 100%;
  max-width: 400px;
  height: calc(var(--vh, 1vh) * 100 - 56px);
  overflow: scroll;
  margin-top: 56px;
  gap: 15px;
`;

export const ChangeFamilyLabel = styled.p`
  width: 95%;
  color: var(--main_text, #317756);
  font-family: "Pretendard-Regular";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.32px;
`;

export const ChangeFamilyHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: 60px;
`;

export const ChangeFamilyImg = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 56px;
`;

export const ChangeFamilyInput = styled.input`
  width: 80%;
  height: 48px;

  border: none;
  border-radius: 8px;
  border: 0.3px solid var(--grey-30, #BCBCBC);
  background: var(--background, #F8F8F8);

  color: #787878;
  font-family: "Pretendard-Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ChangeFamilyButton = styled.button`
  border: none;
  width: 80%;
  height: 56px;

  border-radius: 8px;
  background: var(--main, #68B38F);

  color: #FFF;
  font-family: "Pretendard-Regular";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 20px */
  letter-spacing: -0.4px;

  margin: auto;

  margin-top: 60px;
  margin-bottom: 20px;
`;
