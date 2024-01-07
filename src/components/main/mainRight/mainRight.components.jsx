import React, { useState } from "react";

import QuickAnswerHolder from "../../quickAnswer/QuickAnswer.components";

import { MainRightContainer } from "./mainRight.styles";

const MainRight = () => {
  const [checkedNumber, setCheckedNumber] = useState(0);

  return (
    <MainRightContainer>
      <QuickAnswerHolder checkedNumber={checkedNumber} setCheckedNumber={setCheckedNumber} />
    </MainRightContainer> 
  )
};

export default MainRight;