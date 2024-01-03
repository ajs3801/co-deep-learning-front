import React from "react";

import { 
  LandingContainer,
  LandingLogo,
  LandingButtonContainer,
  LandingRegisterButton,
  LandingLoginButton,
} from "./Landing.styles";

import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const onClickRegister = () => {
    navigate("/register");
  };

  const onClickLogin = () => {
    navigate("/login");
  };

  return (
    <LandingContainer>
      <LandingLogo>로고</LandingLogo>
      <LandingButtonContainer>
        <LandingRegisterButton onClick={onClickRegister}>회원가입</LandingRegisterButton>
        <LandingLoginButton onClick={onClickLogin}>로그인</LandingLoginButton>
      </LandingButtonContainer>
    </LandingContainer>
  )
}

export default Landing;