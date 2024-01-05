import React, { useState } from "react";

import { 
  MainPlanContainer,
  MainPlanMemberContainer,
  MainPlanMemberHolder,
  MainPlanMember,
  MainPlanLabelContainer,
  MainPlanLabel,
  MainPlanLabelBottom,
  MainPlanLabelBottomColor,
  MainPlanLabelBottomDate,
  MainPlanLabelBottomPlan,
  MainPlanContent,
  MainPlanMemberName,
  MainPlanEditPlanContainer,
  MainPlanEditPlanContent,
  MainPlanEditPlanContentImg,
  MainPlanEditPlanContentLabel,
} from "./mainPlan.styles";

import MainTimeTable from "./mainTimeTable/mainTimeTable.components";

import planImg from "../../../assets/images/edit.svg";

import { useNavigate } from "react-router-dom";

const currentFamily = [
  "강유진",
  "강혜진",
  "강민진",
  "강성택",
  "이영선",
]

const MainPlan = () => {
  const navigate = useNavigate();

  const [selectedFamily, setSelectedFamily] = useState("강유진");
  const [backgroundColor, setBackgroundColor] = useState("#D9B8A7");
  const [date, setDate] = useState("월");
  const [startTime, setStartTime] = useState("10:00");
  const [endTime, setEndTime] = useState("12:00");
  const [todo, setTodo] = useState("회사");

  const onClickEditPlan = () => {
    navigate("/main/plan");
  };

  return (
    <MainPlanContainer>
      {/* member */}
      <MainPlanMemberContainer>
        {
          currentFamily.map((member) => {
            return (
              <MainPlanMemberHolder>
                <MainPlanMember />
                <MainPlanMemberName>{member}</MainPlanMemberName>
              </MainPlanMemberHolder>
            )
          })
        }
      </MainPlanMemberContainer>
      
      {/* 스케쥴 수정하기 */} 
      <MainPlanEditPlanContainer>
        <MainPlanEditPlanContent onClick={onClickEditPlan} >
          <MainPlanEditPlanContentImg src={planImg} />
          <MainPlanEditPlanContentLabel>스케쥴 수정</MainPlanEditPlanContentLabel>
        </MainPlanEditPlanContent>
      </MainPlanEditPlanContainer>

      {/* Label */}
      <MainPlanLabelContainer>
        <MainPlanLabel>{selectedFamily}님의 일정</MainPlanLabel>
        <MainPlanLabelBottom>
          <MainPlanLabelBottomColor style={{backgroundColor: `${backgroundColor}`}} />
          <MainPlanLabelBottomDate>{date} {startTime} ~ {endTime}</MainPlanLabelBottomDate>
          <MainPlanLabelBottomPlan>{todo}</MainPlanLabelBottomPlan>
        </MainPlanLabelBottom>
      </MainPlanLabelContainer>

      {/* content */}
      <MainPlanContent>
        <MainTimeTable />
      </MainPlanContent>
    </MainPlanContainer>
  )
};

export default MainPlan;