import styled from "@emotion/styled";

export const QuickAnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  overflow: scroll;
`;


export const QuickAnswerHeader = styled.div`
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
  width: 95%;
  height: 48px;

  border-radius: 4px;
  background-color: #D9D9D9;

  color: #000;
  text-align: center;
  font-family: "Pretendard-Regular";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  margin: auto;

  margin-top: 50px;
  margin-bottom: 50px;
`;