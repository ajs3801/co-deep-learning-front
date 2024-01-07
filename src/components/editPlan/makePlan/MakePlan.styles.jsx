import styled from "@emotion/styled";
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';

export const MakePlanContainer = styled.div`
  width: 100%;
  max-width: 400px;
  height: 390px;
  position: absolute;
  bottom: 0px;
  /* left: 0px; */
  border-radius: 16px 16px 0px 0px;
  background: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  margin: auto;
  gap: 8px;
`;

export const MakePlanExitButtonContainer = styled.div`
  width: 95%;
  height: 40px;
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 3px;
`;

export const MakePlanExitButton = styled(CloseIcon)`
  width: 32px;
  height: 32px;
  fill: #8F8F8F;
`;

export const MakePlanTodoContainer = styled.input`
  padding-left: 10px;

  border: none;
  width: 95%;
  height: 48px;
  border-radius: 8px;
  border: 0.3px solid var(--grey-30, #BCBCBC);
  background: var(--background, #F8F8F8);

  color: var(--grey-black, #1F1F1F);
  font-family: "Pretendard-Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const MakePlanDayContainer = styled.div`
  width: 95%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MakePlanDayContent = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: 0.3px solid var(--grey-30, #BCBCBC);
  background: var(--background, #F8F8F8);

  color: var(--grey-70, #626262);
  font-family: "Pretendard-Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MakPlanDayContentSelected = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: var(--main, #68B38F);

  color: var(--grey-white, #FFF);
  font-family: "Pretendard-Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MakePlanTimeContainer = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MakePlanTimeContentHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 48%;
  height: 150px;
  gap: 10px;
  overflow: scroll;
`;

export const MakePlanTimeContent = styled.div`
  width: 100%;
  height: 140px;
  border-radius: 8px;
  border: 1px solid var(--grey-30, #BCBCBC);
  overflow: scroll;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
  gap: 10px;
`;

export const MakePlanTimeContentLabel = styled.div`
  color: var(--grey-70, #626262);
  font-family: "Pretendard-Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const MakePlanTimeContentNonSelect = styled.div`
  width: 100%;
  height: 40px;
  text-align: center;
  padding: 5px;
  color: var(--grey-black, #1F1F1F);
  font-family: "Pretendard-Regular";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const MakePlanTimeContentSelect = styled.div`
  width: 90%;
  height: 40px;
  text-align: center;
  padding: 5px;
  border-radius: 8px;
  background: rgba(217, 217, 217, 0.50);
  color: var(--grey-black, #1F1F1F);
  font-family: "Pretendard-Regular";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const MakePlanButtonContainer = styled.div`
  width: 95%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
`;

export const MakePlanDeleteButtonContainer = styled.div`
  width: 15%;
  height: 48px;
  border: 0.5px solid #BCBCBC;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MakePlanDeleteButton = styled(DeleteIcon)`
  width: 24px;
  height: 24px;
  border: none;
  z-index: 100;
`;

export const MakePlanCompleteButton = styled.button`
  border: none;
  width: 80%;
  height: 48px;
  border-radius: 8px;
  background: var(--main, #68B38F);
  color: #FFF;
  font-family: "Pretendard-Regular";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 20px */
  letter-spacing: -0.4px;
`;

