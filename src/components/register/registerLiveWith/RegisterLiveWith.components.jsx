import React from "react";

import { 
  RegisterSelectRoleContainer,
  RegisterRoleContainer,
  RegisterRoleImgContainer,
  RegisterRoleLabel,
  RegisterRoleImg,
  RegisterSelectRoleHoder,
  RegisterSelectRoleLabel,
} from "../registerSelectRole/RegisterSelectRole.styles";

import { RegisterLiveWithImg } from "./RegisterLiveWith.styles";

import LiveTogether from "../../../assets/images/family/LiveTogether.png";
import LiveAlone from "../../../assets/images/family/LiveAlone.png";

const RegisterLiveWith = ({setLiveWith, setTogether, setHeaderContent}) => {
  const onClickLiveTogether = () => {
    setHeaderContent("회원가입");
    setLiveWith(true);

    setTogether(true);
  };

  const onClickLiveAlone = () => {
    setHeaderContent("회원가입");
    setLiveWith(true);
    
    setTogether(false);
  };

  return (
    <RegisterSelectRoleHoder>
      <RegisterSelectRoleLabel>가족과 함께 살고 있나요?</RegisterSelectRoleLabel>
      <RegisterSelectRoleContainer>
        <RegisterRoleContainer onClick={onClickLiveTogether}>
          <RegisterRoleImgContainer>
            <RegisterLiveWithImg src={LiveTogether}/>
          </RegisterRoleImgContainer>
          <RegisterRoleLabel>네</RegisterRoleLabel>
        </RegisterRoleContainer>

        <RegisterRoleContainer onClick={onClickLiveAlone}>
          <RegisterRoleImgContainer>
            <RegisterLiveWithImg src={LiveAlone}/>
          </RegisterRoleImgContainer>
          <RegisterRoleLabel>아니오</RegisterRoleLabel>
        </RegisterRoleContainer>
      </RegisterSelectRoleContainer>
    </RegisterSelectRoleHoder>
  );
};

export default RegisterLiveWith;