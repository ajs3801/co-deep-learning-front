import React from "react";

import { 
  MainFamilyContentHolder,
  MainFamilyProfile,
  MainFamilyTime,
  MainFamilyMessage
} from "./mainFamilyContent.styles";

const MainFamilyContent = ({time, message}) => {
  
  return (
    <MainFamilyContentHolder>
      <MainFamilyProfile />
      <MainFamilyTime>{time}</MainFamilyTime>
      {
        message ? (
          <MainFamilyMessage>{message}</MainFamilyMessage>
        ) : (
          <MainFamilyMessage style={{color: "#BABABA"}}>등록된 일정이 없어요</MainFamilyMessage>
        )
      }
    </MainFamilyContentHolder>
  );
};

export default MainFamilyContent;