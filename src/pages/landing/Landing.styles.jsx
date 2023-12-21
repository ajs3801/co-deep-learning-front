import styled from "@emotion/styled";

export const LandingContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LandingLogo = styled.div`
  width: 210px;
  height: 210px;
  background-color: #D9D9D9;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 80px;
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

export const LandingButton = styled.button`
  width: 70%;
  height: 50px;
  border-radius: 8px;
  background: var(--main, #FF47B5);
  border: none;
  margin: auto;
  margin-bottom: 0px;
  color: var(--white, #FFF);
  /* font-family: KoddiUD OnGothic; */
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 24px */
  letter-spacing: -0.48px;
`;