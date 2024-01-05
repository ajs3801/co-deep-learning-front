import styled from "@emotion/styled";

export const EditPlanHolder = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: scroll;
  align-items: center;
  margin-top: 30px;
`;

export const TimeTableWholeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 1px solid #A29A9A;
  border-radius: 12px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const EditPlanTableContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 12%);
  grid-template-rows: repeat(39, 17px);
  justify-content: center;
  column-gap: 0.3px;
  row-gap: 0.3px;
  grid-auto-flow: column;
  padding-bottom: 20px;
  padding-top: 5px;
`;

export const EditPlanTableTimeContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: 0.3px solid var(--grey-10, #E9E9E9);

`;

export const EditPlanTableContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: "#F8F8F8";
  border-left: 0.3px solid var(--grey-10, #E9E9E9);
  border-right: 0.3px solid var(--grey-10, #E9E9E9);
  border-bottom: 0.3px solid var(--grey-10, #E9E9E9);
`;

export const EditPlanTableHeader = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 11%);
  grid-template-rows: repeat(1, 23px);
  justify-content: center;
  column-gap: 0.3px;
  row-gap: 0.3px;
  justify-content: center;
  gap: 4px;

  border-bottom: 1px solid #A29A9A;
`;

export const EditPlanHeaderContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

