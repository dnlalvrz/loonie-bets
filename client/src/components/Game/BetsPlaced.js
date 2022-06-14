import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { GameContext } from "../Context/GameContext";

const BetsPlaced = () => {
    const { gameStatus, setGameStatus } = useContext(GameContext);
    const gameId = gameStatus.gameId;
    const index = gameStatus.goalsInGame;
    const latestGoal = gameStatus.latestGoal;
    // console.log(index,latestGoal)
    const backToGame = () => {
        setGameStatus({...gameStatus,
            currentPlayerSelected: {id: null, name: null},
            newGoal: false,
        })
    }
    const backToHome = () => {
        setGameStatus({...gameStatus,
            status: null,
            gameId: "",
            userSelected: false, 
            currentPlayerSelected: {id: null, name: null},
            newGoal: false,
        })
    }

    useEffect(() => {
        const interval = setInterval(() => {
            fetch(`/api/goals?gameId=${gameId}`)
            .then(res => res.json())
            .then (data => {
                // console.log(data.data.length)
                // console.log(index)
                if (data.data.length > index) {
                    // console.log("new goal")
                    if (gameStatus.currentPlayerSelected.id === data.data[data.data.length - 1].players[0].player.id) {
                        setGameStatus({...gameStatus,
                            currentUserHasWon: true, 
                            userGains: gameStatus.userGains + 1,
                            goalsInGame: data.data.length,
                            latestGoal: data.data[data.data.length - 1],
                            newGoal: true,
                        })
                    }
                    if (gameStatus.currentPlayerSelected.id !== data.data[data.data.length - 1].players[0].player.id) {
                        setGameStatus({...gameStatus,
                            currentUserHasWon: false, 
                            userGains: gameStatus.userGains - 1,
                            goalsInGame: data.data.length,
                            latestGoal: data.data[data.data.length - 1],
                            newGoal: true,
                        })
                    }
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                setGameStatus("error");
            });
        }, 30000);
        return () => clearInterval(interval);
    }, [])

    return(
        <Wrapper>
            <p>Now playing with: <span>{gameStatus.currentPlayerSelected.name}</span></p>
            {gameStatus.newGoal === true &&
            <>
                <p>🚨 🚨 Goal by: <span>{latestGoal.players[0].player.fullName}</span> at {latestGoal.about.periodTimeRemaining} remaining in the {latestGoal.about.ordinalNum} period! 🚨 🚨</p>
            {gameStatus.currentUserHasWon === true &&
                <p><span>{gameStatus.currentUser}</span> has won! 💰 💰 👏🏽 👏🏽 💰 💰</p>
            }
            {gameStatus.currentUserHasWon === false &&
                <p><span>{gameStatus.currentUser}</span> has lost.</p>
            }
            <Reset to={`/game/${gameStatus.gameId}`} onClick={backToGame}>Continue playing</Reset>
            <Reset to="/" onClick={backToHome}>Choose a different game</Reset>
            </>
            }
        </Wrapper>
    )
}


const Wrapper = styled.div`
    position: absolute;
    line-height: 1.2em;
    color: var(--font-light);
    font-family: var(--font-body);
    left: 25%;
    align-self: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    min-height: 50%;
    width: 50%;
    background: var(--color-header);
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    p {
        padding: 20px;
    }
    span {
        color: var(--color-ice);
        font-family: var(--font-heading);
    }
`

const Reset = styled(Link)`
        line-height: 1em;
        align-self: center;
        font-size: 12px;
        text-align: center;
        text-decoration: none;
        cursor: pointer;
        border: 2px groove;
        border-radius: 5px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        font-family: var(--font-body);
        color: var(--font-light);
        background: lightcoral;
        padding: 8px 2px;
        margin: 10px 0;
        width: 180px;
        max-height: 30px;
        transition:all ease-out 200ms;
        &:hover {
            opacity: .9;
            border: 2px double;
        }
`

export default BetsPlaced;