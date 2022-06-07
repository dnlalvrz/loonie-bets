import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Game = () => {
    const { gameId } = useParams();
    console.log(gameId)
    const [status, setStatus] = useState(null);
    const [lineups, setLineups] = useState({away: [], home: []});

    // fetch the endpoint for selected game's scoreboard
    // useEffect(() => {
    //     fetch(`/api/lineups/${gameId}`)
    //     .then(res => res.json())
    //     .then (data => {
    //         // console.log(data)
    //         setLineups(data.data);
    //         setStatus("loaded");
    //     })
    //     .catch((error) => {
    //         console.error('Error:', error);
    //         setStatus("error");
    //     });
    // })

    return(
        <>
            <Wrapper>
                <Lineup>
                    <Player>Name of Player</Player>
                    <Player>Name of Player 2</Player>
                    <Player>Name of Player</Player>
                    <Player>Name of Player 2</Player>
                    <Player>Name of Player</Player>
                    <Player>Name of Player 2</Player>
                    <Player>Name of Player</Player>
                    <Player>Name of Player 2</Player>
                    <Player>Name of Player</Player>
                    <Player>Name of Player 2222</Player>
                    <Player>Name of Player</Player>
                    <Player>Name of Player 2</Player>
                    <Player>Name of Player</Player>
                    <Player>Name of Player 2</Player>
                    <Player>Name of Player</Player>
                    <Player>Name of Player 2</Player>
                    <Player>Name of Player</Player>
                    <Player>Name of Player 2</Player>
                </Lineup>
                <Lineup>
                    <Player>Name of Player</Player>
                    <Player>Name of Player 2</Player>
                    <Player>Name of Player</Player>
                    <Player>Name of Player 2</Player>
                    <Player>Name of Player</Player>
                    <Player>Name of Player 2</Player>
                    <Player>Name of Player</Player>
                    <Player>Name of Player 2</Player>
                    <Player>Name of Player</Player>
                    <Player>Name of Player 2</Player>
                    <Player>Name of Player</Player>
                    <Player>Name of Player 2</Player>
                    <Player>Name of Player</Player>
                    <Player>Name of Player 2</Player>
                    <Player>Name of Player</Player>
                    <Player>Name of Player 2</Player>
                    <Player>Name of Player</Player>
                    <Player>Name of Player 2</Player>
                </Lineup>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    display: flex;
    min-height: 80%;
    width: 95%;
    border: groove 5px grey;
    background: transparent;
`

const Lineup = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    padding: 10px 0%;
    font-family: var(--font-heading);
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
`

const Footer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: 10%;
    background: transparent;
    border: none;
    font-family: var(--font-body);
`

export default Game;