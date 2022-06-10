import styled from "styled-components";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GameContext } from "../Context/GameContext";

const BetsPlaced = () => {
    const { id } = useParams();
    const { gameStatus, setGameStatus, } = useContext(GameContext);
    const gameId = gameStatus.gameId;
    // test with useState
    const [goals, setGoals] = useState([]);
    const index = goals.length;
    const numOfGoals = gameStatus.goalsInGame;
    const latestGoal = gameStatus.latestGoal;
    // console.log(index,latestGoal)

    useEffect(() => {
        const interval = setInterval(() => {
            fetch(`/api/goals?gameId=${gameId}`)
            .then(res => res.json())
            .then (data => {
                // console.log(data.data.length)
                // console.log(index)
                if (data.data.length > index) {
                    setGameStatus({...gameStatus,
                        goalsInGame: data.data.length,
                        latestGoal: data.data[data.data.length - 1],
                        newGoal: true});
                    setGoals(data.data);
                    // console.log(data);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                setGameStatus("error");
            });
        }, 60000);
        return () => clearInterval(interval);
    }, [])

    return(
        <Wrapper>
            <h1>{id}</h1>
            <p>{gameStatus.currentPlayerSelected.name}</p>
            {gameStatus.newGoal === true &&
                <p>{latestGoal.players[0].player.fullName} at {latestGoal.about.periodTimeRemaining} remaining!</p>
            }
        </Wrapper>
    )
}


const Wrapper = styled.div`
    position: absolute;
    color: var(--font-light);
    font-family: var(--font-heading);
    left: 25%;
    align-self: center;
    display: flex;
    flex-direction: column;
    height: 50%;
    width: 50%;
    background: var(--color-header);
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    h1 {
        padding: 10px;
    }
    p {
        padding: 10px;
    }
`

export default BetsPlaced;