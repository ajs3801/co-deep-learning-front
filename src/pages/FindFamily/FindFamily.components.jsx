import React, { useState } from "react";

import { 
  FindFamilyContainer,
  FindFamilyHeader,
  FindFamilyBackIcon,
  FindFamilyContent,
} from "./FindFamily.styles";

import FindFamilyDown from "../../components/findFamily/FindFamilyDown/FindFamilyDown.components";
import FindFamilyUp from "../../components/findFamily/FindFamilyUp/FindFamilyUp.components";

import backIcon from "../../assets/images/backicon.svg";

import { useNavigate } from "react-router-dom";

const FindFamily = () => {
  const navigate = useNavigate();
  const [isPassword, setIsPassword] = useState(false);
  const [isFound, setIsFound] = useState(false);

  const [possibleId, setPossibleId] = useState(false);
  const [possibleEnter, setPossibleEnter] = useState(false);

  const onClickBackIcon = () => {
    navigate(-1);
  };

  return (
    <FindFamilyContainer>
      <FindFamilyHeader>
        <FindFamilyBackIcon src={backIcon} onClick={onClickBackIcon}/>
          가족 찾기
      </FindFamilyHeader>

      <FindFamilyContent>
        <FindFamilyUp 
          isPassword={isPassword} 
          setIsPassword={setIsPassword} 
          isFound={isFound} 
          setIsFound={setIsFound}
          possibleId={possibleId}
          setPossibleId={setPossibleId}
          possibleEnter={possibleEnter}
          setPossibleEnter={setPossibleEnter}
        />
        
        <FindFamilyDown 
          isPassword={isPassword}  
          setIsPassword={setIsPassword} 
          isFound={isFound} 
          setIsFound={setIsFound}
          possibleId={possibleId}
          setPossibleId={setPossibleId}
          possibleEnter={possibleEnter}
          setPossibleEnter={setPossibleEnter}
        />
      </FindFamilyContent>
    </FindFamilyContainer>
  );
};

export default FindFamily;