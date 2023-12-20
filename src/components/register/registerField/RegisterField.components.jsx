import React from "react";

import { 
  RegisterFieldContainer,
  RegisterFieldLabel,
  RegisterTextField,
} from "./RegisterField.styles";
const RegisterField = () => {
  return (
    <RegisterFieldContainer>
      <RegisterFieldLabel>이름</RegisterFieldLabel>
      <RegisterTextField placeholder="이름"/>
    </RegisterFieldContainer>
  );
};

export default RegisterField;