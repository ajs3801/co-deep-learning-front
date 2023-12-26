import styled from "@emotion/styled";

export const FindFamilyUpContainer = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 100px;
  justify-content: center;
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
`;