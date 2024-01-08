import React, { useState } from "react";

import { 
  LoginContentContainer,
  LoginFieldContainer,
  LoginFieldHolder,
  LoginFieldLabel,
  LoginTextField,
  LoginButton,
  LoginTextContainer,
  LoginButtonDisabled,
  LoginContentdWarningLabel,
} from "./LoginContent.styles";

import { useNavigate } from "react-router-dom";

const LoginContent = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const [showLabel, setShowLabel] = useState(false);

  const onChangeID = (event) => {
    setId(event.target.value)
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onClickLogin = () => {
    // success
    navigate("/main");

    // fail
    // setShowLabel(true);
  };

  return (
    <LoginContentContainer>
      <LoginFieldContainer>
        <LoginTextContainer>
          <LoginFieldHolder>
            <LoginFieldLabel>아이디</LoginFieldLabel>
            <LoginTextField onChange={onChangeID} placeholder="아이디를 입력해주세요"/>
          </LoginFieldHolder>

          <LoginFieldHolder>
            <LoginFieldLabel>비밀번호</LoginFieldLabel>
            <LoginTextField onChange={onChangePassword} type="password" placeholder="비밀번호를 입력해주세요" />
            { showLabel && <LoginContentdWarningLabel>아이디가 존재하지 않거나 비밀번호가 틀렸어요</LoginContentdWarningLabel>}
          </LoginFieldHolder>
        </LoginTextContainer>

        {
          (id && password) ? (
            <LoginButton onClick={onClickLogin}>
              로그인
            </LoginButton>
          ) : (
            <LoginButtonDisabled disabled>
              로그인
            </LoginButtonDisabled>
          )
        }
      </LoginFieldContainer>
    </LoginContentContainer>
  )
};

export default LoginContent;