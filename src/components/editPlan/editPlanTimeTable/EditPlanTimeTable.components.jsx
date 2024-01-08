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
    backgroundColor: "#F8F8F8",
    content: "",
  },
  {
    id: "2",
    backgroundColor: "#F8F8F8",
    content: "",
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
    backgroundColor: "#F8F8F8",
    content: "",
  },
  {
    id: "8",
    backgroundColor: "#F8F8F8",
    content: "",
  },
  {
    id: "9",
    backgroundColor: "#F8F8F8",
    content: "",
  },
  {
    id: "10",
    backgroundColor: "#F8F8F8",
    content: "",
  },
  {
    id: "11",
    backgroundColor: "#F8F8F8",
    content: "",
  },
  {
    id: "12",
    backgroundColor: "#F8F8F8",
    content: "",
  },
  {
    id: "13",
    backgroundColor: "#F8F8F8",
    content: "",
  },
  {
    id: "14",
    backgroundColor: "#F8F8F8",
    content: "",
  },
  {
    id: "15",
    backgroundColor: "#F8F8F8",
    content: "",
  },
  {
    id: "16",
    backgroundColor: "#F8F8F8",
    content: "",
  },
  {
    id: "17",
    backgroundColor: "#F8F8F8",
    content: "",
  },
  {
    id: "18",
    backgroundColor: "#F8F8F8",
    content: "",
  },
  {
    id: "19",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "20",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "21",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "22",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "23",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "24",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "25",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "26",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "27",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "28",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "29",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "30",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "31",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "32",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "33",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "1",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "2",
    backgroundColor: "#F8F8F8",
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
    backgroundColor: "#F8F8F8",
  },
  {
    id: "8",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "9",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "10",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "11",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "12",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "13",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "14",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "15",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "16",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "17",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "18",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "19",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "20",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "21",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "22",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "23",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "24",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "25",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "26",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "27",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "28",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "29",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "30",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "31",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "32",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "33",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "1",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "2",
    backgroundColor: "#F8F8F8",
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
    backgroundColor: "#F8F8F8",
  },
  {
    id: "8",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "9",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "10",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "11",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "12",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "13",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "14",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "15",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "16",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "17",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "18",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "19",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "20",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "21",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "22",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "23",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "24",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "25",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "26",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "27",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "28",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "29",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "30",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "31",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "32",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "33",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "1",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "2",
    backgroundColor: "#F8F8F8",
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
    backgroundColor: "#F8F8F8",
  },
  {
    id: "8",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "9",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "10",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "11",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "12",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "13",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "14",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "15",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "16",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "17",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "18",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "19",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "20",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "21",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "22",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "23",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "24",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "25",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "26",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "27",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "28",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "29",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "30",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "31",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "32",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "33",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "1",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "2",
    backgroundColor: "#F8F8F8",
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
    backgroundColor: "#F8F8F8",
  },
  {
    id: "8",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "9",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "10",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "11",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "12",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "13",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "14",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "15",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "16",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "17",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "18",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "19",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "20",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "21",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "22",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "23",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "24",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "25",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "26",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "27",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "28",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "29",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "30",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "31",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "32",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "33",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "1",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "2",
    backgroundColor: "#F8F8F8",
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
    backgroundColor: "#F8F8F8",
  },
  {
    id: "8",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "9",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "10",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "11",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "12",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "13",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "14",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "15",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "16",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "17",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "18",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "19",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "20",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "21",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "22",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "23",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "24",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "25",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "26",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "27",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "28",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "29",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "30",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "31",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "32",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "33",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "1",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "2",
    backgroundColor: "#F8F8F8",
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
    backgroundColor: "#F8F8F8",
  },
  {
    id: "8",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "9",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "10",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "11",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "12",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "13",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "14",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "15",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "16",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "17",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "18",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "19",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "20",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "21",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "22",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "23",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "24",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "25",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "26",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "27",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "28",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "29",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "30",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "31",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "32",
    backgroundColor: "#F8F8F8",
  },
  {
    id: "33",
    backgroundColor: "#F8F8F8",
  },
];

const days = [
  "", "월", "화", "수", "목", "금", "토", "일"
]

const times = [
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
]

const EditPlanTimeTable = ({setShowAddPlan, setTodo, setStartTimeIndex, setEndTimeIndex}) => {

  const onClickContent = (index, content) => {
    console.log(index);

    setStartTimeIndex(index % 33);
    setEndTimeIndex(index % 33)

    setShowAddPlan(true);

    // set todo
    if (content) {
      setTodo(content);
    } else {
      setTodo("");
    }
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
            timeTable.map((time, index) => {return <EditPlanTableContent onClick={() => {onClickContent(index, time.content)}} style={{backgroundColor: `${time.backgroundColor}`}}></EditPlanTableContent>})
          }
        </EditPlanTableContainer>
      </TimeTableWholeContainer>
    </EditPlanHolder>
  )
};

export default EditPlanTimeTable;