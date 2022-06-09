import styled from "styled-components";
import { useContext, useEffect } from "react";
import { GameContext } from "../Context/GameContext";

const ScoreBoard = () => {
    const { gameData, gameStatus: {status}} = useContext(GameContext);

    return(
        <Wrapper>
            {status === 200 && 
            <TeamsWrapper>
                <h2>{gameData.awayTeam.team.name} {gameData.awayTeam.goals}</h2>
                <h2>{gameData.homeTeam.team.name} {gameData.homeTeam.goals}</h2>
            </TeamsWrapper>}
            {status === 200 && 
            <GameStatus>
            <h3>{gameData.timeRemaining}</h3>
            <h3>{gameData.period}</h3>
            </GameStatus>}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: var(--font-light);
    font-family: var(--font-heading);
    font-size: 1.2em;
    padding: 18px 18px 18px 0;
`;

const TeamsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    h2 {
        margin: 10px 0;
    }
`

const GameStatus = styled.div`
    display: flex;
    flex-direction: column;
    padding: 18px;
    h3 {
        margin: 2px 10px;
    }
`

export default ScoreBoard;