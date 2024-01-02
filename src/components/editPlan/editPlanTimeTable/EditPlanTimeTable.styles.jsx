import styled from "@emotion/styled";

export const EditPlanHolder = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
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
  grid-template-columns: repeat(8, 11%);
  grid-template-rows: repeat(39, minmax(10px, 20px));
  justify-content: center;
  gap: 5px;
  row-gap: 2px;
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
`;

export const EditPlanTableContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: "#FFFFFF";
`;

export const EditPlanTableHeader = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 11%);
  grid-template-rows: repeat(1, minmax(20px, 30px));
  justify-content: center;
  gap: 5px;

  border-bottom: 1px solid #A29A9A;
`;

export const EditPlanHeaderContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

