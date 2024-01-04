import React from "react";

import { 
  RegisterSelectRoleContainer,
  RegisterRoleContainer,
  RegisterRoleImgContainer,
  RegisterRoleLabel,
  RegisterRoleImg,
  RegisterSelectRoleHoder,
  RegisterSelectRoleLabel,
} from "./RegisterSelectRole.styles";

import Dad from "../../../assets/images/family/Dad.png";
import Mom from '../../../assets/images/family/Mom.png';
import Son from "../../../assets/images/family/Son.png";
import Daughter from "../../../assets/images/family/Daughter.png";

const RegisterSelectRole = ({setRole, setSelectRole, setHeaderContent}) => {
  const onClickParent = () => {
    setHeaderContent("동거여부 선택")
    setRole("부모")
    setSelectRole(true);
  };

  const onClickChild = () => {
    setHeaderContent("동거여부 선택")
    setRole("자녀")
    setSelectRole(true);
  };

  return (
    <RegisterSelectRoleHoder>
      <RegisterSelectRoleLabel>본인의 세대를 선택해주세요</RegisterSelectRoleLabel>
      <RegisterSelectRoleContainer>
        <RegisterRoleContainer onClick={onClickParent}>
          <RegisterRoleImgContainer>
            <RegisterRoleImg src={Mom}/>
            <RegisterRoleImg src={Dad}/>
          </RegisterRoleImgContainer>
          <RegisterRoleLabel>부모</RegisterRoleLabel>
        </RegisterRoleContainer>

        <RegisterRoleContainer onClick={onClickChild}>
          <RegisterRoleImgContainer>
            <RegisterRoleImg src={Son}/>
            <RegisterRoleImg src={Daughter}/>
          </RegisterRoleImgContainer>
          <RegisterRoleLabel>자녀</RegisterRoleLabel>
        </RegisterRoleContainer>
      </RegisterSelectRoleContainer>
    </RegisterSelectRoleHoder>
  );
};

export default RegisterSelectRole;