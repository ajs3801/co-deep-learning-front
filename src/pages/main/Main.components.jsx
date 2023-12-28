import React, { useState } from "react";

import { 
  MainContainer,
  Header,
  MainContent,
  Footer,
  FooterButton,
  MainEditIcon,
} from "./Main.styles";

import MainFamily from "../../components/main/mainFamily/MainFamily.components";
import MainPlan from "../../components/main/mainPlan/mainPlan.components";
import MainRight from "../../components/main/mainRight/mainRight.components";

import editIcon from "../../assets/images/edit.svg";

import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

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

  const onClickEdit = () => {
    navigate("/main/edit");
  };

  return (
    <MainContainer>
      <Header>
        {
          left && <MainEditIcon onClick={onClickEdit} src={editIcon}/>
        }
      </Header>
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