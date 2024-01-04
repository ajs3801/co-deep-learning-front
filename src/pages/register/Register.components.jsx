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
import RegisterLiveWith from "../../components/register/registerLiveWith/RegisterLiveWith.components";

const Register = () => {
  const [selectRole, setSelectRole] = useState(false);
  const [liveWith, setLiveWith] = useState(false);

  const [role, setRole] = useState("");
  const [together, setTogether] = useState(false);
  const [headerContent, setHeaderContent] = useState("부모/자녀 선택");

  const navigate = useNavigate();

  const onClickBackIcon = () => {
    navigate(-1);
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
        { (!selectRole && !liveWith) && <RegisterSelectRole setRole={setRole} setSelectRole={setSelectRole} setHeaderContent={setHeaderContent}/> }   
        { (selectRole && !liveWith) && <RegisterLiveWith setLiveWith={setLiveWith} setTogether={setTogether} setHeaderContent={setHeaderContent}/> }   
        { (selectRole && liveWith) && <RegisterField />}
      </RegisterContent>
    </RegisterContainer>
  )
}

export default Register;