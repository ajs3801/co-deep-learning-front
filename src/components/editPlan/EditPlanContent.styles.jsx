import styled from "@emotion/styled";

export const EditPlanContentContainer = styled.div`
  width: 100%;
  height: calc(var(--vh, 1vh) * 100 - 56px);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  overflow: scroll;
  gap: 10px;
  padding-bottom: 20px;
  margin-top: 0px;
`;

export const EditPlanContentLabel = styled.p`
  width: 95%;
  color: var(--main_text, #317756);
  font-family: "Pretendard-Regular";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.32px;
`;

export const EditPlanContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 92%;
  align-items: center;
  margin: auto;
  margin-top: 10px;

`;

export const EditPlanThroughImage = styled.div`
  width: 160px;
  height: 30px;
  border-radius: 20px;
  background-color: #D9D9D9;

  color: #000;
  font-family: "Pretendard-Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EditPlanSettingButton = styled.img`
  width: 29px;
  height: 29px;
`;


export const EditPlanTimeTableContainer = styled.div`
  display: flex;
  width: 92%;
  margin: auto;
  margin-top: 0px;
`;
