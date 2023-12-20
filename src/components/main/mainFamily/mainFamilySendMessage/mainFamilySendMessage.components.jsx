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
    profile: "https://fastly.picsum.photos/id/435/200/200.jpg?hmac=yk7-HtvV0x2Z6OB4YhbyAbYxX0nQQCNTzs_MgegSkcE",
    time: "11:24",
    message: "회의하고 있어요",
  },
  {
    familyNum: 1,
    profile: "https://fastly.picsum.photos/id/517/200/200.jpg?hmac=7n69zdD4qSZs14zMRZPUfLGKHFEIR9jTpoSEN1o990E",
    time: "",
    message: "",
  },
  {
    familyNum: 2,
    profile: "https://fastly.picsum.photos/id/284/200/200.jpg?hmac=_el2jO-f8UzHfdcTCAXQOD8XX2N6jqVZHwvC23Xm8p8",
    time: "12:08",
    message: "수업듣고 있어요",
  },
  {
    familyNum: 3,
    profile: "https://fastly.picsum.photos/id/562/200/200.jpg?hmac=F4ylYRNFPH6rDzYo48_NUieJXXI2yaMl9ElwGeFQHZo",
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
              <MainFamilySendMessageProfile key={element} src={familyList[element].profile}/>
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