import React from "react";

import { 
  MainFamilyContentHolder,
  MainFamilyProfile,
  MainFamilyTime,
  MainFamilyMessage
} from "./mainFamilyContent.styles";

import { useRecoilState } from "recoil";
import { SelectFamily } from "../../../../recoil/recoil";

const MainFamilyContent = ({time, message, familyNum, profile}) => {
  const [family, setFamily] = useRecoilState(SelectFamily);

  const onClickFamilyContent = () => {
    let duplicatedFamily = JSON.parse(JSON.stringify(family));
    console.log(family);

    // check if currently selected
    if (family.find(element => (element===familyNum)) !== undefined) {
      console.log("delete it " + familyNum);
      // delete it
      let removed = duplicatedFamily.splice(familyNum, 1);
    } else {
      console.log("push it");
      // push it
      duplicatedFamily.push(familyNum);
    }
    
    // sort and set it
    duplicatedFamily.sort();
    setFamily(duplicatedFamily);

    console.log(duplicatedFamily);
  };

  return (
    <MainFamilyContentHolder onClick={onClickFamilyContent}>
      <MainFamilyProfile src={profile} />
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