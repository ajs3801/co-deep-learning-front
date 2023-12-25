import React from "react";

import { 
  LoginHeader, 
  LoginContainer,
  LoginBackIcon,
} from "../login/Login.styles";

import backIcon from "../../assets/images/backicon.svg";
import LoginContent from "../../components/login/LoginContent/LoginContent.components";

import { useNavigate } from "react-router-dom";

import RegisterCreateContent from "../../components/registerCreate/RegisterCreateContent.components";

const RegisterCreate = () => {
  const navigate = useNavigate();

  const onClickBackIcon = () => {
    navigate(-1);
  };

  return (
    <LoginContainer>
      <LoginHeader>
        <LoginBackIcon onClick={onClickBackIcon} src={backIcon} />
        가족 아이디 만들기
      </LoginHeader>

      <RegisterCreateContent />
    </LoginContainer>
  );
};

export default RegisterCreate;