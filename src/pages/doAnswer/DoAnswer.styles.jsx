import styled from "@emotion/styled";

export const DoAnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  max-width: 400px;
  height: calc(var(--vh, 1vh) * 100);
`;

export const DoAnswerHeader = styled.div`
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

export const DoAnswerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  max-width: 400px;
  height: calc(var(--vh, 1vh) * 100 - 56px);
  overflow: scroll;
  margin-top: 56px;
  gap: 10px;
`;

export const DoAnswerContentQuestion = styled.p`
  color: var(--grey-black, #1F1F1F);
  font-family: "Pretendard-Regular";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.4px;
`;

export const DoAnswerNonSelected = styled.div`
  width: 90%;
  height: 48px;
  border-radius: 4px;
  background: #FFF;

  display: flex;
  justify-content: start;
  align-items: center;

  padding-left: 10px;

  color: var(--grey-black, #1F1F1F);
  font-family: "Pretendard-Regular";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const DoAnswerSelected = styled.div`
  width: 90%;
  height: 48px;
  border-radius: 4px;
  background: #68B38F;

  display: flex;
  justify-content: start;
  align-items: center;

  padding-left: 10px;

  color: var(--grey-white, #FFF);
  font-family: "Pretendard-Regular";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const DoAnswerDisabledButton = styled.button`
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

  margin-top: 50px;
  margin-bottom: 20px;
`;

export const DoAnswerButton = styled.button`
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

  margin-top: 50px;
  margin-bottom: 20px;
`;

export const DoAnswerInputField = styled.input`
  border: none;
  width: 90%;
  height: 48px;
  
  display: flex;
  justify-content: start;
  align-items: center;

  padding-left: 10px;

  border-radius: 4px;
  border: 0.5px solid #CCC;
  background: #FFF;

  color: var(--grey-black, #1F1F1F);
  font-family: "Pretendard-Regular";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 20px */
  letter-spacing: -0.4px;
`;
