import styled from "@emotion/styled";

export const QuickAnswerContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: auto;
  margin-top: 56px;
  margin-bottom: 20px;
  overflow: scroll;
`;

export const QuickAnswerContentLabel = styled.p`
  width: 95%;
  color: var(--main_text, #317756);
  font-family: "Pretendard-Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.32px;
`;

export const QuickAnswerContentGrid = styled.div`
  margin: auto;
  width: 95%;
  display: grid;
  grid-template-columns: repeat(3, minmax(80px, 30%));
  grid-template-rows: repeat(5, minmax(32px, 40px));
  justify-content: center;
  gap: 10px;
  row-gap: 20px;
`;

export const QuickAnswerContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: #FFF;

  color: #000;
  font-family: "Pretendard-Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const QuickAnswerContentClicked = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: #68B38F;

  color: #FFF;
  font-family: "Pretendard-Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
