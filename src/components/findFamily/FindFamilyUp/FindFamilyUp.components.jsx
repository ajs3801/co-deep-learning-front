import React, { useState } from "react";

import { 
  FindFamilyTextField,
  FindFamilyFieldLabel,
  FindFamilyUpContainer,
  FindFamilyNameLabelContainer,
  FindFamilyNameLabel,
  FindFamilyFieldContainer,
  FindFamilyWarningLabel,
  FindFamilyGreenLabel,
  FindFamilyFieldWholeContainer,
} from "./FindFamilyUp.styles";

import FindFamilyList from "../FindFamilyList/FindFamilyList.components";

const FindFamilyUp = ({isPassword, setIsPassword, isFound, setIsFound, possibleId, setPossibleId, possibleEnter, setPossibleEnter}) => {
  const [showFamily, setShowFamily] = useState("강유진 가족");
  const [password, setPassword] = useState("");
  const [id, setId] = useState("");

  const [showIdLabel, setShowIdLabel] = useState(false);
  const [showPasswordLabel, setShowPasswordLabel] = useState(false);

  const onChangeId = (event) => {
    setId(event.target.value);
    const timeOutId = setTimeout(() => {
      // check ID is possible ask to backend
      const ifValidId = true;
      if (ifValidId) {
        setPossibleId(true);
      } else {
        setPossibleId(false);
      }

      setShowIdLabel(true);
    }, 300);
    return () => clearTimeout(timeOutId);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    const timeOutId = setTimeout(() => {
      // check ID is possible ask to backend
      const ifValidId = true;
      if (ifValidId) {
        setPossibleEnter(true);
      } else {
        setPossibleEnter(false);
      }
      setShowPasswordLabel(true);
    }, 500);
    return () => clearTimeout(timeOutId);
  };  

  return (
    <FindFamilyUpContainer>
      {/* show lable or not */}
      {
        isPassword ? (
          (<FindFamilyNameLabelContainer>
            <FindFamilyNameLabel>
              {showFamily}
            </FindFamilyNameLabel>
          </FindFamilyNameLabelContainer>)
        ) : (
          (<FindFamilyNameLabelContainer style={{border: "none", color: "none"}}/>)
        )
      }
      
      {
        isFound ? (
          <FindFamilyList />
        ) : (
          <FindFamilyFieldWholeContainer>
            <FindFamilyFieldContainer>
              <FindFamilyFieldLabel>가족 아이디</FindFamilyFieldLabel>
              <FindFamilyTextField value={id} onChange={onChangeId} />
              {
                (showIdLabel && possibleId) && <FindFamilyGreenLabel>해당하는 가족을 발견했습니다</FindFamilyGreenLabel>
              }
              {
                (showIdLabel && !possibleId) && <FindFamilyWarningLabel>존재하지 않는 가족 아이디입니다</FindFamilyWarningLabel>
              }
            </FindFamilyFieldContainer>
            {
              isPassword && (
                <FindFamilyFieldContainer>
                  <FindFamilyFieldLabel>가족 비밀번호</FindFamilyFieldLabel>
                  <FindFamilyTextField type="password" value={password} onChange={onChangePassword} />
                  {
                    (showPasswordLabel && possibleEnter) && <FindFamilyGreenLabel>올바른 비밀번호입니다</FindFamilyGreenLabel>
                  }

                  {
                    (showPasswordLabel && !possibleEnter) && <FindFamilyWarningLabel>올바르지 않은 비밀번호입니다</FindFamilyWarningLabel>
                  }
                </FindFamilyFieldContainer>)
            }
          </FindFamilyFieldWholeContainer>
        )
      }
      
    </FindFamilyUpContainer>
  );
};

export default FindFamilyUp;
