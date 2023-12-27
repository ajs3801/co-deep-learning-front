import React, { useState } from "react";

import { 
  FindFamilyDownContainer,
  NextButton,
  FindFamilyDownText,
  FindFamilyDownCreateText,
} from "./FindFamilyDown.styles";

import { useNavigate } from "react-router-dom";

const FindFamilyDown = ({isPassword, setIsPassword}) => {
  const navigate = useNavigate();

  const onClickCreateId = () => {
    navigate("/register/create");
  };

  const onClickNextButton = () => {
    setIsPassword(true);
  };

  const onClickEnterButton = () => {
    navigate("/main/answer");
  };

  return (
    <FindFamilyDownContainer>
      {
        isPassword ? (
          <NextButton onClick={onClickEnterButton}>입장하기</NextButton>
        ) : (
          <NextButton onClick={onClickNextButton}>다음</NextButton>
        )
      }
      <FindFamilyDownText>아직 가족 아이디가 없어요!</FindFamilyDownText>
      <FindFamilyDownCreateText onClick={onClickCreateId}>가족 아이디 만들기</FindFamilyDownCreateText>
    </FindFamilyDownContainer>
  );
};

export default FindFamilyDown;
