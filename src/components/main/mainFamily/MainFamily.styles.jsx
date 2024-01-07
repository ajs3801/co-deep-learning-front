import styled from "@emotion/styled";

export const MainFamilyHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

export const MainFamilyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(120px, 168px));
  grid-template-rows: repeat(${props => props.gridRow}, 118px);
  gap: 10px;
  row-gap: 40px;
  margin-top: 30px;
  margin-bottom: 10px;
  padding-left: 5px;
  padding-right: 5px;
`;
