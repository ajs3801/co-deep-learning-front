import styled from "@emotion/styled";

export const MainPlanContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
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

export const MainPlanLabel = styled.p`
  color: #000;
  font-family: "Pretendard-Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-left: 10px;
  margin-top: 20px;
`;

export const MainPlanContent = styled.div`
  width: 100%;
  height: 500px;
  background-color: #D9D9D9;
  margin: auto;
`;
