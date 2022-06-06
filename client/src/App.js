import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// import components
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

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
            <div>Chosen Game</div>
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
  justify-content: space-evenly;
  height: calc(100vh - 110px);
  padding: 18px;
`;

export default App;
