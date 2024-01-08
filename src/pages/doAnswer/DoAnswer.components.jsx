import React, { useState } from "react";

import { 
  DoAnswerContainer,
  DoAnswerHeader,
  DoAnswerContent,
  DoAnswerContentQuestion,
  DoAnswerNonSelected,
  DoAnswerSelected,
  DoAnswerDisabledButton,
  DoAnswerButton,
  DoAnswerInputField,
} from "./DoAnswer.styles";

import { useNavigate } from "react-router-dom";

const answerList = [
  "산책 하고 있어요",
  "친구랑 놀고 있어요",
  "수업 듣고 있어요",
  "회의 하고 있어요",
]

const DoAnswer = () => {
  const navigate = useNavigate();
  const [question, setQuestion] = useState("엄마가 뭐하고 있는지 물어봤어요");
  const [selected, setSelected] = useState(-1);
  const [inputField, setInputField] = useState("");

  const onClickAnswer = (index) => {
    setSelected(index);
  };

  const onClicKAnswerField = () => {
    setSelected(-2)
  };

  const onChangeAnswerField = (event) => {
    setInputField(event.target.value);
  };

  const onClickAnswerButton = () => {
    navigate("/main");
  };

  return (
    <DoAnswerContainer>
      {/* Header */}
      <DoAnswerHeader>
        답장
      </DoAnswerHeader>

      {/* content */}
      <DoAnswerContent>
        {/* question */}
        <DoAnswerContentQuestion>{question}</DoAnswerContentQuestion>

        {/* answer */}
        {
          answerList.map((answer, index) => {
            return (
              (
                (index === selected) ? (
                  <DoAnswerSelected id={index} onClick={() => onClickAnswer(index)}>
                    {answer}
                  </DoAnswerSelected>
                ) : (
                  <DoAnswerNonSelected id={index} onClick={() => onClickAnswer(index)}>
                    {answer}
                  </DoAnswerNonSelected>
                )
              )
            );
          })
        }
        <DoAnswerInputField value={inputField} onClick={onClicKAnswerField} onChange={onChangeAnswerField} placeholder="직접 작성해 주세요" />

        {/* button */}
        {
          (selected !== -1) ? (
            (
              (selected === -2 && !inputField) ? (
                <DoAnswerDisabledButton>답장 보내기</DoAnswerDisabledButton>
              ) : (
                <DoAnswerButton onClick={onClickAnswerButton}>답장 보내기</DoAnswerButton>
              )
            )
          ) : (
            <DoAnswerDisabledButton>답장 보내기</DoAnswerDisabledButton>
          )
        }
      </DoAnswerContent>
    </DoAnswerContainer>
  )
};

export default DoAnswer;