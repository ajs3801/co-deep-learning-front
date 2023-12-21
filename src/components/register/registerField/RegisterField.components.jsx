import React, { useState } from "react";

import { 
  RegisterFieldContainer,
  RegisterFieldLabel,
  RegisterTextField,
  RegisterFieldHolder,
  RegisterButton
} from "./RegisterField.styles";

import { useNavigate } from "react-router-dom";

const RegisterField = () => {
  const navigate = useNavigate();

  const [isEmail, setIsEmail] = useState(true);
  const [isName, setIsName] = useState(false);
  const [isID, setIsID] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Id, setId] = useState("");
  const [name, setName] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
    setTimeout(() => {
      setIsName(true);
    }, 1500)
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value)
    setTimeout(() => {
      setIsSubmit(true);
    }, 1500)
  };

  const onChangeId = (event) => {
    setId(event.target.value);
    setTimeout(() => {
      setIsPassword(true);
    }, 1500)
  };

  const onChangeName = (event) => {
    setName(event.target.value);
    setTimeout(() => {
      setIsID(true);
    }, 1500)
  };

  const onClickSubmit = () => {
    navigate("/main");
  }

  return (
    <RegisterFieldContainer>
      {
        isEmail && (
          <RegisterFieldHolder>
            <RegisterFieldLabel>이메일</RegisterFieldLabel>
            <RegisterTextField onChange={onChangeEmail} placeholder="이메일을 입력해주세요"/>
          </RegisterFieldHolder>
        )
      }

      {
        isName && (
          <RegisterFieldHolder>
            <RegisterFieldLabel>이름</RegisterFieldLabel>
            <RegisterTextField onChange={onChangeName} placeholder="이름을 입력해주세요"/>
          </RegisterFieldHolder>
        )
      }

      {
        isID && (
          <RegisterFieldHolder>
            <RegisterFieldLabel>아이디</RegisterFieldLabel>
            <RegisterTextField onChange={onChangeId} placeholder="아이디를 입력해주세요"/>
          </RegisterFieldHolder>
        )
      }

      {
        isPassword && (
          <RegisterFieldHolder>
            <RegisterFieldLabel>비밀번호</RegisterFieldLabel>
            <RegisterTextField onChange={onChangePassword} type="password" placeholder="비밀번호를 입력해주세요"/>
          </RegisterFieldHolder>
        )
      }

      {
        isSubmit && (
          <RegisterButton onClick={onClickSubmit}>가입완료</RegisterButton>
        )
      }
    </RegisterFieldContainer>
  );
};

export default RegisterField;