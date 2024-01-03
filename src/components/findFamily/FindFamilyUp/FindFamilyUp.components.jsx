import React, { useState } from "react";

import { 
  FindFamilyTextField,
  FindFamilyFieldLabel,
  FindFamilyUpContainer,
  FindFamilyNameLabelContainer,
  FindFamilyNameLabel,
  FindFamilyFieldContainer,
} from "./FindFamilyUp.styles";

const FindFamilyUp = ({isPassword, setIsPassword}) => {
  const [showFamily, setShowFamily] = useState("강유진 가족");
  const [password, setPassword] = useState("");
  const [id, setId] = useState("");

  const onChangeId = (event) => {
    setId(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };  

  return (
    <FindFamilyUpContainer>
      <FindFamilyNameLabelContainer>
        {
          isPassword && (<FindFamilyNameLabel>
            {showFamily}
          </FindFamilyNameLabel>)
        }
      </FindFamilyNameLabelContainer>
      {
        isPassword ? (
          <FindFamilyFieldContainer>
            <FindFamilyFieldLabel>가족 비밀번호</FindFamilyFieldLabel>
            <FindFamilyTextField type="password" value={password} onChange={onChangePassword}/>
          </FindFamilyFieldContainer>
        ) : (
          <FindFamilyFieldContainer>
            <FindFamilyFieldLabel>가족 아이디</FindFamilyFieldLabel>
            <FindFamilyTextField value={id} onChange={onChangeId} />
          </FindFamilyFieldContainer>
        )
      }
      
    </FindFamilyUpContainer>
  );
};

export default FindFamilyUp;
