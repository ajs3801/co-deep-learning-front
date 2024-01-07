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
  const [showAddPlan, setShowAddPlan] = useState(false);
  const [fixPlan, setFixPlan] = useState(false);
  const [startIndexFromTimeTable, setStartIndexFromTimeTable] = useState(0);
  const [startTimeIndex, setStartTimeIndex] = useState(0);
  const [endTimeIndex, setEndTimeIndex] = useState(0);

  const [todo, setTodo] = useState("");

  return (
    <EditPlanContentContainer>
      {/* <EditPlanContentHeader>
        <EditPlanThroughImage>이미지로 시간표 만들기</EditPlanThroughImage>
        <EditPlanSettingButton src={Setting}/>
      </EditPlanContentHeader> */}

      {/* timetable */}
      {
        showAddPlan ? (
          <EditPlanTimeTableContainer style={{height: "calc(var(--vh, 1vh) * 100 - 390px - 56px)"}}>
            <EditPlanTimeTable setShowAddPlan={setShowAddPlan} setTodo={setTodo} setStartTimeIndex={setStartTimeIndex} startTimeIndex={startTimeIndex} setEndTimeIndex={setEndTimeIndex} endTimeIndex={endTimeIndex}/>
          </EditPlanTimeTableContainer>
        ) : (
          <EditPlanTimeTableContainer>
            <EditPlanTimeTable setShowAddPlan={setShowAddPlan} setTodo={setTodo} setStartTimeIndex={setStartTimeIndex} startTimeIndex={startTimeIndex} setEndTimeIndex={setEndTimeIndex} endTimeIndex={endTimeIndex}/>
          </EditPlanTimeTableContainer>
        )
      }

      {/* add plan */}
      { showAddPlan && <MakePlan setShowAddPlan={setShowAddPlan} setStartIndexFromTimeTable={setStartIndexFromTimeTable} startIndexFromTimeTable={startIndexFromTimeTable} setTodo={setTodo} todo={todo} setStartTimeIndex={setStartTimeIndex} startTimeIndex={startTimeIndex} setEndTimeIndex={setEndTimeIndex} endTimeIndex={endTimeIndex}/>}

      {/* edit plan */}
      { fixPlan && <FixPlan />}
      
    </EditPlanContentContainer>
  );
};

export default EditPlanContent;