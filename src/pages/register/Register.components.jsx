import React, { useState } from "react";
import TextField from '@mui/material/TextField';

import { 
  RegisterContainer,
  RegisterHeader,
  RegisterContent,
  BackIcon,
} from "./Register.styles";

import backIcon from "../../assets/images/backicon.svg";
import { useNavigate } from "react-router-dom";

import RegisterField from "../../components/register/registerField/RegisterField.components";
import RegisterSelectRole from "../../components/register/registerSelectRole/RegisterSelectRole.components";

const Register = () => {
  const [selectRole, setSelectRole] = useState(false);
  const [role, setRole] = useState("");
  const [headerContent, setHeaderContent] = useState("회원가입");

  const navigate = useNavigate();

  const onClickBackIcon = () => {
    if (selectRole === true) {
      setSelectRole(false);
      setRole("");
    } else {
      navigate(-1);
    }
  };

  return (
    <RegisterContainer>
      {/* Header */}
      <RegisterHeader>
        <BackIcon src={backIcon} onClick={onClickBackIcon}/>
        {headerContent}
      </RegisterHeader>

      {/* Content */}
      <RegisterContent>
        { !selectRole ? (
          <RegisterField />
        ) : (
          <RegisterSelectRole setRole={setRole} setSelectRole={setSelectRole}/>
        )}
      </RegisterContent>
    </RegisterContainer>
  )
}

export default Register;