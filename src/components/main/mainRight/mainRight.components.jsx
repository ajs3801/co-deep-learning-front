import React from "react";

import QuickAnswerHolder from "../../quickAnswer/QuickAnswer.components";

import { MainRightContainer } from "./mainRight.styles";

const MainRight = () => {
  return (
    <MainRightContainer>
      <QuickAnswerHolder style={{marginTop: "10px"}} />
    </MainRightContainer> 
  )
};

export default MainRight;