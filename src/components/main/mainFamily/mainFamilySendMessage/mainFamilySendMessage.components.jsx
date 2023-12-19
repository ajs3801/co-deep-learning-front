import React, { useState } from "react";

import { 
  MainFamilySendMessageContainer,
  MainFamilySendMessageProfileContainer,
  MainFamilySendMessageProfile,
  MainFamilySendMessageQuestionBox,
  MainFamilySendMessageSendItButton,
  QuestionBoxContent,
  QuestionDropDownSvgContainer,
  QuestionDropDownSvg,
  QuestionDropDown,
  QuestionDropDownContent,
} from "./mainFamilySendMessage.styles";

import dropdown from "../../../../assets/images/dropdown.svg";
import dropup from "../../../../assets/images/dropup.svg";

const MainFamilySendMessage = () => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [questionContent, setQuestionContent] = useState("뭐해?");

  return (
    <MainFamilySendMessageContainer>
      {/* Profile container */}
      <MainFamilySendMessageProfileContainer>
        {/* list of selected family */}
        <MainFamilySendMessageProfile />
        <MainFamilySendMessageProfile />
        <MainFamilySendMessageProfile />
      </MainFamilySendMessageProfileContainer>

      {/* Question */}
      <MainFamilySendMessageQuestionBox onClick={() => setIsDropDown(!isDropDown)}>
        <QuestionBoxContent>{questionContent}</QuestionBoxContent>
        <QuestionDropDownSvgContainer>
          { isDropDown ? (
            <QuestionDropDownSvg src={dropup} />
          ): (
            <QuestionDropDownSvg src={dropdown} />
          )}

          { isDropDown && 
            <QuestionDropDown>
              <QuestionDropDownContent onClick={() => {setQuestionContent("뭐해?")}}>뭐해?</QuestionDropDownContent>
              <QuestionDropDownContent onClick={() => {setQuestionContent("밥 먹었어?")}}>밥 먹었어?</QuestionDropDownContent>
              <QuestionDropDownContent onClick={() => {setQuestionContent("집에서 밥 먹을거야?")}}>집에서 밥 먹을거야?</QuestionDropDownContent>
              <QuestionDropDownContent onClick={() => {setQuestionContent("언제와?")}}>언제와?</QuestionDropDownContent>
            </QuestionDropDown>
          }
        </QuestionDropDownSvgContainer>

      </MainFamilySendMessageQuestionBox>

      {/* Send Question */}
      <MainFamilySendMessageSendItButton>
        질문 보내기
      </MainFamilySendMessageSendItButton>
    </MainFamilySendMessageContainer>
  )
};

export default MainFamilySendMessage;