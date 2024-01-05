import React, { useState } from "react";

import { 
  FindFamilyDownContainer,
  NextButton,
  FindFamilyDownText,
  FindFamilyDownCreateText,
  NextDisEnabled,
} from "./FindFamilyDown.styles";

import { useNavigate } from "react-router-dom";

const FindFamilyDown = ({isPassword, setIsPassword, isFound, setIsFound, possibleId, setPossibleId, possibleEnter, setPossibleEnter}) => {
  const navigate = useNavigate();

  const onClickCreateId = () => {
    navigate("/register/create");
  };

  // buttons next
  const onClickPasswordButton = () => {
    setIsPassword(true);
  };

  const onClickFoundButton = () => {
    setIsFound(true);
  };

  const onClickEnterButton = () => {
    navigate("/main/answer");
  };

  return (
    <FindFamilyDownContainer>
      {
        !isPassword && <FindFamilyDownText>아직 가족 아이디가 없어요!</FindFamilyDownText>
      }
      {
        !isPassword && <FindFamilyDownCreateText onClick={onClickCreateId}>가족 아이디 만들기</FindFamilyDownCreateText>
      }

      {/* first next button */}
      {
        (!isPassword && !isFound && possibleId) && <NextButton onClick={onClickPasswordButton}>다음</NextButton>
      }
      {
        (!isPassword && !isFound && !possibleId) && <NextDisEnabled disabled>다음</NextDisEnabled>
      }

      {/* second next button */}
      {
        (isPassword && !isFound && possibleEnter) && <NextButton onClick={onClickFoundButton}>다음</NextButton>
      }
      {
        (isPassword && !isFound && !possibleEnter) && <NextDisEnabled>다음</NextDisEnabled>
      }

      {/* enter button */}
      {
        isPassword && isFound && <NextButton onClick={onClickEnterButton}>입장하기</NextButton>
      }
    </FindFamilyDownContainer>
  );
};

export default FindFamilyDown;
