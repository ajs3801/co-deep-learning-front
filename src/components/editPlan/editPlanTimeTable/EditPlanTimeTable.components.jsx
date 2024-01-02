import React, { useState } from "react";

import { 
  EditPlanHolder,
  TimeTableWholeContainer,
  EditPlanTableContainer,
  EditPlanTableTimeContent,
  EditPlanTableContent,
  EditPlanTableHeader,
  EditPlanHeaderContent,
} from "./EditPlanTimeTable.styles";

const timeTable = [
  {
    id: "1",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "2",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "3",
    backgroundColor: "#B2C0FF",
    content: "학교가기",
  },
  {
    id: "4",
    backgroundColor: "#B2C0FF",
    content: "학교가기",
  },
  {
    id: "5",
    backgroundColor: "#B2C0FF",
    content: "학교가기",

  },
  {
    id: "6",
    backgroundColor: "#B2C0FF",
    content: "학교가기",
  },
  {
    id: "7",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "8",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "9",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "10",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "11",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "12",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "13",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "14",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "15",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "16",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "17",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "18",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "19",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "20",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "21",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "22",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "23",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "24",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "25",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "26",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "27",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "28",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "29",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "30",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "31",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "32",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "33",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "1",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "2",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "3",
    backgroundColor: "#B2C0FF",
    content: "학교가기",
  },
  {
    id: "4",
    backgroundColor: "#B2C0FF",
    content: "학교가기",
  },
  {
    id: "5",
    backgroundColor: "#B2C0FF",
    content: "학교가기",

  },
  {
    id: "6",
    backgroundColor: "#B2C0FF",
    content: "학교가기",
  },
  {
    id: "7",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "8",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "9",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "10",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "11",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "12",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "13",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "14",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "15",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "16",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "17",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "18",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "19",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "20",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "21",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "22",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "23",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "24",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "25",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "26",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "27",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "28",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "29",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "30",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "31",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "32",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "33",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "1",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "2",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "3",
    backgroundColor: "#B2C0FF",
    content: "학교가기",
  },
  {
    id: "4",
    backgroundColor: "#B2C0FF",
    content: "학교가기",
  },
  {
    id: "5",
    backgroundColor: "#B2C0FF",
    content: "학교가기",

  },
  {
    id: "6",
    backgroundColor: "#B2C0FF",
    content: "학교가기",
  },
  {
    id: "7",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "8",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "9",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "10",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "11",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "12",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "13",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "14",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "15",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "16",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "17",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "18",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "19",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "20",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "21",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "22",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "23",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "24",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "25",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "26",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "27",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "28",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "29",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "30",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "31",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "32",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "33",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "1",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "2",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "3",
    backgroundColor: "#B2C0FF",
    content: "학교가기",
  },
  {
    id: "4",
    backgroundColor: "#B2C0FF",
    content: "학교가기",
  },
  {
    id: "5",
    backgroundColor: "#B2C0FF",
    content: "학교가기",

  },
  {
    id: "6",
    backgroundColor: "#B2C0FF",
    content: "학교가기",
  },
  {
    id: "7",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "8",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "9",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "10",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "11",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "12",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "13",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "14",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "15",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "16",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "17",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "18",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "19",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "20",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "21",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "22",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "23",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "24",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "25",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "26",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "27",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "28",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "29",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "30",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "31",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "32",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "33",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "1",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "2",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "3",
    backgroundColor: "#B2C0FF",
    content: "학교가기",
  },
  {
    id: "4",
    backgroundColor: "#B2C0FF",
    content: "학교가기",
  },
  {
    id: "5",
    backgroundColor: "#B2C0FF",
    content: "학교가기",

  },
  {
    id: "6",
    backgroundColor: "#B2C0FF",
    content: "학교가기",
  },
  {
    id: "7",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "8",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "9",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "10",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "11",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "12",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "13",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "14",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "15",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "16",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "17",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "18",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "19",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "20",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "21",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "22",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "23",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "24",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "25",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "26",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "27",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "28",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "29",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "30",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "31",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "32",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "33",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "1",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "2",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "3",
    backgroundColor: "#B2C0FF",
    content: "학교가기",
  },
  {
    id: "4",
    backgroundColor: "#B2C0FF",
    content: "학교가기",
  },
  {
    id: "5",
    backgroundColor: "#B2C0FF",
    content: "학교가기",

  },
  {
    id: "6",
    backgroundColor: "#B2C0FF",
    content: "학교가기",
  },
  {
    id: "7",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "8",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "9",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "10",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "11",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "12",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "13",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "14",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "15",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "16",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "17",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "18",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "19",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "20",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "21",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "22",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "23",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "24",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "25",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "26",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "27",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "28",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "29",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "30",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "31",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "32",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "33",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "1",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "2",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "3",
    backgroundColor: "#B2C0FF",
    content: "학교가기",
  },
  {
    id: "4",
    backgroundColor: "#B2C0FF",
    content: "학교가기",
  },
  {
    id: "5",
    backgroundColor: "#B2C0FF",
    content: "학교가기",

  },
  {
    id: "6",
    backgroundColor: "#B2C0FF",
    content: "학교가기",
  },
  {
    id: "7",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "8",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "9",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "10",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "11",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "12",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "13",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "14",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "15",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "16",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "17",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "18",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "19",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "20",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "21",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "22",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "23",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "24",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "25",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "26",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "27",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "28",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "29",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "30",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "31",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "32",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "33",
    backgroundColor: "#FFFFFF",
  },
];

const days = [
  "", "월", "화", "수", "목", "금", "토", "일"
]

const times = [
  "7",
  "",
  "8",
  "",
  "9",
  "",
  "10",
  "",
  "11",
  "",
  "12",
  "",
  "13",
  "",
  "14",
  "",
  "15",
  "",
  "16",
  "",
  "17",
  "",
  "18",
  "",
  "19",
  "",
  "20",
  "",
  "21",
  "",
  "22",
  "",
  "23",
  "",
  "24",
  "",
  "1",
  "",
  "2",
]

const EditPlanTimeTable = () => {

  const onClickContent = (todo) => {
    console.log(todo);
  }

  return (
    <EditPlanHolder>
      <TimeTableWholeContainer>
        <EditPlanTableHeader>
          {
            days.map((day) => {return <EditPlanHeaderContent>{day}</EditPlanHeaderContent>})
          }
        </EditPlanTableHeader>

        <EditPlanTableContainer>
          {/* time */}
          {
            times.map((time) => {
              return (
                <EditPlanTableTimeContent>
                  {time}
                </EditPlanTableTimeContent>
              )
            })
          }

          {/* time block */}
          {
            timeTable.map((time) => {return <EditPlanTableContent onClick={() => {onClickContent(time.content)}} style={{backgroundColor: `${time.backgroundColor}`}}></EditPlanTableContent>})
          }
        </EditPlanTableContainer>
      </TimeTableWholeContainer>
    </EditPlanHolder>
  )
};

export default EditPlanTimeTable;