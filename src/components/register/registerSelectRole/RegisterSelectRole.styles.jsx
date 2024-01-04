import styled from "@emotion/styled";

export const RegisterSelectRoleHoder = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100 - 56px);
  align-items: center;
  justify-content: center;
  margin: auto;
`;

export const RegisterSelectRoleLabel = styled.p`
  color: #317756;
  font-family: "Pretendard-Regular";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.4px;
`;

export const RegisterSelectRoleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin: auto; */
  width: 75%;
  gap: 20px;
  margin-top: 10px;
`;

export const RegisterRoleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;

export const RegisterRoleImgContainer = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 8px;
  background-color: #FFF;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const RegisterRoleImg = styled.img`
  width: 54px;
  height: 54px;
`;

export const RegisterRoleLabel = styled.p`
  color: #000;
  font-family: "Pretendard-Regular";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 24px */
  letter-spacing: -0.48px;
`;
