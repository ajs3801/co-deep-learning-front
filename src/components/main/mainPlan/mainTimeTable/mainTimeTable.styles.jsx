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


export const MainTimeTableContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 11%);
  grid-template-rows: repeat(33, minmax(10px, 20px));
  justify-content: center;
  gap: 5px;
  row-gap: 2px;
  grid-auto-flow: column;
  padding-bottom: 20px;
`;

export const MainTimeTableTimeContent = styled.div`
  width: 100%;
  height: 100%;
  text-align: end;
  display: flex;
  align-items: center;
`;

export const MainTimeTableContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: "#FFFFFF";
`;

export const MainTimeTableHeader = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 11%);
  grid-template-rows: repeat(1, minmax(20px, 30px));
  justify-content: center;
  gap: 5px;
`;

export const MainTimeHeaderContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

