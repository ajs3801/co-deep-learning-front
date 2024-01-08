import React from "react";

import { 
  ChangeFamilyNameContainer,
  ChangeFamilyNameHeader,
  ChangeFamilyNameContent,
  ChangeFamilyNameBackIcon,
} from "./ChangeFamilyName.styles";

import backicon from "../../assets/images/backicon.svg";

import { useNavigate } from "react-router-dom";

const ChangeFamilyName = () => {

  const navigate = useNavigate();

  const onClickBack = () => {
    navigate(-1);
  };

  return (
    <ChangeFamilyNameContainer>
      {/* Header */}
      <ChangeFamilyNameHeader>
        <ChangeFamilyNameBackIcon src={backicon} onClick={onClickBack} />
        가족이름 변경
      </ChangeFamilyNameHeader>

      {/* Content */}
      <ChangeFamilyNameContent>

      </ChangeFamilyNameContent>
    </ChangeFamilyNameContainer>
  );
};

export default ChangeFamilyName;