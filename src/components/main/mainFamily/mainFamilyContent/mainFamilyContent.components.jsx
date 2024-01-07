import React, { useEffect, useState } from "react";

import { 
  MainFamilyContentHolderNonSelected,
  MainFamilyContentHolderSelected,
  MainFamilyProfile,
  MainFamilyTime,
  MainFamilyMessage,
  MainFamilyReply,
} from "./mainFamilyContent.styles";

import { useRecoilState } from "recoil";
import { SelectFamily } from "../../../../recoil/recoil";

// familyNum은 userID가 되어도됨
const MainFamilyContent = ({isRead, time, message, reply, name, familyNum, profile}) => {
  const [family, setFamily] = useRecoilState(SelectFamily);
  const [borderColor, setBorderColor] = useState("#FFF");

  const [isSelect, setIsSelect] = useState(false);

  const onClickFamilyContent = () => {
    setIsSelect(!isSelect);

    let duplicatedFamily = JSON.parse(JSON.stringify(family));
    console.log(family);

    // check if currently selected
    if (family.find(element => (element===familyNum)) !== undefined) {
      let index = 0;
      for ( index = 0; index < family.length; index++) {
        if (family[index] === familyNum) {
          break;
        }
      }

      // delete it
      duplicatedFamily.splice(index, 1);

    } else {
      // push it
      duplicatedFamily.push(familyNum);
    }
    
    // sort and set it
    setFamily(duplicatedFamily);
  };

  useEffect(() => {
    if (!isRead) {
      setBorderColor("#68B374")
    }

    if (isSelect) {
      setBorderColor("#BCBCBC")
    } else {
      if (isRead === false) {
        setBorderColor("#68B374")
      } else {
        setBorderColor("#FFF")
      }
    }
  }, [isSelect]);

  return (
    (
      isSelect ? (
        <MainFamilyContentHolderSelected style={{border: `1px solid ${borderColor}`}} onClick={onClickFamilyContent}>
          <MainFamilyProfile src={profile} />
          <MainFamilyTime>{name} {time}</MainFamilyTime>
          {
            message ? (
              <MainFamilyMessage>{message}</MainFamilyMessage>
            ) : (
              <MainFamilyMessage style={{color: "#BABABA"}}>일정이 없어요</MainFamilyMessage>
            )
          }

          {
            reply ? (
              <MainFamilyReply>{reply}</MainFamilyReply>
            ) : (
              <MainFamilyReply>받은 답변이 없어요</MainFamilyReply>
            )
          }
        </MainFamilyContentHolderSelected>
      ) : (
        <MainFamilyContentHolderNonSelected style={{border: `1px solid ${borderColor}`}} onClick={onClickFamilyContent}>
          <MainFamilyProfile src={profile} />
          <MainFamilyTime>{name} {time}</MainFamilyTime>
          {
            message ? (
              <MainFamilyMessage>{message}</MainFamilyMessage>
            ) : (
              <MainFamilyMessage style={{color: "#BABABA"}}>일정이 없어요</MainFamilyMessage>
            )
          }

          {
            reply ? (
              <MainFamilyReply>{reply}</MainFamilyReply>
            ) : (
              <MainFamilyReply>받은 답변이 없어요</MainFamilyReply>
            )
          }
        </MainFamilyContentHolderNonSelected>
      )
    )
  );
};

export default MainFamilyContent;