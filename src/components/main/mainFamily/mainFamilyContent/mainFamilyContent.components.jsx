import React, { useEffect, useState } from "react";

import { 
  MainFamilyContentHolder,
  MainFamilyProfile,
  MainFamilyTime,
  MainFamilyMessage
} from "./mainFamilyContent.styles";

import { useRecoilState } from "recoil";
import { SelectFamily } from "../../../../recoil/recoil";

// familyNum은 userID가 되어도됨
const MainFamilyContent = ({isRead, time, message, familyNum, profile}) => {
  const [family, setFamily] = useRecoilState(SelectFamily);
  const [borderColor, setBorderColor] = useState("#FFF");
  const [backgroundColor, setBackgroundColor] = useState("#E8ECEA");
  const [textColor, setTextColor] = useState("#797979");

  const onClickFamilyContent = () => {
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
      setBackgroundColor("#68B38F");
      setTextColor("#FFF");
    }
  }, []);

  return (
    <MainFamilyContentHolder style={{border: `1px solid ${borderColor}`}} onClick={onClickFamilyContent}>
      <MainFamilyProfile src={profile} />
      <MainFamilyTime style={{backgroundColor: `${backgroundColor}`, color:`${textColor}`}}>{time}</MainFamilyTime>
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