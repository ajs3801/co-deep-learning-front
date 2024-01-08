import React, { useState } from "react";

import { 
  MainRightContainer,
  MainRightMyProfileContainer,
  MainRightMyProfile,
  MainRightMyName,
  MainRightEditProfileContainer,
  MainRightEditProfileContent,
  MainRightEditProfileContentImg,
  MainRightEditProfileContentLabel,
  FamilyListContainer,
  FamilyListGrid,
  FamilyListLabel,
  FamilyListContent,
  FamilyListContentImg,
  FamilyListContentLabel,
  MainRightButton,
  MainRightButtonContainer,

} from "./mainRight.styles";

import { useNavigate } from "react-router-dom";

import edit from "../../../assets/images/edit.svg";

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
]

const MainRight = () => {
  const navigate = useNavigate();

  const onClickChangeQuickAnswer = () => {
    navigate("/main/answer");
  };

  const onClickChangeFamilyName = () => {
    navigate("/main/change");
  }

  return (
    <MainRightContainer>
      {/* My profile */}
      <MainRightMyProfileContainer>
        <MainRightMyProfile src="https://fastly.picsum.photos/id/427/200/200.jpg?hmac=s_shz8jLgIAiRoZ7FP0MA88RuD5sS0xJIGNmuTZLvs8"/>
        <MainRightMyName>강유진</MainRightMyName>
        <MainRightEditProfileContainer>
          <MainRightEditProfileContent>
            <MainRightEditProfileContentImg src={edit} />
            <MainRightEditProfileContentLabel>프로필 수정</MainRightEditProfileContentLabel>
          </MainRightEditProfileContent>
        </MainRightEditProfileContainer>
      </MainRightMyProfileContainer>

      {/* Family Profile */}
      <FamilyListContainer>
        <FamilyListLabel>우리 가족</FamilyListLabel>
        <FamilyListGrid>
          {
            familyMember.map((member) => {
              return (
                <FamilyListContent>
                  <FamilyListContentImg src={member.imgSrc}/>
                  <FamilyListContentLabel>{member.name}</FamilyListContentLabel>
                </FamilyListContent>
              )
            })
          }
        </FamilyListGrid>
      </FamilyListContainer>

      {/* Button Container */}
      <MainRightButtonContainer>
        <MainRightButton onClick={onClickChangeQuickAnswer}>
          자주하는 일 변경 
        </MainRightButton>
        <MainRightButton onClick={onClickChangeFamilyName}>
          가족 이름 변경
        </MainRightButton>
      </MainRightButtonContainer>
    </MainRightContainer> 
  )
};

export default MainRight;