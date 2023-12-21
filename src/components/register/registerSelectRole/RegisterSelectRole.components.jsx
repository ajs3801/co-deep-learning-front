import React from "react";

import { 
  RegisterSelectRoleContainer,
  RegisterRoleContainer,
  RegisterRoleImgContainer,
  RegisterRoleLabel,
} from "./RegisterSelectRole.styles";

const RegisterSelectRole = ({setRole, setSelectRole}) => {
  const onClickParent = () => {
    setRole("부모")
    setSelectRole(true);
  };

  const onClickChild = () => {
    setRole("자녀")
    setSelectRole(true);
  };

  return (
    <RegisterSelectRoleContainer>
      <RegisterRoleContainer onClick={onClickParent}>
        <RegisterRoleImgContainer>👵🏻</RegisterRoleImgContainer>
        <RegisterRoleLabel>부모</RegisterRoleLabel>
      </RegisterRoleContainer>

      <RegisterRoleContainer onClick={onClickChild}>
        <RegisterRoleImgContainer>👧🏻</RegisterRoleImgContainer>
        <RegisterRoleLabel>자녀</RegisterRoleLabel>
      </RegisterRoleContainer>
    </RegisterSelectRoleContainer>
  );
};

export default RegisterSelectRole;