import React, { useState } from "react";

import { 
  FindFamilyDownContainer,
  NextButton,
  FindFamilyDownText,
  FindFamilyDownCreateText,
} from "./FindFamilyDown.styles";

import { useNavigate } from "react-router-dom";

const FindFamilyDown = () => {
  const navigate = useNavigate();

  const [nextButton, setNextButton] = useState("다음");

  const onClickCreateId = () => {
    navigate("/register/create");
  };

  return (
    <FindFamilyDownContainer>
      <NextButton>{nextButton}</NextButton>
      <FindFamilyDownText>아직 가족 아이디가 없어요!</FindFamilyDownText>
      <FindFamilyDownCreateText onClick={onClickCreateId}>가족 아이디 만들기</FindFamilyDownCreateText>
    </FindFamilyDownContainer>
  );
};

export default FindFamilyDown;
