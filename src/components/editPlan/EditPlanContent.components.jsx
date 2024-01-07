import React, { useState } from "react";

import Setting from "../../assets/images/settingButton.svg";

import { 
  EditPlanContentContainer,
  EditPlanContentHeader,
  EditPlanThroughImage,
  EditPlanSettingButton,
  EditPlanTimeTableContainer,
  EditPlanContentLabel,
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
      <EditPlanContentLabel>시간 블록을 눌러 일정을 추가하거나 수정할 수 있어요</EditPlanContentLabel>
      {/* <EditPlanContentHeader>
        <EditPlanThroughImage>이미지로 시간표 만들기</EditPlanThroughImage>
        <EditPlanSettingButton src={Setting}/>
      </EditPlanContentHeader> */}

      {/* timetable */}
      {
        showAddPlan ? (
          <EditPlanTimeTableContainer style={{height: "calc(var(--vh, 1vh) * 100 - 390px - 56px -17px)"}}>
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