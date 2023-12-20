import React, { useEffect, useState } from "react";

import { 
  MainFamilyContainer,
  MainFamilyHolder,
} from "./MainFamily.styles";

import MainFamilyContent from "./mainFamilyContent/mainFamilyContent.components";
import MainFamilySendMessage from "./mainFamilySendMessage/mainFamilySendMessage.components";

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
              <MainFamilyContent key={family.familyNum} familyNum={family.familyNum} time={family.time} message={family.message} profile={family.profile}/>
            );
          })
        }
      </MainFamilyContainer>

      <MainFamilySendMessage />
    </MainFamilyHolder>
  );
};

export default MainFamily;