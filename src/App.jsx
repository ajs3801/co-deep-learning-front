import { AppContainer } from "./App.styles";

import Router from "./router";
import { RecoilRoot } from "recoil";

import "./global.css";
import { useEffect } from "react";

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    console.log(vh);
  }
  useEffect(() => {
    setScreenSize();
  });

  return (
    <AppContainer style={{ outline: 0 }}>
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </AppContainer>
  );
}

export default App;
