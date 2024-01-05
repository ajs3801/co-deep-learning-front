import React, { useState } from "react";

import { 
  MainTimeTableContainer,
  MainTimeTableContent,
  MainTimeTableHeader,
  MainTimeHolder,
  MainTimeHeaderContent,
  MainTimeTableTimeContent,
  TimeTableWholeContainer,
} from "./mainTimeTable.styles";

const timeTable = [
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

// const times = [
//   "8:00",
//   "8:30",
//   "9:00",
//   "9:30",
//   "10:00",
//   "10:30",
//   "11:00",
//   "11:30",
//   "12:00",
//   "12:30",
//   "13:00",
//   "13:30",
//   "14:00",
//   "14:30",
//   "15:00",
//   "15:30",
//   "16:00",
//   "16:30",
//   "17:00",
//   "17:30",
//   "18:00",
//   "18:30",
//   "19:00",
//   "19:30",
//   "20:00",
//   "20:30",
//   "21:00",
//   "21:30",
//   "22:00",
//   "22:30",
//   "23:00",
//   "23:30",
//   "24:00",
// ]

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

const MainTimeTable = () => {
  const [content, setContent] = useState("시간을 눌러보아요")

  const onClickContent = (todo) => {
    setContent(todo);
    console.log(todo);
  }

  return (
    <MainTimeHolder>
      <TimeTableWholeContainer>
        <MainTimeTableHeader>
          {
            days.map((day) => {return <MainTimeHeaderContent>{day}</MainTimeHeaderContent>})
          }
        </MainTimeTableHeader>

        <MainTimeTableContainer>
          {/* time */}
          {
            times.map((time) => {
              return (
                <MainTimeTableTimeContent>
                  {time}
                </MainTimeTableTimeContent>
              )
            })
          }

          {/* time block */}
          {
            timeTable.map((time) => {return <MainTimeTableContent onClick={() => {onClickContent(time.content)}} style={{backgroundColor: `${time.backgroundColor}`}}></MainTimeTableContent>})
          }
        </MainTimeTableContainer>
      </TimeTableWholeContainer>
    </MainTimeHolder>
  )
};

export default MainTimeTable;