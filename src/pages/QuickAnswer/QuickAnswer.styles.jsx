import styled from "@emotion/styled";

export const QuickAnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  height: calc(var(--vh, 1vh) * 100);
  overflow: scroll;
`;


export const QuickAnswerHeader = styled.div`
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

export const QuickAnswerBackIcon = styled.img`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 100;
`;

export const QuickAnswerContent = styled.div`
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

export const QuickAnswerButton = styled.button`
  border: none;
  width: 80%;
  height: 56px;

  border-radius: 8px;
  background-color: #68B38F;

  color: #FFF;
  font-family: "Pretendard-Regular";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 20px */
  letter-spacing: -0.4px;
  margin: auto;

  margin-top: 50px;
  margin-bottom: 50px;
`;

export const QuickAnswerDisEnabled = styled.button`
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
  margin-bottom: 50px;
`;