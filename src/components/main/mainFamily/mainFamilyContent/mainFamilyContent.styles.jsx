import styled from "@emotion/styled";

export const MainFamilyContentHolderSelected = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  border: 1px solid var(--grey-30, #BCBCBC);
  background: #FFF;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 10px;
`

export const MainFamilyContentHolderNonSelected = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 10px;
`


export const MainFamilyProfile = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 36px;
  background-color: grey;
  position: absolute;
  top: -20px;
  border: none;
`;

export const MainFamilyTime = styled.div`
  margin-top: 15px;
  width: 90%;
  height: 18px;
  border-radius: 2px;
  color: #6A6A6A;
  font-family: "Pretendard-Regular";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainFamilyMessage = styled.div`
  width: 90%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-family: "Pretendard-Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.48px;
`;

export const MainFamilyReply = styled.div`
  width: 90%;
  height: 21px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--grey-black, #1F1F1F);
  font-family: "Pretendard-Regular";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  border: 0.5px solid var(--grey-30, #BCBCBC);
  border-radius: 12px;
`;
