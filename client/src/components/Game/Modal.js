import styled from 'styled-components';
import { Route, Redirect } from "react-router-dom";
import { useContext } from 'react';
import { GameContext } from '../Context/GameContext';

const Modal = ({player, close, setClose, lineups}) => {
    const {gameStatus, setGameStatus} = useContext(GameContext);

    // make a random pick for the computer
    // const cpuRandomPick = () => {
    // }

    const handleClick = () => {
            setGameStatus({...gameStatus, currentPlayerSelected: player, lastPlayerSelected: player});
    }

    return(
        <>
        { gameStatus.currentPlayerSelected.id !== null &&
        <Route exact path="/game/:gameId">
            <Redirect to={`/bet/${gameStatus.currentPlayerSelected.id}/`} />
        </Route>
        }
        {!close && 
        <Wrapper>
            <p>Confirm your selection</p>
            <Player onClick={handleClick}>{player.name}</Player>
            <CloseButton onClick={() => setClose(true)}>X</CloseButton>
        </Wrapper>}
        </>
    )
}

const Wrapper = styled.div`
    position: absolute;
    left: 25%;
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 25%;
    width: 50%;
    background: var(--color-header);
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    p {
        text-align: center;
        font-size: 1.2em;
        font-family: var(--font-heading);
        color: var(--font-light);
        padding: 20px;
    }
`

const Player = styled.button`
        align-self: center;
        font-size: 12px;
        text-align: center;
        cursor: pointer;
        border: 2px groove;
        border-radius: 5px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        font-family: var(--font-body);
        color: var(--font-light);
        background: lightcoral;
        padding: 1px;
        margin: 20px 10px 0;
        width: 180px;
        max-height: 30px;
        transition:all ease-out 200ms;
        &:hover {
            opacity: .9;
            border: 2px double;
        }
`

const CloseButton = styled(Player)`
    margin: 4px;
    position: absolute;
    right: 0;
    top: 0;
    height: 25px;
    width: 25px;
`

export default Modal;