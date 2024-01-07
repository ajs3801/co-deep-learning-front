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
    imgSrc: "https://fastly.picsum.photos/id/427/200/200.jpg?hmac=s_shz8jLgIAiRoZ7FP0MA88RuD5sS0xJIGNmuTZLvs8",
    name: "강유진"
  },
  {
    imgSrc: "https://fastly.picsum.photos/id/768/200/200.jpg?hmac=CZCVsqJECKhkvl5gzeCA0O5iSMmRn_RVFzVrREOE7ws",
    name: "강성택"
  },
  {
    imgSrc: "https://fastly.picsum.photos/id/381/200/200.jpg?hmac=IXUwJuDt0wy3ChotTk60XiBv1aDqt3EbITLD8z4671w",
    name: "이영선"
  },
  {
    imgSrc: "https://fastly.picsum.photos/id/765/200/200.jpg?hmac=9zejtkA8_vjTeGNBqUBylUb3CoNHoPEFVUoLWpLMonQ",
    name: "이영선"
  },
  {
    imgSrc: "https://fastly.picsum.photos/id/230/200/200.jpg?hmac=8tI9ISupCMivMI7f7Q6i24FcYAg812XUEYJFZtaXp_8",
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
                  <FindFamilyListContentImg src={member.imgSrc}/>
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