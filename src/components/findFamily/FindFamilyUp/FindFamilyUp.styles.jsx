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
  width: 100%;
  height: 30px;
  margin-bottom: 20px;
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
  color: #000;
  font-family: "Pretendard-Regular";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 24px */
  letter-spacing: -0.48px;
`;

export const FindFamilyTextField = styled.input`
  width: 95%;
  resize: none;

  color: #000;
  font-family: "Pretendard-Regular";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 24px */
  letter-spacing: -0.48px;

  border: none;
  border-bottom: 1px solid black;
  background-color: var(--background, #F8F8F8);

  margin: auto;
  margin-top: 10px;
`;