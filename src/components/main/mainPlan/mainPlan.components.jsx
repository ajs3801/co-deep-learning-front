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
  MainPlanMemberClicked,
  MainPlanMemberClickedImg,
} from "./mainPlan.styles";

import MainTimeTable from "./mainTimeTable/mainTimeTable.components";

import check from "../../../assets/images/check.svg";
import planImg from "../../../assets/images/edit.svg";

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
  {
    imgSrc: "https://fastly.picsum.photos/id/765/200/200.jpg?hmac=9zejtkA8_vjTeGNBqUBylUb3CoNHoPEFVUoLWpLMonQ",
    name: "이영선"
  },
  {
    imgSrc: "https://fastly.picsum.photos/id/230/200/200.jpg?hmac=8tI9ISupCMivMI7f7Q6i24FcYAg812XUEYJFZtaXp_8",
    name: "강혜진"
  },
]

const MainPlan = () => {
  const navigate = useNavigate();

  const [selectedFamily, setSelectedFamily] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("#F8F8F8");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [todo, setTodo] = useState("");

  const onClickEditPlan = () => {
    navigate("/main/plan");
  };

  const onClickMember = (familyName) => {
    setSelectedFamily(familyName);
  };

  return (
    <MainPlanContainer>
      {/* member */}
      <MainPlanMemberContainer>
        {
          familyMember.map((member) => {
            return (
              <MainPlanMemberHolder onClick={() => {onClickMember(member.name)}}>
                <MainPlanMember src={member.imgSrc}/>
                <MainPlanMemberName>{member.name}</MainPlanMemberName>
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
        {
          selectedFamily ? (
            <MainPlanLabel>{selectedFamily}님의 일정</MainPlanLabel>
          ) : (
            <MainPlanLabel>원하는 사람의 프로필을 눌러보아요</MainPlanLabel>
          )
        }
        <MainPlanLabelBottom>
          {backgroundColor && <MainPlanLabelBottomColor style={{backgroundColor: `${backgroundColor}`}} />}
          {date && <MainPlanLabelBottomDate>{date} {startTime} ~ {endTime}</MainPlanLabelBottomDate>}
          <MainPlanLabelBottomPlan>{todo}</MainPlanLabelBottomPlan>
        </MainPlanLabelBottom>
      </MainPlanLabelContainer>

      {/* content */}
      <MainPlanContent>
        { selectedFamily && <MainTimeTable setTodo={setTodo} setDate={setDate} setStartTime={setStartTime} setEndTime={setEndTime} setBackgroundColor={setBackgroundColor} />}
      </MainPlanContent>
    </MainPlanContainer>
  )
};

export default MainPlan;