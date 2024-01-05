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
    backgroundColor: "#FFF",
  },
  {
    id: "2",
    backgroundColor: "#FFF",
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
    backgroundColor: "#FFF",
  },
  {
    id: "8",
    backgroundColor: "#FFF",
  },
  {
    id: "9",
    backgroundColor: "#FFF",
  },
  {
    id: "10",
    backgroundColor: "#FFF",
  },
  {
    id: "11",
    backgroundColor: "#FFF",
  },
  {
    id: "12",
    backgroundColor: "#FFF",
  },
  {
    id: "13",
    backgroundColor: "#FFF",
  },
  {
    id: "14",
    backgroundColor: "#FFF",
  },
  {
    id: "15",
    backgroundColor: "#FFF",
  },
  {
    id: "16",
    backgroundColor: "#FFF",
  },
  {
    id: "17",
    backgroundColor: "#FFF",
  },
  {
    id: "18",
    backgroundColor: "#FFF",
  },
  {
    id: "19",
    backgroundColor: "#FFF",
  },
  {
    id: "20",
    backgroundColor: "#FFF",
  },
  {
    id: "21",
    backgroundColor: "#FFF",
  },
  {
    id: "22",
    backgroundColor: "#FFF",
  },
  {
    id: "23",
    backgroundColor: "#FFF",
  },
  {
    id: "24",
    backgroundColor: "#FFF",
  },
  {
    id: "25",
    backgroundColor: "#FFF",
  },
  {
    id: "26",
    backgroundColor: "#FFF",
  },
  {
    id: "27",
    backgroundColor: "#FFF",
  },
  {
    id: "28",
    backgroundColor: "#FFF",
  },
  {
    id: "29",
    backgroundColor: "#FFF",
  },
  {
    id: "30",
    backgroundColor: "#FFF",
  },
  {
    id: "31",
    backgroundColor: "#FFF",
  },
  {
    id: "32",
    backgroundColor: "#FFF",
  },
  {
    id: "33",
    backgroundColor: "#FFF",
  },
  {
    id: "1",
    backgroundColor: "#FFF",
  },
  {
    id: "2",
    backgroundColor: "#FFF",
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
    backgroundColor: "#FFF",
  },
  {
    id: "8",
    backgroundColor: "#FFF",
  },
  {
    id: "9",
    backgroundColor: "#FFF",
  },
  {
    id: "10",
    backgroundColor: "#FFF",
  },
  {
    id: "11",
    backgroundColor: "#FFF",
  },
  {
    id: "12",
    backgroundColor: "#FFF",
  },
  {
    id: "13",
    backgroundColor: "#FFF",
  },
  {
    id: "14",
    backgroundColor: "#FFF",
  },
  {
    id: "15",
    backgroundColor: "#FFF",
  },
  {
    id: "16",
    backgroundColor: "#FFF",
  },
  {
    id: "17",
    backgroundColor: "#FFF",
  },
  {
    id: "18",
    backgroundColor: "#FFF",
  },
  {
    id: "19",
    backgroundColor: "#FFF",
  },
  {
    id: "20",
    backgroundColor: "#FFF",
  },
  {
    id: "21",
    backgroundColor: "#FFF",
  },
  {
    id: "22",
    backgroundColor: "#FFF",
  },
  {
    id: "23",
    backgroundColor: "#FFF",
  },
  {
    id: "24",
    backgroundColor: "#FFF",
  },
  {
    id: "25",
    backgroundColor: "#FFF",
  },
  {
    id: "26",
    backgroundColor: "#FFF",
  },
  {
    id: "27",
    backgroundColor: "#FFF",
  },
  {
    id: "28",
    backgroundColor: "#FFF",
  },
  {
    id: "29",
    backgroundColor: "#FFF",
  },
  {
    id: "30",
    backgroundColor: "#FFF",
  },
  {
    id: "31",
    backgroundColor: "#FFF",
  },
  {
    id: "32",
    backgroundColor: "#FFF",
  },
  {
    id: "33",
    backgroundColor: "#FFF",
  },
  {
    id: "1",
    backgroundColor: "#FFF",
  },
  {
    id: "2",
    backgroundColor: "#FFF",
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
    backgroundColor: "#FFF",
  },
  {
    id: "8",
    backgroundColor: "#FFF",
  },
  {
    id: "9",
    backgroundColor: "#FFF",
  },
  {
    id: "10",
    backgroundColor: "#FFF",
  },
  {
    id: "11",
    backgroundColor: "#FFF",
  },
  {
    id: "12",
    backgroundColor: "#FFF",
  },
  {
    id: "13",
    backgroundColor: "#FFF",
  },
  {
    id: "14",
    backgroundColor: "#FFF",
  },
  {
    id: "15",
    backgroundColor: "#FFF",
  },
  {
    id: "16",
    backgroundColor: "#FFF",
  },
  {
    id: "17",
    backgroundColor: "#FFF",
  },
  {
    id: "18",
    backgroundColor: "#FFF",
  },
  {
    id: "19",
    backgroundColor: "#FFF",
  },
  {
    id: "20",
    backgroundColor: "#FFF",
  },
  {
    id: "21",
    backgroundColor: "#FFF",
  },
  {
    id: "22",
    backgroundColor: "#FFF",
  },
  {
    id: "23",
    backgroundColor: "#FFF",
  },
  {
    id: "24",
    backgroundColor: "#FFF",
  },
  {
    id: "25",
    backgroundColor: "#FFF",
  },
  {
    id: "26",
    backgroundColor: "#FFF",
  },
  {
    id: "27",
    backgroundColor: "#FFF",
  },
  {
    id: "28",
    backgroundColor: "#FFF",
  },
  {
    id: "29",
    backgroundColor: "#FFF",
  },
  {
    id: "30",
    backgroundColor: "#FFF",
  },
  {
    id: "31",
    backgroundColor: "#FFF",
  },
  {
    id: "32",
    backgroundColor: "#FFF",
  },
  {
    id: "33",
    backgroundColor: "#FFF",
  },
  {
    id: "1",
    backgroundColor: "#FFF",
  },
  {
    id: "2",
    backgroundColor: "#FFF",
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
    backgroundColor: "#FFF",
  },
  {
    id: "8",
    backgroundColor: "#FFF",
  },
  {
    id: "9",
    backgroundColor: "#FFF",
  },
  {
    id: "10",
    backgroundColor: "#FFF",
  },
  {
    id: "11",
    backgroundColor: "#FFF",
  },
  {
    id: "12",
    backgroundColor: "#FFF",
  },
  {
    id: "13",
    backgroundColor: "#FFF",
  },
  {
    id: "14",
    backgroundColor: "#FFF",
  },
  {
    id: "15",
    backgroundColor: "#FFF",
  },
  {
    id: "16",
    backgroundColor: "#FFF",
  },
  {
    id: "17",
    backgroundColor: "#FFF",
  },
  {
    id: "18",
    backgroundColor: "#FFF",
  },
  {
    id: "19",
    backgroundColor: "#FFF",
  },
  {
    id: "20",
    backgroundColor: "#FFF",
  },
  {
    id: "21",
    backgroundColor: "#FFF",
  },
  {
    id: "22",
    backgroundColor: "#FFF",
  },
  {
    id: "23",
    backgroundColor: "#FFF",
  },
  {
    id: "24",
    backgroundColor: "#FFF",
  },
  {
    id: "25",
    backgroundColor: "#FFF",
  },
  {
    id: "26",
    backgroundColor: "#FFF",
  },
  {
    id: "27",
    backgroundColor: "#FFF",
  },
  {
    id: "28",
    backgroundColor: "#FFF",
  },
  {
    id: "29",
    backgroundColor: "#FFF",
  },
  {
    id: "30",
    backgroundColor: "#FFF",
  },
  {
    id: "31",
    backgroundColor: "#FFF",
  },
  {
    id: "32",
    backgroundColor: "#FFF",
  },
  {
    id: "33",
    backgroundColor: "#FFF",
  },
  {
    id: "1",
    backgroundColor: "#FFF",
  },
  {
    id: "2",
    backgroundColor: "#FFF",
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
    backgroundColor: "#FFF",
  },
  {
    id: "8",
    backgroundColor: "#FFF",
  },
  {
    id: "9",
    backgroundColor: "#FFF",
  },
  {
    id: "10",
    backgroundColor: "#FFF",
  },
  {
    id: "11",
    backgroundColor: "#FFF",
  },
  {
    id: "12",
    backgroundColor: "#FFF",
  },
  {
    id: "13",
    backgroundColor: "#FFF",
  },
  {
    id: "14",
    backgroundColor: "#FFF",
  },
  {
    id: "15",
    backgroundColor: "#FFF",
  },
  {
    id: "16",
    backgroundColor: "#FFF",
  },
  {
    id: "17",
    backgroundColor: "#FFF",
  },
  {
    id: "18",
    backgroundColor: "#FFF",
  },
  {
    id: "19",
    backgroundColor: "#FFF",
  },
  {
    id: "20",
    backgroundColor: "#FFF",
  },
  {
    id: "21",
    backgroundColor: "#FFF",
  },
  {
    id: "22",
    backgroundColor: "#FFF",
  },
  {
    id: "23",
    backgroundColor: "#FFF",
  },
  {
    id: "24",
    backgroundColor: "#FFF",
  },
  {
    id: "25",
    backgroundColor: "#FFF",
  },
  {
    id: "26",
    backgroundColor: "#FFF",
  },
  {
    id: "27",
    backgroundColor: "#FFF",
  },
  {
    id: "28",
    backgroundColor: "#FFF",
  },
  {
    id: "29",
    backgroundColor: "#FFF",
  },
  {
    id: "30",
    backgroundColor: "#FFF",
  },
  {
    id: "31",
    backgroundColor: "#FFF",
  },
  {
    id: "32",
    backgroundColor: "#FFF",
  },
  {
    id: "33",
    backgroundColor: "#FFF",
  },
  {
    id: "1",
    backgroundColor: "#FFF",
  },
  {
    id: "2",
    backgroundColor: "#FFF",
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
    backgroundColor: "#FFF",
  },
  {
    id: "8",
    backgroundColor: "#FFF",
  },
  {
    id: "9",
    backgroundColor: "#FFF",
  },
  {
    id: "10",
    backgroundColor: "#FFF",
  },
  {
    id: "11",
    backgroundColor: "#FFF",
  },
  {
    id: "12",
    backgroundColor: "#FFF",
  },
  {
    id: "13",
    backgroundColor: "#FFF",
  },
  {
    id: "14",
    backgroundColor: "#FFF",
  },
  {
    id: "15",
    backgroundColor: "#FFF",
  },
  {
    id: "16",
    backgroundColor: "#FFF",
  },
  {
    id: "17",
    backgroundColor: "#FFF",
  },
  {
    id: "18",
    backgroundColor: "#FFF",
  },
  {
    id: "19",
    backgroundColor: "#FFF",
  },
  {
    id: "20",
    backgroundColor: "#FFF",
  },
  {
    id: "21",
    backgroundColor: "#FFF",
  },
  {
    id: "22",
    backgroundColor: "#FFF",
  },
  {
    id: "23",
    backgroundColor: "#FFF",
  },
  {
    id: "24",
    backgroundColor: "#FFF",
  },
  {
    id: "25",
    backgroundColor: "#FFF",
  },
  {
    id: "26",
    backgroundColor: "#FFF",
  },
  {
    id: "27",
    backgroundColor: "#FFF",
  },
  {
    id: "28",
    backgroundColor: "#FFF",
  },
  {
    id: "29",
    backgroundColor: "#FFF",
  },
  {
    id: "30",
    backgroundColor: "#FFF",
  },
  {
    id: "31",
    backgroundColor: "#FFF",
  },
  {
    id: "32",
    backgroundColor: "#FFF",
  },
  {
    id: "33",
    backgroundColor: "#FFF",
  },
  {
    id: "1",
    backgroundColor: "#FFF",
  },
  {
    id: "2",
    backgroundColor: "#FFF",
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
    backgroundColor: "#FFF",
  },
  {
    id: "8",
    backgroundColor: "#FFF",
  },
  {
    id: "9",
    backgroundColor: "#FFF",
  },
  {
    id: "10",
    backgroundColor: "#FFF",
  },
  {
    id: "11",
    backgroundColor: "#FFF",
  },
  {
    id: "12",
    backgroundColor: "#FFF",
  },
  {
    id: "13",
    backgroundColor: "#FFF",
  },
  {
    id: "14",
    backgroundColor: "#FFF",
  },
  {
    id: "15",
    backgroundColor: "#FFF",
  },
  {
    id: "16",
    backgroundColor: "#FFF",
  },
  {
    id: "17",
    backgroundColor: "#FFF",
  },
  {
    id: "18",
    backgroundColor: "#FFF",
  },
  {
    id: "19",
    backgroundColor: "#FFF",
  },
  {
    id: "20",
    backgroundColor: "#FFF",
  },
  {
    id: "21",
    backgroundColor: "#FFF",
  },
  {
    id: "22",
    backgroundColor: "#FFF",
  },
  {
    id: "23",
    backgroundColor: "#FFF",
  },
  {
    id: "24",
    backgroundColor: "#FFF",
  },
  {
    id: "25",
    backgroundColor: "#FFF",
  },
  {
    id: "26",
    backgroundColor: "#FFF",
  },
  {
    id: "27",
    backgroundColor: "#FFF",
  },
  {
    id: "28",
    backgroundColor: "#FFF",
  },
  {
    id: "29",
    backgroundColor: "#FFF",
  },
  {
    id: "30",
    backgroundColor: "#FFF",
  },
  {
    id: "31",
    backgroundColor: "#FFF",
  },
  {
    id: "32",
    backgroundColor: "#FFF",
  },
  {
    id: "33",
    backgroundColor: "#FFF",
  },
  {
    id: "11",
    backgroundColor: "#FFF",
  },
  {
    id: "12",
    backgroundColor: "#FFF",
  },
  {
    id: "13",
    backgroundColor: "#FFF",
  },
  {
    id: "14",
    backgroundColor: "#FFF",
  },
  {
    id: "15",
    backgroundColor: "#FFF",
  },
  {
    id: "16",
    backgroundColor: "#FFF",
  },
  {
    id: "17",
    backgroundColor: "#FFF",
  },
  {
    id: "18",
    backgroundColor: "#FFF",
  },
  {
    id: "19",
    backgroundColor: "#FFF",
  },
  {
    id: "20",
    backgroundColor: "#FFF",
  },
  {
    id: "21",
    backgroundColor: "#FFF",
  },
  {
    id: "22",
    backgroundColor: "#FFF",
  },
  {
    id: "23",
    backgroundColor: "#FFF",
  },
  {
    id: "24",
    backgroundColor: "#FFF",
  },
  {
    id: "25",
    backgroundColor: "#FFF",
  },
  {
    id: "26",
    backgroundColor: "#FFF",
  },
  {
    id: "27",
    backgroundColor: "#FFF",
  },
  {
    id: "28",
    backgroundColor: "#FFF",
  },
  {
    id: "29",
    backgroundColor: "#FFF",
  },
  {
    id: "30",
    backgroundColor: "#FFF",
  },
  {
    id: "31",
    backgroundColor: "#FFF",
  },
  {
    id: "32",
    backgroundColor: "#FFF",
  },
  {
    id: "33",
    backgroundColor: "#FFF",
  },
  {
    id: "21",
    backgroundColor: "#FFF",
  },
  {
    id: "22",
    backgroundColor: "#FFF",
  },
  {
    id: "23",
    backgroundColor: "#FFF",
  },
  {
    id: "24",
    backgroundColor: "#FFF",
  },
  {
    id: "25",
    backgroundColor: "#FFF",
  },
  {
    id: "26",
    backgroundColor: "#FFF",
  },
  {
    id: "27",
    backgroundColor: "#FFF",
  },
  {
    id: "28",
    backgroundColor: "#FFF",
  },
  {
    id: "29",
    backgroundColor: "#FFF",
  },
  {
    id: "30",
    backgroundColor: "#FFF",
  },
  {
    id: "31",
    backgroundColor: "#FFF",
  },
  {
    id: "32",
    backgroundColor: "#FFF",
  },
  {
    id: "33",
    backgroundColor: "#FFF",
  },
  {
    id: "28",
    backgroundColor: "#FFF",
  },
  {
    id: "29",
    backgroundColor: "#FFF",
  },
  {
    id: "30",
    backgroundColor: "#FFF",
  },
  {
    id: "31",
    backgroundColor: "#FFF",
  },
  {
    id: "32",
    backgroundColor: "#FFF",
  },
  {
    id: "33",
    backgroundColor: "#FFF",
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