import styled from "@emotion/styled";

export const MainPlanContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  height: calc(var(--vh, 1vh) * 100);
`;

export const MainPlanEditPlanContainer = styled.div`
  width: 97%;
  height: 48px;
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 10px;
`;

export const MainPlanEditPlanContent = styled.button`
  width: 90px;
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 3px;
  padding-right: 3px;
  border-radius: 8px;
  border: 1px solid var(--grey-30, #BCBCBC);
`;

export const MainPlanEditPlanContentImg = styled.img`
  width: 25px;
  height: 25px;
`;

export const MainPlanEditPlanContentLabel = styled.p`
  color: var(--grey-70, #626262);
  font-family: "Pretendard-Regular";
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const MainPlanMemberContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(36px, 56px));
  grid-template-rows: repeat(1, minmax(36px, 56px));
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 60px;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 20px;
  gap: 20px;
  @media (max-width: 300px) {
    gap: 10px;
    grid-template-columns: repeat(5, minmax(36px, 48px));
    grid-template-rows: repeat(1, minmax(36px, 48px));
  }
`;

export const MainPlanMemberHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainPlanMember = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: grey;
`;

export const MainPlanMemberName = styled.p`
  color: #000;
  font-family: "Pretendard-Regular";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const MainPlanLabelContainer = styled.div`
  width: 95%;
  height: 73px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: #FFF;
  margin: auto;
  margin-top: 10px;
`;

export const MainPlanLabel = styled.p`
  width: 100%;
  height: 28px;
  color: #000;
  font-family: "Pretendard-Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-left: 10px;
  margin: 0px;
  margin-top: 10px;
  margin-bottom: 7px;
`;

export const MainPlanLabelBottom = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 10px;
  padding-bottom: 5px;
  gap: 10px;
`;

export const MainPlanLabelBottomColor = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 16px;
`;

export const MainPlanLabelBottomDate = styled.div`
  color: var(--grey-black, #1F1F1F);
  font-family: "Pretendard-Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const MainPlanLabelBottomPlan = styled.div`
  color: var(--grey-black, #1F1F1F);
  font-family: "Pretendard-Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const MainPlanContent = styled.div`
  width: 95%;
  height: 500px;
  margin-left: 15px;
  margin-right: 15px;
  margin: auto;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;
