import styled from "@emotion/styled";

export const FindFamilyWholeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FindFamilyListContainer = styled.div`
  width: 90%;
  border-radius: 8px;
  background: var(--grey-white, #FFF);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FindFamilyListLabel = styled.p`
  width: 95%;
  color: var(--grey-60, #797979);
  font-family: "Pretendard-Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 16px */
  letter-spacing: -0.32px;
`;

export const FindFamilyListGrid = styled.div`
  width: 95%;
  display: grid;
  grid-template-columns: repeat(5, 20%);
	grid-template-rows: repeat(auto, 70px);
  
`;

export const FindFamilyListContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FindFamilyListContentImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: grey;
`;

export const FindFamilyListContentLabel = styled.p`
  color: var(--grey-black, #1F1F1F);
  font-family: "Pretendard-Regular";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 14px */
  letter-spacing: -0.28px;
`;

export const FindFamilyBottomLabel = styled.p`
  width: 100%;
  text-align: center;
  color: var(--grey-70, #626262);
  font-family: "Pretendard-Regular";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
