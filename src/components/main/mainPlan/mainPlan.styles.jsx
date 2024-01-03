import styled from "@emotion/styled";

export const MainPlanContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  height: calc(var(--vh, 1vh) * 100);
`;

export const MainPlanMemberContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(36px, 56px));
  grid-template-rows: repeat(1, minmax(36px, 56px));
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  margin-top: 30px;
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

export const MainPlanMember = styled.div`
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
  height: 78px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: #FFF;
  margin: auto;
  margin-top: 10px;
`;

export const MainPlanLabel = styled.p`
  color: #000;
  font-family: "Pretendard-Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-left: 10px;
  margin-top: 10px;
`;

export const MainPlanLabelBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 10px;
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
