import React from "react";

import { 
  FindFamilyTextField,
  FindFamilyFieldLabel,
  FindFamilyUpContainer,

} from "./FindFamilyUp.styles";
const FindFamilyUp = () => {
  return (
    <FindFamilyUpContainer>
      <FindFamilyFieldLabel>가족 아이디</FindFamilyFieldLabel>
      <FindFamilyTextField />
    </FindFamilyUpContainer>
  );
};

export default FindFamilyUp;
