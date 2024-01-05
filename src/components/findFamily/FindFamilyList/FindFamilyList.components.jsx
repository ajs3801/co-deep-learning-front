import React from "react";

import { 
  FindFamilyListContainer, 
  FindFamilyListLabel,
  FindFamilyListGrid,
  FindFamilyListContent,
  FindFamilyListContentImg,
  FindFamilyListContentLabel,
  FindFamilyBottomLabel,
  FindFamilyWholeContainer,
} from "./FindFamilyList.styles";

const familyMember = [
  {
    imgSrc: "",
    name: "강유진"
  },
  {
    imgSrc: "",
    name: "강성택"
  },
  {
    imgSrc: "",
    name: "이영선"
  },
  {
    imgSrc: "",
    name: "이영선"
  },
  {
    imgSrc: "",
    name: "강혜진"
  },
]
const FindFamilyList = ({isPassword, setIsPassword, isFound, setIsFound}) => {  
  return (
    <FindFamilyWholeContainer>
      <FindFamilyListContainer>
        <FindFamilyListLabel>가족 구성원</FindFamilyListLabel>
        <FindFamilyListGrid>
          {
            familyMember.map((member) => {
              return (
                <FindFamilyListContent>
                  <FindFamilyListContentImg />
                  <FindFamilyListContentLabel>{member.name}</FindFamilyListContentLabel>
                </FindFamilyListContent>
              )
            })
          }
        </FindFamilyListGrid>
      </FindFamilyListContainer>
      <FindFamilyBottomLabel>마이페이지에서 가족의 이름을 변경할 수 있어요</FindFamilyBottomLabel>
    </FindFamilyWholeContainer>
  )

};

export default FindFamilyList;