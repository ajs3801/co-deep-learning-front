import styled from "@emotion/styled";

export const MainFamilySendMessageContainer = styled.div`
  width: 95%;
  height: 184px;
  border-radius: 8px;
  background-color: #FFF;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 20px;
  position: relative;
`;

export const MainFamilyLabel = styled.p`
  width: 90%;
  text-align: start;
  color: var(--grey-black, #1F1F1F);
  font-family: "Pretendard-Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.32px;

  margin-top: 25px;
`;

export const MainFamilySendMessageProfileContainer = styled.div`
  position: absolute;
  top: -28px;
  display: flex;
  justify-content: center;
`;

export const MainFamilySendMessageEmptyProfile = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 56px;
  border-style: dotted;
  margin-right: -20px;
  border-color: #D2D2D2;
  background-color: var(--grey-white, #FFF);
  border-width: 1;
  border-spacing: 5px;
`;

export const MainFamilySendMessageProfile = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 56px;
  background-color: grey;
  margin-right: -20px;
`;

export const MainFamilySendMessageQuestionBox = styled.div`
  width: 90%;
  height: 48px;
  border-radius: 4px;
  border: 0.5px solid #CCC;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  position: relative;
`;

export const QuestionBoxContent = styled.div`
  display: flex;
  align-items: center;
  
  color: var(--grey-black, #1F1F1F);
  font-family: "Pretendard-Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-left: 10px;
`;

export const QuestionDropDownSvgContainer = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

export const QuestionDropDownSvg = styled.img`
  width: 48px;
  height: 48px;
`;

export const QuestionDropDown = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: #FFF;
  position: absolute;
  top: 48px;
  left: 0px;
`;

export const QuestionDropDownContent = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

export const MainFamilySendMessageSendItButton = styled.button`
  width: 90%;
  height: 48px;
  border: none;
  border-radius: 4px;
  background: var(--main, #68B38F);  

  color: var(--grey-white, #FFF);
  font-family: "Pretendard-Regular";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const SendMessageModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  gap: 10px;
`;

export const SendMessageModalFirstLabel = styled.p`
  color: var(--grey-black, #1F1F1F);
  font-family: "Pretendard-Regular";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0px;
`;

export const SendMessageModalSecondLabel = styled.p`
  color: var(--grey-70, #626262);
  font-family: "Pretendard-Regular";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0px;
`;

export const SendMessageModalButton = styled.button`
  margin-top: 20px;
  width: 80%;
  height: 40px;
  border-radius: 8px;
  background: var(--main, #68B38F);
  color: #FFF;
  font-family: "Pretendard-Regular";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 20px */
  letter-spacing: -0.4px;
  border: none;
`;