import styled from "@emotion/styled";

export const LandingContainer = styled.div`
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LandingLogo = styled.img`
  width: 300px;
  height: 143px;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LandingButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 50px;
`;

export const LandingRegisterButton = styled.button`
  width: 75%;
  height: 50px;
  border-radius: 8px;
  background: var(--main, #68B38F);
  border: none;
  margin: auto;
  margin-bottom: 0px;
  color: #FFF;
  font-family: "Pretendard-Regular";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 20px */
  letter-spacing: -0.4px;
`;

export const LandingLoginButton = styled.button`
  width: 75%;
  height: 50px;
  border-radius: 8px;
  background: var(--background, #F8F8F8);  
  border: none;
  border-radius: 8px;
  border: 1px solid var(--grey-30, #BCBCBC);
  margin: auto;
  margin-bottom: 0px;
  color: var(--grey-70, #626262);
  font-family: "Pretendard-Regular";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 20px */
  letter-spacing: -0.4px;
`;
