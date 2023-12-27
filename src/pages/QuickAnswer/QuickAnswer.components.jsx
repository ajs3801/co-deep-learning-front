import React from "react";

import { 
  QuickAnswerContainer,
  QuickAnswerHeader,
  QuickAnswerContent,
  QuickAnswerBackIcon,
  QuickAnswerButton,
} from "./QuickAnswer.styles";

import backIcon from "../../assets/images/backicon.svg";
import { useNavigate } from "react-router-dom";

import QuickAnswerHolder from "../../components/quickAnswer/QuickAnswer.components";

const QuickAnswer = () => {
  const navigate = useNavigate();

  const onClickBackIcon = () => {
    navigate(-1);
  };

  const onClickAnswerButton = () => {
    navigate("/main");
  };
  
  return (
    <QuickAnswerContainer>
      <QuickAnswerHeader>
        <QuickAnswerBackIcon src={backIcon} onClick={onClickBackIcon}/>
        빠른 답장
      </QuickAnswerHeader>

      <QuickAnswerContent>
        <QuickAnswerHolder />
        <QuickAnswerButton onClick={onClickAnswerButton}>선택완료</QuickAnswerButton>
      </QuickAnswerContent>
    </QuickAnswerContainer>
  );
};

export default QuickAnswer;