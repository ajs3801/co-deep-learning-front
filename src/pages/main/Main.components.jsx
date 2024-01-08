import React, { useState } from "react";

import { 
  MainContainer,
  Header,
  HeaderLogo,
  MainContent,
  Footer,
  FooterButton,
  MainBellIcon,
  FooterContainer,
  FooterLabel,
} from "./Main.styles";

import MainFamily from "../../components/main/mainFamily/MainFamily.components";
import MainPlan from "../../components/main/mainPlan/mainPlan.components";
import MainRight from "../../components/main/mainRight/mainRight.components";

// import editIcon from "../../assets/images/edit.svg";
import calendar_nonselect from "../../assets/images/home/calendar_nonselect.svg";
import calendar_select from "../../assets/images/home/calendar_select.svg";
import home_nonselect from "../../assets/images/home/home_nonselect.svg";
import home_select from "../../assets/images/home/home_select.svg";
import setting_nonselect from "../../assets/images/home/setting_nonselect.svg";
import setting_select from "../../assets/images/home/setting_select.svg";
import logo from "../../assets/images/HARU.svg";
import bell from "../../assets/images/bell.svg";

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

  const onClickBell = () => {
    navigate("/main/doAnswer");
  };

  return (
    <MainContainer>
      <Header>
        {
          center && <MainBellIcon onClick={onClickBell} src={bell}/>
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
            <FooterContainer onClick={onClickLeft}>
              <FooterButton src={calendar_select}/>
              <FooterLabel style={{color: "#68B38F"}}>스케쥴</FooterLabel>
            </FooterContainer>
            
          ) : (
            <FooterContainer onClick={onClickLeft}>
              <FooterButton src={calendar_nonselect} />
              <FooterLabel>스케쥴</FooterLabel>
            </FooterContainer>
          )
        }

        {
          center ? (
            <FooterContainer onClick={onClickCenter}>
              <FooterButton src={home_select} />
              <FooterLabel style={{color: "#68B38F"}}>홈</FooterLabel>
            </FooterContainer>
          ) : (
            <FooterContainer onClick={onClickCenter}>
              <FooterButton src={home_nonselect} />
              <FooterLabel>홈</FooterLabel>
            </FooterContainer>
          )
        }

        {
          right ? (
            <FooterContainer onClick={onClickRight}>
              <FooterButton src={setting_select} />
              <FooterLabel style={{color: "#68B38F"}}>마이페이지</FooterLabel>
            </FooterContainer>
          ) : (
            <FooterContainer onClick={onClickRight}>
              <FooterButton src={setting_nonselect} />
              <FooterLabel>마이페이지</FooterLabel>
            </FooterContainer>
          )
        }
      </Footer>
    </MainContainer>
  )
}

export default Main;