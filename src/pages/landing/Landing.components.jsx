import React from "react";

import { 
  LandingContainer,
  LandingLogo,
  LandingButtonContainer,
  LandingButton,
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
        <LandingButton onClick={onClickRegister}>회원가입</LandingButton>
        <LandingButton onClick={onClickLogin}>로그인</LandingButton>
      </LandingButtonContainer>
    </LandingContainer>
  )
}

export default Landing;