import React, { useState } from "react";

import { 
  QuickAnswerContentContainer,
  QuickAnswerContentGrid,
  QuickAnswerContentLabel,
  QuickAnswerContent,
  QuickAnswerContentClicked,
} from "./QuickAnswer.styles";

const QuickAnswerHolder = ({checkedNumber, setCheckedNumber}) => {
  const [isClass, setIsClass] = useState(false);
  const [isMeeting, setIsMeeting] = useState(false);
  const [isWalk, setIsWalk] = useState(false);
  const [isHomeWork, setIsHomeWork] = useState(false);
  const [isTeamProject, setIsTeamProject] = useState(false);
  const [isOuterWork, setIsOuterWork] = useState(false);
  const [isHouseWorking, setIsHouseWorking] = useState(false);
  const [isPartTime, setIsPartTime] = useState(false);
  const [isWorkout, setIsWorkout] = useState(false);
  const [isMeetFriend, setIsMeetFriend] = useState(false);
  const [isDate, setIsDate] = useState(false);
  const [isHome, setIsHome] = useState(false);
  const [isMoving, setIsMoving] = useState(false);

  const onClickClass = () => {
    if (isClass) {
      setCheckedNumber(checkedNumber - 1);
      setIsClass(!isClass);
    } else {
      if (checkedNumber < 4) {
        setCheckedNumber(checkedNumber + 1)
        setIsClass(!isClass);
      }
    }
  };
  const onClickMeeting = () => {
    if (isMeeting) {
      setCheckedNumber(checkedNumber - 1);
      setIsMeeting(!isMeeting);
    } else {
      if (checkedNumber < 4) {
        setCheckedNumber(checkedNumber + 1)
        setIsMeeting(!isMeeting);
      }
    }
  };
  const onClickWalk = () => {
    if (isWalk) {
      setCheckedNumber(checkedNumber - 1);
      setIsWalk(!isWalk);
    } else {
      if (checkedNumber < 4) {
        setCheckedNumber(checkedNumber + 1)
        setIsWalk(!isWalk);
      }
    }
  };
  const onClickHomeWork = () => {
    if (isHomeWork) {
      setCheckedNumber(checkedNumber - 1);
      setIsHomeWork(!isHomeWork);
    } else {
      if (checkedNumber < 4) {
        setCheckedNumber(checkedNumber + 1)
        setIsHomeWork(!isHomeWork);
      }
    }
  };
  const onClickTeamProject = () => {
    if (isTeamProject) {
      setCheckedNumber(checkedNumber - 1);
      setIsTeamProject(!isTeamProject);
    } else {
      if (checkedNumber < 4) {
        setCheckedNumber(checkedNumber + 1)
        setIsTeamProject(!isTeamProject);
      }
    }
  };
  const onClickOuterWork = () => {
    if (isOuterWork) {
      setCheckedNumber(checkedNumber - 1);
      setIsOuterWork(!isOuterWork);
    } else {
      if (checkedNumber < 4) {
        setCheckedNumber(checkedNumber + 1)
        setIsOuterWork(!isOuterWork);
      }
    }
  };
  const onClickHouseWorking = () => {
    if (isHouseWorking) {
      setCheckedNumber(checkedNumber - 1);
      setIsHouseWorking(!isHouseWorking);
    } else {
      if (checkedNumber < 4) {
        setCheckedNumber(checkedNumber + 1)
        setIsHouseWorking(!isHouseWorking);
      }
    }
  };
  const onClickPartTime = () => {
    if (isPartTime) {
      setCheckedNumber(checkedNumber - 1);
      setIsPartTime(!isPartTime);
    } else {
      if (checkedNumber < 4) {
        setCheckedNumber(checkedNumber + 1)
        setIsPartTime(!isPartTime);
      }
    }
  };
  const onClickWorkout = () => {
    if (isWorkout) {
      setCheckedNumber(checkedNumber - 1);
      setIsWorkout(!isWorkout);
    } else {
      if (checkedNumber < 4) {
        setCheckedNumber(checkedNumber + 1)
        setIsWorkout(!isWorkout);
      }
    }
  };
  const onClickMeetFriend = () => {
    if (isMeetFriend) {
      setCheckedNumber(checkedNumber - 1);
      setIsMeetFriend(!isMeetFriend);
    } else {
      if (checkedNumber < 4) {
        setCheckedNumber(checkedNumber + 1)
        setIsMeetFriend(!isMeetFriend);
      }
    }
  };
  const onClickDate = () => {
    if (isDate) {
      setCheckedNumber(checkedNumber - 1);
      setIsDate(!isDate);
    } else {
      if (checkedNumber < 4) {
        setCheckedNumber(checkedNumber + 1)
        setIsDate(!isDate);
      }
    }
  };
  const onClickHome = () => {
    if (isHome) {
      setCheckedNumber(checkedNumber - 1);
      setIsHome(!isHome);
    } else {
      if (checkedNumber < 4) {
        setCheckedNumber(checkedNumber + 1)
        setIsHome(!isHome);
      }
    }
  };
  const onClickMoving = () => {
    if (isMoving) {
      setCheckedNumber(checkedNumber - 1);
      setIsMoving(!isMoving);
    } else {
      if (checkedNumber < 4) {
        setCheckedNumber(checkedNumber + 1)
        setIsMoving(!isMoving);
      }
    }
  };

  return (
    <QuickAnswerContentContainer>
      <QuickAnswerContentLabel>평소에 자주하는 일정을 선택해주세요 (최대 4개)</QuickAnswerContentLabel>
      <QuickAnswerContentGrid>
        {isClass ? (<QuickAnswerContentClicked onClick={onClickClass}>수업</QuickAnswerContentClicked>) : (<QuickAnswerContent onClick={onClickClass}>수업</QuickAnswerContent>)}
        {isMeeting ? (<QuickAnswerContentClicked onClick={onClickMeeting}>회의</QuickAnswerContentClicked>) : (<QuickAnswerContent onClick={onClickMeeting}>회의</QuickAnswerContent>)}
        {isWalk ? (<QuickAnswerContentClicked onClick={onClickWalk}>산책</QuickAnswerContentClicked>) : (<QuickAnswerContent onClick={onClickWalk}>산책</QuickAnswerContent>)}
        {isHomeWork ? (<QuickAnswerContentClicked onClick={onClickHomeWork}>과제</QuickAnswerContentClicked>) : (<QuickAnswerContent onClick={onClickHomeWork}>과제</QuickAnswerContent>)}
        {isTeamProject ? (<QuickAnswerContentClicked onClick={onClickTeamProject}>팀플</QuickAnswerContentClicked>) : (<QuickAnswerContent onClick={onClickTeamProject}>팀플</QuickAnswerContent>)}
        {isOuterWork ? (<QuickAnswerContentClicked onClick={onClickOuterWork}>외근</QuickAnswerContentClicked>) : (<QuickAnswerContent onClick={onClickOuterWork}>외근</QuickAnswerContent>)}
        {isHouseWorking ? (<QuickAnswerContentClicked onClick={onClickHouseWorking}>재택근무</QuickAnswerContentClicked>) : (<QuickAnswerContent onClick={onClickHouseWorking}>재택근무</QuickAnswerContent>)}
        {isPartTime ? (<QuickAnswerContentClicked onClick={onClickPartTime}>알바</QuickAnswerContentClicked>) : (<QuickAnswerContent onClick={onClickPartTime}>알바</QuickAnswerContent>)}
        {isWorkout ? (<QuickAnswerContentClicked onClick={onClickWorkout}>운동</QuickAnswerContentClicked>) : (<QuickAnswerContent onClick={onClickWorkout}>운동</QuickAnswerContent>)}
        {isMeetFriend ? (<QuickAnswerContentClicked onClick={onClickMeetFriend}>친구약속</QuickAnswerContentClicked>) : (<QuickAnswerContent onClick={onClickMeetFriend}>친구약속</QuickAnswerContent>)}
        {isDate ? (<QuickAnswerContentClicked onClick={onClickDate}>데이트</QuickAnswerContentClicked>) : (<QuickAnswerContent onClick={onClickDate}>데이트</QuickAnswerContent>)}
        {isHome ? (<QuickAnswerContentClicked onClick={onClickHome}>집</QuickAnswerContentClicked>) : (<QuickAnswerContent onClick={onClickHome}>집</QuickAnswerContent>)}
        {isMoving ? (<QuickAnswerContentClicked onClick={onClickMoving}>이동 중</QuickAnswerContentClicked>) : (<QuickAnswerContent onClick={onClickMoving}>이동 중</QuickAnswerContent>)}        
      </QuickAnswerContentGrid>
    </QuickAnswerContentContainer>
  )
};

export default QuickAnswerHolder;