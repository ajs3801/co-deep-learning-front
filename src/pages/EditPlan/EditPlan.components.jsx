import React from "react";

import { 
  EditPlanContainer,
  EditPlanHeader,
  EditBackIcon,
  EditContent,
  EditPlanHeaderLogo,
  EditCompleteButton
} from "./EditPlan.styles";

import backicon from "../../assets/images/backicon.svg";
import logo from "../../assets/images/HARU.svg";

import EditPlanContent from "../../components/editPlan/EditPlanContent.components";

import { useNavigate } from "react-router-dom";

const EditPlan = () => {
  const navigate = useNavigate();

  const onClickBackIcon = () => {
    navigate(-1);
  };  

  const onClickComplete = () => {
    navigate(-1);
  };

  return (
    <EditPlanContainer>
      {/* header */}
      <EditPlanHeader>
        <EditBackIcon onClick={onClickBackIcon} src={backicon}/>
        <EditPlanHeaderLogo src={logo}/>
        <EditCompleteButton onClick={onClickComplete}>수정완료</EditCompleteButton>
      </EditPlanHeader>

      {/* content */}
      <EditContent>
        <EditPlanContent />
      </EditContent>
    </EditPlanContainer>
  )
};

export default EditPlan;