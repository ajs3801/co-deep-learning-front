import { AppContainer } from "./App.styles";

import Router from "./router";
import { RecoilRoot } from "recoil";

import "./global.css";

function App() {
  return (
    <AppContainer style={{ outline: 0 }}>
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </AppContainer>
  );
}

export default App;
