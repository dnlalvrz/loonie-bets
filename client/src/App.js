import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// import components
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Game from "./components/Game/Game";

function App() {
  return (
    <BrowserRouter>
    <GlobalStyles />
    <Header />
        <Main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/game/:gameId">
            <Game />
          </Route>
          <Route path="">404: Oops!</Route>
        </Switch>
        </Main>
    </BrowserRouter>
  );
}

const Main = styled.div`
  background: rgb(230,242,241);
  background: linear-gradient(0deg, rgba(230,242,241,1) 0%, rgba(147,239,240,1) 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 110px);
  padding: 18px;
`;

export default App;
