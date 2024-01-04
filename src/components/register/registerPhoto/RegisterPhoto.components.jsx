import React from "react";

import { 
  RegisterPhotoContainer,
  RegisterPhotoContent,
  RegisterPhotoButton,
  RegisterNextButton,
  RegisterPhotoButtonContainer,
  RegisterPhotoHolder,
  RegisterPhotoLabel,
} from "./RegisterPhoto.styles";

import camera from "../../../assets/images/camera.svg";

const RegisterPhoto = ({setPhoto, setHeaderContent}) => {
  const onClickRegisterComplete = () => {
    setPhoto(true)
    setHeaderContent("부모/자녀 선택");
  };

  return (
    <RegisterPhotoContainer>
      <RegisterPhotoHolder>
        <RegisterPhotoContent>
          <RegisterPhotoButtonContainer>
            <RegisterPhotoButton src={camera}/>
          </RegisterPhotoButtonContainer>
        </RegisterPhotoContent>

        <RegisterPhotoLabel>
          강유진
        </RegisterPhotoLabel>
      </RegisterPhotoHolder>

      <RegisterNextButton onClick={onClickRegisterComplete}>가입완료</RegisterNextButton>
    </RegisterPhotoContainer>
  )
};

export default RegisterPhoto;