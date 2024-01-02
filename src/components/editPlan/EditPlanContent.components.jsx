import React from "react";

import Setting from "../../assets/images/settingButton.svg";

import { 
  EditPlanContentContainer,
  EditPlanContentHeader,
  EditPlanThroughImage,
  EditPlanSettingButton,
  EditPlanTimeTableContainer,

} from "./EditPlanContent.styles";

import EditPlanTimeTable from "./editPlanTimeTable/EditPlanTimeTable.components";

const EditPlanContent = () => {

  return (
    <EditPlanContentContainer>
      <EditPlanContentHeader>
        <EditPlanThroughImage>이미지로 시간표 만들기</EditPlanThroughImage>
        <EditPlanSettingButton src={Setting}/>
      </EditPlanContentHeader>

      {/* timetable */}
      <EditPlanTimeTableContainer>
        <EditPlanTimeTable />
      </EditPlanTimeTableContainer>
    </EditPlanContentContainer>
  );
};

export default EditPlanContent;