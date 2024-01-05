import React, { useState } from "react";

import { 
  LoginContentContainer,
  LoginFieldContainer,
  LoginFieldHolder,
  LoginFieldLabel,
  LoginTextField,
  LoginButton,
  LoginTextContainer,
} from "../login/LoginContent/LoginContent.styles";

import { useNavigate } from "react-router-dom";

const RegisterCreateContent = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  
  const onChangeID = (event) => {
    setId(event.target.value)
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onClickLogin = () => {
    navigate("/main/find");
  };

  return (
    <LoginContentContainer>
      <LoginFieldContainer>
        <LoginTextContainer>
          <LoginFieldHolder>
            <LoginFieldLabel>가족 아이디</LoginFieldLabel>
            <LoginTextField onChange={onChangeID} placeholder="아이디를 입력해주세요"/>
          </LoginFieldHolder>

          <LoginFieldHolder>
            <LoginFieldLabel>가족 비밀번호</LoginFieldLabel>
            <LoginTextField onChange={onChangePassword} type="password" placeholder="비밀번호를 입력해주세요" />
          </LoginFieldHolder>
        </LoginTextContainer>

        <LoginButton onClick={onClickLogin}>
          가족 만들기
        </LoginButton>
      </LoginFieldContainer>
    </LoginContentContainer>
  )
};

export default RegisterCreateContent;