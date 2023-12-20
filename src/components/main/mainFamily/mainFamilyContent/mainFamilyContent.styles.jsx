import styled from "@emotion/styled";

export const MainFamilyContentHolder = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  border: 0.5px solid #CCC;
  background: #FFF;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 10px;
`

export const MainFamilyProfile = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: grey;
  position: absolute;
  top: -20px;
`;

export const MainFamilyTime = styled.div`
  margin-top: 15px;
  width: 50px;
  height: 18px;
  border-radius: 2px;
  background-color: #F4F4F4;
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
  width: 70%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-family: "Pretendard-Regular";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.48px;
`;