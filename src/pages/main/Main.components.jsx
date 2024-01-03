import React, { useState } from "react";

import { 
  MainContainer,
  Header,
  HeaderLogo,
  MainContent,
  Footer,
  FooterButton,
  MainEditIcon,
} from "./Main.styles";

import MainFamily from "../../components/main/mainFamily/MainFamily.components";
import MainPlan from "../../components/main/mainPlan/mainPlan.components";
import MainRight from "../../components/main/mainRight/mainRight.components";

import editIcon from "../../assets/images/edit.svg";
import calendar_nonselect from "../../assets/images/home/calendar_nonselect.svg";
import calendar_select from "../../assets/images/home/calendar_select.svg";
import home_nonselect from "../../assets/images/home/home_nonselect.svg";
import home_select from "../../assets/images/home/home_select.svg";
import setting_nonselect from "../../assets/images/home/setting_nonselect.svg";
import logo from "../../assets/images/HARU.svg";

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
    navigate("/main/plan");
  };

  return (
    <MainContainer>
      <Header>
        {
          left && <MainEditIcon onClick={onClickEdit} src={editIcon}/>
        }
        <HeaderLogo src={logo}/>
      </Header>

      <MainContent>
        { left && <MainPlan />}
        { center && <MainFamily />}
        { right && <MainRight />}
      </MainContent>

      <Footer>
        {
          left ? (
            <FooterButton src={calendar_select} onClick={onClickLeft} />
          ) : (
            <FooterButton src={calendar_nonselect} onClick={onClickLeft} />
          )
        }

        {
          center ? (
            <FooterButton src={home_select} onClick={onClickCenter}/>
          ) : (
            <FooterButton src={home_nonselect} onClick={onClickCenter}/>
          )
        }

        {
          right ? (
            <FooterButton src={setting_nonselect} onClick={onClickRight}/>
          ) : (
            <FooterButton src={setting_nonselect} onClick={onClickRight}/>
          )
        }
      </Footer>
    </MainContainer>
  )
}

export default Main;