import React, { useState } from "react";

import { 
  FindFamilyContainer,
  FindFamilyHeader,
  FindFamilyBackIcon,
  FindFamilyContent,
} from "./FindFamily.styles";

import FindFamilyDown from "../../components/findFamily/FindFamilyDown/FindFamilyDown.components";
import FindFamilyUp from "../../components/findFamily/FindFamilyUp/FindFamilyUp.components";

import backIcon from "../../assets/images/backicon.svg";

import { useNavigate } from "react-router-dom";

const FindFamily = () => {
  const navigate = useNavigate();
  const [isPassword, setIsPassword] = useState(false);

  const onClickBackIcon = () => {
    navigate(-1);
  };

  return (
    <FindFamilyContainer>
      <FindFamilyHeader>
        <FindFamilyBackIcon src={backIcon} onClick={onClickBackIcon}/>
          가족 찾기
      </FindFamilyHeader>

      <FindFamilyContent>
        <FindFamilyUp isPassword={isPassword} setIsPassword={setIsPassword}/>
        <FindFamilyDown isPassword={isPassword} setIsPassword={setIsPassword}/>
      </FindFamilyContent>
    </FindFamilyContainer>
  );
};

export default FindFamily;