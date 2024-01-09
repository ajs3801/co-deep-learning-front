import React from "react";

import { 
  ChangeFamilyNameContainer,
  ChangeFamilyNameHeader,
  ChangeFamilyNameContent,
  ChangeFamilyNameBackIcon,
  ChangeFamilyLabel,
  ChangeFamilyHolder,
  ChangeFamilyImg,
  ChangeFamilyInput,
  ChangeFamilyButton,
} from "./ChangeFamilyName.styles";

import backicon from "../../assets/images/backicon.svg";

import { useNavigate } from "react-router-dom";

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
]

const ChangeFamilyName = () => {

  const navigate = useNavigate();

  const onClickBack = () => {
    navigate(-1);
  };

  return (
    <ChangeFamilyNameContainer>
      {/* Header */}
      <ChangeFamilyNameHeader>
        <ChangeFamilyNameBackIcon src={backicon} onClick={onClickBack} />
        가족이름 변경
      </ChangeFamilyNameHeader>

      {/* Content */}
      <ChangeFamilyNameContent>
        {/* label */}
        <ChangeFamilyLabel>가족의 이름을 변경할 수 있어요</ChangeFamilyLabel>
        {
          familyMember.map((member) => {
            return (
              <ChangeFamilyHolder>
                <ChangeFamilyImg src={member.imgSrc} />
                <ChangeFamilyInput placeholder={member.name}/>
              </ChangeFamilyHolder>
            )
          })
        }
        <ChangeFamilyButton>변경완료</ChangeFamilyButton>
      </ChangeFamilyNameContent>
    </ChangeFamilyNameContainer>
  );
};

export default ChangeFamilyName;