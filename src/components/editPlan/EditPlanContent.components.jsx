import React, { useState } from "react";

import Setting from "../../assets/images/settingButton.svg";

import { 
  EditPlanContentContainer,
  EditPlanContentHeader,
  EditPlanThroughImage,
  EditPlanSettingButton,
  EditPlanTimeTableContainer,

} from "./EditPlanContent.styles";

import EditPlanTimeTable from "./editPlanTimeTable/EditPlanTimeTable.components";
import MakePlan from "./makePlan/MakePlan.components";
import FixPlan from "./fixPlan/FixPlan.components";

const EditPlanContent = () => {
  const [showAddPlan, setShowAddPlan] = useState(true);
  const [fixPlan, setFixPlan] = useState(false);

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

      {/* add plan */}
      { showAddPlan && <MakePlan />}

      {/* edit plan */}
      { fixPlan && <FixPlan />}
      
    </EditPlanContentContainer>
  );
};

export default EditPlanContent;