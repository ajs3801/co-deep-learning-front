import React, { useEffect, useState } from "react";

import { 
  RegisterFieldContainer,
  RegisterFieldLabel,
  RegisterTextField,
  RegisterFieldHolder,
  RegisterButton,
  RegisterButtonDisEnabled,
  RegisterFieldWarningLabel,
} from "./RegisterField.styles";

import { useNavigate } from "react-router-dom";

const RegisterField = ({setRegister, setHeaderContent}) => {
  const navigate = useNavigate();

  const [button, setButton] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [Id, setId] = useState("");
  const [name, setName] = useState("");

  const [showLabel, setShowLabel] = useState(false);
  const [passwordRight, setPasswordRight] = useState(false);
  
  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value)
  };

  const onChangePasswordCheck = (event) => {
    const timeOutId = setTimeout(() => {
      setShowLabel(true)
      const value = event.target.value;
      if (password === value) {
        setPasswordRight(true);
      } else {
        setPasswordRight(false);
      }
    }, 300);
    return () => clearTimeout(timeOutId);
  }

  const onChangeId = (event) => {
    setId(event.target.value);
  };

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onClickSubmit = () => {
    setRegister(true);
    setHeaderContent("회원가입")
  };

  useEffect(() => {
    // verify if the fields are fine
    if (email && password && Id && name && passwordRight) {
      setButton(true);
    } else {
      setButton(false);
    }
  }, [email, password, Id, name, passwordRight]);

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
        <RegisterFieldLabel>비밀번호 확인</RegisterFieldLabel>
        <RegisterTextField onChange={onChangePasswordCheck} type="password" placeholder="비밀번호를 입력해주세요"/>
        { (showLabel && !passwordRight) && <RegisterFieldWarningLabel>비밀번호가 일치하지 않습니다.</RegisterFieldWarningLabel>}
        { (showLabel && passwordRight) && <RegisterFieldWarningLabel style={{color: "#68B38F"}}>비밀번호가 일치합니다</RegisterFieldWarningLabel>}
      </RegisterFieldHolder>

      <RegisterFieldHolder>
        <RegisterFieldLabel>이메일</RegisterFieldLabel>
        <RegisterTextField onChange={onChangeEmail} placeholder="이메일을 입력해주세요"/>
      </RegisterFieldHolder>
      
      {/* <RegisterFieldHolder>
        <RegisterFieldLabel>주민등록번호</RegisterFieldLabel>
        <RegisterTextField onChange={onChangeEmail} placeholder="이메일을 입력해주세요"/>
      </RegisterFieldHolder> */}

      {
        button ? (
          <RegisterButton onClick={onClickSubmit}>다음</RegisterButton>
        ) : (
          <RegisterButtonDisEnabled disabled onClick={onClickSubmit}>다음</RegisterButtonDisEnabled>
        )
      }
    </RegisterFieldContainer>
  );
};

export default RegisterField;