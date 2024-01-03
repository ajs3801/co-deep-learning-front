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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Id, setId] = useState("");
  const [name, setName] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value)
  };

  const onChangeId = (event) => {
    setId(event.target.value);
  };

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onClickSubmit = () => {
    navigate("/main/find");
  }

  return (
    <RegisterFieldContainer>
      <RegisterFieldHolder>
        <RegisterFieldLabel>이름</RegisterFieldLabel>
        <RegisterTextField onChange={onChangeName} placeholder="이름을 입력해주세요"/>
      </RegisterFieldHolder>

      <RegisterFieldHolder>
        <RegisterFieldLabel>아이디</RegisterFieldLabel>
        <RegisterTextField onChange={onChangeId} placeholder="아이디를 입력해주세요"/>
      </RegisterFieldHolder>

      <RegisterFieldHolder>
        <RegisterFieldLabel>비밀번호</RegisterFieldLabel>
        <RegisterTextField onChange={onChangePassword} type="password" placeholder="비밀번호를 입력해주세요"/>
      </RegisterFieldHolder>

      <RegisterFieldHolder>
        <RegisterFieldLabel>이메일</RegisterFieldLabel>
        <RegisterTextField onChange={onChangeEmail} placeholder="이메일을 입력해주세요"/>
      </RegisterFieldHolder>
      
      {/* <RegisterFieldHolder>
        <RegisterFieldLabel>주민등록번호</RegisterFieldLabel>
        <RegisterTextField onChange={onChangeEmail} placeholder="이메일을 입력해주세요"/>
      </RegisterFieldHolder> */}

      <RegisterButton onClick={onClickSubmit}>가입완료</RegisterButton>
    </RegisterFieldContainer>
  );
};

export default RegisterField;