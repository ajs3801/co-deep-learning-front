import styled from "@emotion/styled";

export const FindFamilyUpContainer = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 70px;
  justify-content: center;
  align-items: center;
`;

export const FindFamilyNameLabelContainer = styled.div`
  width: 70%;
  height: 56px;
  margin-bottom: 20px;

  border-radius: 8px;
  border: 1px solid #BCBCBC;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FindFamilyNameLabel = styled.p`
  width: 100%;
  text-align: center;
  color: #000;
  text-align: center;
  font-family: "Pretendard-Regular";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 24px */
  letter-spacing: -0.48px;
  margin: 0px;

`;

export const FindFamilyFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  align-items: center;
`;

export const FindFamilyFieldLabel = styled.div`
  display: flex;
  justify-content: start;
  width: 95%;

  color: var(--main, #68B38F);
  font-family: "Pretendard-Regular";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 20px */
  letter-spacing: -0.4px;
`;

export const FindFamilyTextField = styled.input`
  width: 100%;
  resize: none;

  color: #000;
  font-family: "Pretendard-Regular";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 24px */
  letter-spacing: -0.48px;

  border: none;
  border-bottom: 0.5px solid black;
  background-color: var(--background, #F8F8F8);

  margin: auto;
  padding-bottom: 8px;
  margin-top: 10px;
  padding-left: 10px;
  margin-bottom: 10px;
`;

export const FindFamilyFieldWholeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


export const FindFamilyWarningLabel = styled.p`
  width: 95%;
  color: #FF3232;
  font-family: "Pretendard-Regular";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 14px */
  letter-spacing: -0.28px;
  margin-top: -5px;
`;

export const FindFamilyGreenLabel = styled.p`
  width: 95%;
  color: #68B38F;
  font-family: "Pretendard-Regular";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 14px */
  letter-spacing: -0.28px;
  margin-top: -5px;
`;