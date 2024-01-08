import React, { useEffect, useState } from "react";

import { 
  MakePlanContainer,
  MakePlanExitButtonContainer,
  MakePlanExitButton,
  MakePlanDayContainer,
  MakePlanDayContent,
  MakPlanDayContentSelected,
  MakePlanTimeContentHolder,
  MakePlanTimeContainer,
  MakePlanTimeContent,
  MakePlanTimeContentLabel,
  MakePlanTimeContentSelect,
  MakePlanButtonContainer,
  MakePlanDeleteButton,
  MakePlanDeleteButtonContainer,
  MakePlanCompleteButton,
  MakePlanTodoContainer,
  MakePlanTimeContentNonSelect
} from "./MakePlan.styles";

import Trash from "../../../assets/images/trash.svg";

const days = [
  "월", "화", "수", "목", "금", "토", "일"
];

const times =[
  "8:00 AM",
  "8:30 AM",
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM",
  "10:00 PM",
  "10:30 PM",
  "11:00 PM",
  "11:30 PM",
  "12:00 PM",
]
// 한줄에 33
const MakePlan = ({setShowAddPlan, startIndexFromTimeTable, setStartIndexFromTimeTable, setTodo, todo, startTimeIndex, setStartTimeIndex, endTimeIndex, setEndTimeIndex}) => {

  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [selectedDays, setSelectedDays] = useState([false, false, false, false, false, false, false])
  
  const onClickDays = (index) => {
    let duplicatedSelectedDays = JSON.parse(JSON.stringify(selectedDays));

    const value = selectedDays[index];

    duplicatedSelectedDays.splice(index,1,!value);

    setSelectedDays(duplicatedSelectedDays);
  };

  const onClickStartTimes = (index) => {
    setStartTimeIndex((index));
    setStartIndexFromTimeTable((index))
    // set End Times
    setEndTimeIndex((index));
  };

  const onClickEndTimes = (index) => {
    setEndTimeIndex((index));
  }

  // onClick Buttons
  const onClickExitButton = () => {
    setShowAddPlan(false);
  };

  const onClickDeleteButton = () => {
    setShowAddPlan(false);
  };

  const onClickCompleteButton = () => {
    setShowAddPlan(false);
  };

  // onChange Todo
  const onChangeTodo = (event) => {
    setTodo(event.target.value);
  };

  useEffect(() => {
    console.log(startIndexFromTimeTable);
    setStartTime(startIndexFromTimeTable);
    setEndTime(startIndexFromTimeTable);
    console.log(startTime, endTime)
  }, [startIndexFromTimeTable])

  return (
    <MakePlanContainer>
      {/* exut button */}
      <MakePlanExitButtonContainer>
        <MakePlanExitButton onClick={onClickExitButton} />
      </MakePlanExitButtonContainer>

      {/*  todo */}
      <MakePlanTodoContainer value={todo} onChange={onChangeTodo}/>

      {/* day */}
      <MakePlanDayContainer>
        {
          days.map((day, index) => {
            return (
              (selectedDays[index]) ? (
                <MakPlanDayContentSelected onClick={() => onClickDays(index)}>{day}</MakPlanDayContentSelected>
              ) : (
                <MakePlanDayContent onClick={() => onClickDays(index)}>{day}</MakePlanDayContent>
              )
            );
          })
        }
      </MakePlanDayContainer>

      {/* time */}
      <MakePlanTimeContainer>
        <MakePlanTimeContentHolder>
          <MakePlanTimeContentLabel>시작 시간</MakePlanTimeContentLabel>
          <MakePlanTimeContent>
            {
              times.map((time, index) => {
                return (
                  (index === startTimeIndex) ? (
                    <MakePlanTimeContentSelect>
                      {time}
                    </MakePlanTimeContentSelect>
                  ) : (
                    <MakePlanTimeContentNonSelect onClick={() => {onClickStartTimes(index)}}>
                      {time}
                    </MakePlanTimeContentNonSelect>
                  )
                )
              })
            }
          </MakePlanTimeContent>
        </MakePlanTimeContentHolder>

        <MakePlanTimeContentHolder>
          <MakePlanTimeContentLabel>종료 시간</MakePlanTimeContentLabel>
          <MakePlanTimeContent>
            {
              times.map((time, index) => {
                return (
                  (index === endTimeIndex) ? (
                    <MakePlanTimeContentSelect>
                      {time}
                    </MakePlanTimeContentSelect>
                  ) : (
                    (
                      (index <= startTimeIndex) ? (
                        <MakePlanTimeContentNonSelect style={{color: "#BCBCBC"}} >
                          {time}
                        </MakePlanTimeContentNonSelect>
                      ) : (
                        <MakePlanTimeContentNonSelect onClick={() => {onClickEndTimes(index)}}>
                          {time}
                        </MakePlanTimeContentNonSelect>
                      )
                    )
                  )
                )
              })
            }
          </MakePlanTimeContent>
        </MakePlanTimeContentHolder>
      </MakePlanTimeContainer>

      <MakePlanButtonContainer>
        <MakePlanDeleteButtonContainer>
          <MakePlanDeleteButton src={Trash} onClick={onClickDeleteButton} />
        </MakePlanDeleteButtonContainer>
        <MakePlanCompleteButton onClick={onClickCompleteButton} >작성완료</MakePlanCompleteButton>
      </MakePlanButtonContainer>
    </MakePlanContainer>

  )
};

export default MakePlan;