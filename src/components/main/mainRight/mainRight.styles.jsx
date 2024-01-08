import styled from "@emotion/styled";

export const MainRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin: auto;
  margin-top: 20px;
  overflow: scroll;
  gap: 15px;
`;

// my profile
export const MainRightMyProfileContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  gap: 5px;
`;

export const MainRightMyProfile = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 80px;
  flex: 1;
`;

export const MainRightMyName = styled.div`
  flex: 2;
  color: var(--grey-black, #1F1F1F);
  font-family: "Pretendard-Regular";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 24px */
  letter-spacing: -0.48px;
  margin-left: 10px;

  @media (max-width: 320px) {
    font-size: 20px;
  }
`

export const MainRightEditProfileContainer = styled.div`
  display: flex;
  flex: 2;
  justify-content: end;
  align-items: center;
`;

export const MainRightEditProfileContent = styled.button`
  width: 117px;
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 5px;
  padding-right: 8px;
  border-radius: 8px;
  border: 1px solid var(--grey-30, #BCBCBC);

  @media (max-width: 320px) {
    width: 110px;
  }
`;

export const MainRightEditProfileContentImg = styled.img`
  width: 25px;
  height: 25px;
`;

export const MainRightEditProfileContentLabel = styled.p`
  color: var(--grey-70, #626262);
  font-family: "Pretendard-Regular";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (max-width: 320px) {
    font-size: 12px;
  }
`;


// family profile

export const FamilyListContainer = styled.div`
  width: 90%;
  border-radius: 8px;
  background: var(--grey-white, #FFF);  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FamilyListLabel = styled.p`
  width: 95%;
  color: var(--grey-60, #797979);
  font-family: "Pretendard-Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 16px */
  letter-spacing: -0.32px;
`;

export const FamilyListGrid = styled.div`
  width: 95%;
  display: grid;
  grid-template-columns: repeat(5, 20%);
	grid-template-rows: repeat(auto, 70px);
  
`;

export const FamilyListContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FamilyListContentImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: grey;
`;

export const FamilyListContentLabel = styled.p`
  color: var(--grey-black, #1F1F1F);
  font-family: "Pretendard-Regular";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 14px */
  letter-spacing: -0.28px;
`;


// button container
export const MainRightButtonContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MainRightButton = styled.button`
  width: 49%;
  height: 56px;
  border: none;

  border-radius: 8px;
  border: 1px solid var(--grey-30, #BCBCBC);
  background: var(--grey-white, #FFF);

  color: var(--grey-70, #626262);
  font-family: "Pretendard-Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
