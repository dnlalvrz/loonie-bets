import styled from "styled-components";
import { useContext, useEffect } from "react";
import { GameContext } from "../Context/GameContext";

const ScoreBoard = () => {
    const { gameData, gameStatus: {status, gameId}} = useContext(GameContext);
    // console.log(gameData)
    let powerPlay = {};
    const powerPlayCheck = () => {
        if (!gameData.powerPlayInfo) return;
        if (!gameData.powerPlayInfo.inSituation) return;
        if (gameData.powerPlayInfo.inSituation) {
            powerPlay.active = gameData.powerPlayInfo.inSituation;
            powerPlay.powerPlayRemaining = gameData.powerPlayInfo.situationTimeRemaining;
            powerPlay.teamAdvantage = gameData.awayTeam.numSkaters > gameData.homeTeam.numSkaters ? gameData.awayTeam.team.name : gameData.homeTeam.team.name;

        }
    }
    powerPlayCheck();
    return(
        <Wrapper>
            {status === 200 && gameId !== "" &&
            <>
            <TeamsWrapper>
                <h2>{gameData.awayTeam.team.name} {gameData.awayTeam.goals}</h2>
                {powerPlay.active === true &&
                <p>{gameData.powerPlay} {powerPlay.teamAdvantage} power play</p>
                }
                <h2>{gameData.homeTeam.team.name} {gameData.homeTeam.goals}</h2>
            </TeamsWrapper>
            <GameStatus>
            <h3>{gameData.timeRemaining}</h3>
            <h3>{gameData.period}</h3>
            </GameStatus>
            </>
            }
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
    p {
        font-family: var(--font-body);
        font-size: .8em;
        color: lightcoral;
    }
`;

const TeamsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-between;
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