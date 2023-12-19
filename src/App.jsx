import { AppContainer } from "./App.styles";

import Router from "./router";
import { RecoilRoot } from "recoil";

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
