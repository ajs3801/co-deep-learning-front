import React from "react";

import { 
  LoginHeader, 
  LoginContainer,
  LoginBackIcon,
} from "./Login.styles";

import backIcon from "../../assets/images/backicon.svg";
import LoginContent from "../../components/login/LoginContent/LoginContent.components";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const onClickBackIcon = () => {
    navigate(-1);
  };

  return (
    <LoginContainer>
      <LoginHeader>
        <LoginBackIcon onClick={onClickBackIcon} src={backIcon} />
        로그인
      </LoginHeader>

      <LoginContent />
    </LoginContainer>
  )
}

export default Login;