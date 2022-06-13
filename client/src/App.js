import styled from "styled-components";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useContext } from "react";
import { GameContext } from "./components/Context/GameContext";

// import components
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Game from "./components/Game/Game";
import Modal from "./components/Game/Modal";
import BetsPlaced from "./components/Game/BetsPlaced";


function App() {
  const { gameStatus } = useContext(GameContext);
  return (
    <BrowserRouter>
    <GlobalStyles />
    <Header />
        <Main>
        <Switch>
        { gameStatus.currentPlayerSelected.id !== null &&
            <Route exact path="/">
                <Redirect to={`/bet/${gameStatus.currentPlayerSelected.id}/`} />
            </Route>
        }
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/game/:gameId">
            <Game />
          </Route>
          <Route exact path="/bet/:id">
            <BetsPlaced />
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
