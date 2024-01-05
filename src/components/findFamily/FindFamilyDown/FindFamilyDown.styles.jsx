import styled from "@emotion/styled";

export const FindFamilyDownContainer = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 50px;
  align-items: center;
`;

export const NextButton = styled.button`
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
`;

export const NextDisEnabled = styled.button`
  border: none;
  width: 80%;
  height: 56px;

  border-radius: 8px;
  background: #68B38F80;

  color: #FFF;
  font-family: "Pretendard-Regular";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 20px */
  letter-spacing: -0.4px;

  margin: auto;
`;

export const FindFamilyDownText = styled.p`
  color: #333;
  font-family: "Pretendard-Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 16px */
  letter-spacing: -0.32px;
  margin: 0px;
`;



export const FindFamilyDownCreateText = styled.p`
  color: #666;
  font-family: "Pretendard-Regular";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 14px */
  letter-spacing: -0.28px;
  text-decoration-line: underline;
  margin: 0px;

`;
