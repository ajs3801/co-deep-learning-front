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
} from "../login/LoginContent/LoginContent.styles";

import { useNavigate } from "react-router-dom";

const RegisterCreateContent = () => {
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

  const onClickMake = () => {
    // success
    navigate("/main/find");

    // fail
    // setShowLabel(true)
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
            { showLabel && <LoginContentdWarningLabel>가족 아이디가 이미 존재해요</LoginContentdWarningLabel>}
          </LoginFieldHolder>
        </LoginTextContainer>

        {
          (id && password) ? (
            <LoginButton onClick={onClickMake}>
              가족 만들기
            </LoginButton>
          ) : (
            <LoginButtonDisabled disabled>
              가족 만들기
            </LoginButtonDisabled>
          )
        }
      </LoginFieldContainer>
    </LoginContentContainer>
  )
};

export default RegisterCreateContent;