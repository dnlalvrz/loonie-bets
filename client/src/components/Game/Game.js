import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { GameContext } from "../Context/GameContext";
import Modal from "./Modal";

const Game = () => {
    const { gameId } = useParams();
    const {gameStatus, setGameStatus} = useContext(GameContext);
    const [selectedPlayer, setSelectedPlayer] = useState(null);
    const [status, setStatus] = useState(null);
    const [lineups, setLineups] = useState(null);

    // fetch the endpoint for selected game's lineup
    useEffect(() => {
        fetch(`/api/lineups/${gameId}`)
        .then(res => res.json())
        .then (data => {
            // console.log(data)
            setLineups(data.data);
            setStatus(data.status);
        })
        .catch((error) => {
            console.error('Error:', error);
            setStatus("error");
        });
    }, [])

    return(
        <>
            <Message>To begin, select the player who you think will score the next goal of the game</Message>
            { status === 200 &&
                <Wrapper>
                <Lineup>
                    <h2>{lineups[0].away.awayTeam.name}</h2>
                    {
                        lineups[0].away.awayLineup.map(player => {
                            return(
                                <Player key={player.id}
                                    disabled={player.id === gameStatus.lastPlayerSelected.id ? true : false}
                                    value={player.id} 
                                    onClick={() => {
                                    if (player.id !== gameStatus.lastPlayerSelected.id) {
                                        setSelectedPlayer({name: player.fullName, id: player.id});
                                    }
                                }}>{player.fullName}</Player>
                            )
                        })
                    }
                </Lineup>
                <Lineup>
                    <h2>{lineups[1].home.homeTeam.name}</h2>
                    {
                        lineups[1].home.homeLineup.map(player => {
                            return(
                                <Player key={player.id}
                                    disabled={player.id === gameStatus.lastPlayerSelected.id ? true : false}
                                    value={player.id} 
                                    onClick={() => {
                                    if (player.id !== gameStatus.lastPlayerSelected.id) {
                                        setSelectedPlayer({name: player.fullName, id: player.id});
                                    }
                                }}>{player.fullName}</Player>
                            )
                        })
                    }
                </Lineup>
                {/* will need to add a second condition that would only allow selection if the game has ben reset */}
                {selectedPlayer !== null && 
                <Modal player={selectedPlayer} lineups={lineups}/>
                }
            </Wrapper>
            }
        </>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    min-height: 80%;
    margin: 40px;
    max-width: 1000px;
    border: groove 2px grey;
    background: transparent;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`

const Lineup = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    padding: 10px 0%;
    margin: 0 10px;
    font-family: var(--font-heading);
    h2 {
        display: block;
        font-size: 1.2em;
        width: 400px;
    }
`

const Player = styled.button`
        font-size: 12px;
        text-align: center;
        cursor: pointer;
        border: 2px groove;
        border-radius: 5px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        font-family: var(--font-body);
        color: var(--font-light);
        background: var(--color-header);
        padding: 1px;
        margin: 2px;
        width: 180px;
        max-height: 30px;
        transition:all ease-out 200ms;
        &:hover {
            opacity: .9;
            border: 2px double;
        }
        &:active, &:focus {
            background: lightcoral;
        }
        &:disabled {
            opacity: .5;
        }
`

const Message = styled.p`
    color: black;
    font-family: var(--font-body);
    font-size: 1.1em;
    background: lightgray;
    padding: 5px;
`


export default Game;