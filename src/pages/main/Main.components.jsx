import React, { useState } from "react";

import { 
  MainContainer,
  Header,
  MainContent,
  Footer,
  FooterButton,
} from "./Main.styles";

import MainFamily from "../../components/main/mainFamily/MainFamily.components";
import MainPlan from "../../components/main/mainPlan/mainPlan.components";
import MainRight from "../../components/main/mainRight/mainRight.components";

const Main = () => {
  const [left, setLeft] = useState(false);
  const [center, setCenter] = useState(true);
  const [right, setRight] = useState(false);

  const onClickLeft = () => {
    setLeft(true);
    setCenter(false);
    setRight(false);
  };

  const onClickCenter = () => {
    setLeft(false);
    setCenter(true);
    setRight(false);
  };

  const onClickRight = () => {
    setLeft(false);
    setCenter(false);
    setRight(true);
  };

  return (
    <MainContainer>
      <Header />
      <MainContent>
        { left && <MainPlan />}
        { center && <MainFamily />}
        { right && <MainRight />}
      </MainContent>
      <Footer>
        <FooterButton onClick={onClickLeft} />
        <FooterButton onClick={onClickCenter}/>
        <FooterButton onClick={onClickRight}/>
      </Footer>
    </MainContainer>
  )
}

export default Main;