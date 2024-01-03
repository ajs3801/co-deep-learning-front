import React, { useState } from "react";

import { 
  MainFamilySendMessageContainer,
  MainFamilySendMessageProfileContainer,
  MainFamilySendMessageProfile,
  MainFamilySendMessageEmptyProfile,
  MainFamilySendMessageQuestionBox,
  MainFamilySendMessageSendItButton,
  QuestionBoxContent,
  QuestionDropDownSvgContainer,
  QuestionDropDownSvg,
  QuestionDropDown,
  QuestionDropDownContent,
  MainFamilyLabel,
} from "./mainFamilySendMessage.styles";

import { useRecoilState } from "recoil";
import { SelectFamily } from "../../../../recoil/recoil";

import dropdown from "../../../../assets/images/dropdown.svg";
import dropup from "../../../../assets/images/dropup.svg";

import Ellipse_center from "../../../../assets/images/EllipseCenter.svg";
import Ellipse_side from "../../../../assets/images/Ellipse_side.svg";

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

const emptyArray = [
  {
    id: 1,
    borderColor: "#D2D2D2",
    zindex: 1,
  }, 
  {
    id: 2,
    borderColor: "#D2D2D2",
    zindex: 5,
  },
  {
    id:3,
    borderColor: "#D2D2D2",
    zindex: 1,
  }];

const MainFamilySendMessage = () => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [questionContent, setQuestionContent] = useState("뭐하는지 물어보기");
  const [family, setFamily] = useRecoilState(SelectFamily);

  return (
    <MainFamilySendMessageContainer>
      {/* Profile container */}
      <MainFamilySendMessageProfileContainer>
        {/* list of selected family */}
        
        {
          (family.length === 0) && (
            emptyArray.map((element) => {
              return (
                <MainFamilySendMessageEmptyProfile key={element.id} style={{borderColor: `${element.borderColor}`, zIndex: `${element.zindex}`}} />
              )
            })
          )
        }
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
              <QuestionDropDownContent onClick={() => {setQuestionContent("뭐해?")}}>뭐하는지 물어보기</QuestionDropDownContent>
              <QuestionDropDownContent onClick={() => {setQuestionContent("밥 먹었어?")}}>밥 먹었는지 물어보기</QuestionDropDownContent>
              <QuestionDropDownContent onClick={() => {setQuestionContent("집에서 밥 먹을거야?")}}>집에서 밥 먹을건지 물어보기</QuestionDropDownContent>
              <QuestionDropDownContent onClick={() => {setQuestionContent("언제와?")}}>귀가시간 물어보기</QuestionDropDownContent>
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