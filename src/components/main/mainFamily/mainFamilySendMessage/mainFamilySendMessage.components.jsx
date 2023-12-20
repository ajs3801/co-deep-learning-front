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

import { useRecoilState } from "recoil";
import { SelectFamily } from "../../../../recoil/recoil";

import dropdown from "../../../../assets/images/dropdown.svg";
import dropup from "../../../../assets/images/dropup.svg";

const familyList = [
  {
    familyNum: 0,
    profile: "https://picsum.photos/200",
    time: "11:24",
    message: "회의하고 있어요",
  },
  {
    familyNum: 1,
    profile: "https://picsum.photos/200",
    time: "",
    message: "",
  },
  {
    familyNum: 2,
    profile: "https://picsum.photos/200",
    time: "12:08",
    message: "수업듣고 있어요",
  },
  {
    familyNum: 3,
    profile: "https://picsum.photos/200",
    time: "02:24",
    message: "쉬고 있어요",
  },
]

const MainFamilySendMessage = () => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [questionContent, setQuestionContent] = useState("뭐해?");
  const [family, setFamily] = useRecoilState(SelectFamily);

  return (
    <MainFamilySendMessageContainer>
      {/* Profile container */}
      <MainFamilySendMessageProfileContainer>
        {/* list of selected family */}
        {
          family.map((element) => {
            return (
              <MainFamilySendMessageProfile src={familyList[element].profile}/>
            )
          })
        }
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