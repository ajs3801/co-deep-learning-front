import React, { useEffect, useState } from "react";

import { 
  MainFamilyContainer,
  MainFamilyHolder,
} from "./MainFamily.styles";

import { MainFamilyLabel } from "./mainFamilySendMessage/mainFamilySendMessage.styles";

import MainFamilyContent from "./mainFamilyContent/mainFamilyContent.components";
import MainFamilySendMessage from "./mainFamilySendMessage/mainFamilySendMessage.components";

const familyList = [
  {
    familyNum: 0,
    name: "강혜진",
    profile: "https://fastly.picsum.photos/id/435/200/200.jpg?hmac=yk7-HtvV0x2Z6OB4YhbyAbYxX0nQQCNTzs_MgegSkcE",
    time: "11:24",
    message: "회의하고 있어요",
    reply: "밖에서 밥 먹고 들어가요",
    isRead: false,
  },
  {
    familyNum: 1,
    name: "강혜진",
    profile: "https://fastly.picsum.photos/id/517/200/200.jpg?hmac=7n69zdD4qSZs14zMRZPUfLGKHFEIR9jTpoSEN1o990E",
    time: "",
    message: "",
    reply: "오늘 늦어요",
    isRead: true,
  },
  {
    familyNum: 2,
    name: "강혜진",
    profile: "https://fastly.picsum.photos/id/284/200/200.jpg?hmac=_el2jO-f8UzHfdcTCAXQOD8XX2N6jqVZHwvC23Xm8p8",
    time: "12:08",
    message: "수업듣고 있어요",
    reply: "",
    isRead: true,
  },
]

const MainFamily = () => {
  const [gridRow, setGridRow] = useState(1);

  useEffect(() => {
    // calculate grid row and pass it to grid props
    setGridRow(2);
  }, []);

  return (
    <MainFamilyHolder>
      <MainFamilyLabel>
        우리 가족은 지금 무엇을 하고 있을까요?
      </MainFamilyLabel>
      <MainFamilyContainer gridRow={gridRow}>
        {
          familyList.map((family) => {
            return (
              <MainFamilyContent isRead={family.isRead} key={family.familyNum} reply={family.reply} name={family.name} familyNum={family.familyNum} time={family.time} message={family.message} profile={family.profile}/>
            );
          })
        }
      </MainFamilyContainer>
      
      <MainFamilyLabel>
        우리 가족의 프로필을 눌러 일상을 물어보세요
      </MainFamilyLabel>

      <MainFamilySendMessage />
    </MainFamilyHolder>
  );
};

export default MainFamily;