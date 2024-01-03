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
    profile: "https://fastly.picsum.photos/id/435/200/200.jpg?hmac=yk7-HtvV0x2Z6OB4YhbyAbYxX0nQQCNTzs_MgegSkcE",
    time: "11:24",
    message: "회의하고 있어요",
    isRead: false,
  },
  {
    familyNum: 1,
    profile: "https://fastly.picsum.photos/id/517/200/200.jpg?hmac=7n69zdD4qSZs14zMRZPUfLGKHFEIR9jTpoSEN1o990E",
    time: "",
    message: "",
    isRead: true,

  },
  {
    familyNum: 2,
    profile: "https://fastly.picsum.photos/id/284/200/200.jpg?hmac=_el2jO-f8UzHfdcTCAXQOD8XX2N6jqVZHwvC23Xm8p8",
    time: "12:08",
    message: "수업듣고 있어요",
    isRead: true,

  },
  {
    familyNum: 3,
    profile: "https://fastly.picsum.photos/id/562/200/200.jpg?hmac=F4ylYRNFPH6rDzYo48_NUieJXXI2yaMl9ElwGeFQHZo",
    time: "02:24",
    message: "쉬고 있어요",
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
      <MainFamilyContainer gridRow={gridRow}>
        {
          familyList.map((family) => {
            return (
              <MainFamilyContent isRead={family.isRead} key={family.familyNum} familyNum={family.familyNum} time={family.time} message={family.message} profile={family.profile}/>
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