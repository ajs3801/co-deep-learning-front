import React, { useState } from "react";

import { 
  MainPlanContainer,
  MainPlanMemberContainer,
  MainPlanMemberHolder,
  MainPlanMember,
  MainPlanLabel,
  MainPlanContent,
  MainPlanMemberName,
} from "./mainPlan.styles";

import MainTimeTable from "./mainTimeTable/mainTimeTable.components";

const currentFamily = [
  "강유진",
  "강혜진",
  "강민진",
  "강성택",
  "이영선",
]

const MainPlan = () => {
  const [selectedFamily, setSelectedFamily] = useState("강유진");

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

      {/* Label */}
      <MainPlanLabel>{selectedFamily}님의 일정</MainPlanLabel>

      {/* content */}
      <MainPlanContent>
        <MainTimeTable />
      </MainPlanContent>
    </MainPlanContainer>
  )
};

export default MainPlan;