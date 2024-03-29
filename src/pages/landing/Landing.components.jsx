import React from "react";

import { 
  LandingContainer,
  LandingLogo,
  LandingButtonContainer,
  LandingRegisterButton,
  LandingLoginButton,
} from "./Landing.styles";

import Mainlogo from "../../assets/images/HARUMain.png";

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
      <LandingLogo src={Mainlogo}/>
      <LandingButtonContainer>
        <LandingRegisterButton onClick={onClickRegister}>회원가입</LandingRegisterButton>
        <LandingLoginButton onClick={onClickLogin}>로그인</LandingLoginButton>
      </LandingButtonContainer>
    </LandingContainer>
  )
}

export default Landing;