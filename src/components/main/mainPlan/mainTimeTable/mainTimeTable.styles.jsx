import styled from "@emotion/styled";

export const MainTimeHolder = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const MainTimeLabel = styled.p`
  width: 95%;
  display: flex;
  justify-content: center;
  text-align: start;
  color: #000;
  font-family: "Pretendard-Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
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

export const MainTimeTableContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 12%);
  grid-template-rows: repeat(39, 17px);
  justify-content: center;
  column-gap: 0.5px;
  row-gap: 0.5px;
  grid-auto-flow: column;
  padding-bottom: 20px;
  padding-top: 5px;

`;

export const MainTimeTableTimeContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainTimeTableContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: "#F8F8F8";
`;

export const MainTimeTableHeader = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 11%);
  grid-template-rows: repeat(1, minmax(20px, 30px));
  justify-content: center;
  gap: 5px;

  border-bottom: 1px solid #A29A9A;
`;

export const MainTimeHeaderContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

