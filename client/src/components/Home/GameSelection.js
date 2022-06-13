import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { GameContext } from "../Context/GameContext";

const GameSelection = () => {
    const { gameStatus, setGameStatus, fetchScoreBoard } = useContext(GameContext);
    const [status, setStatus] = useState(null);
    const [schedule, setSchedule] = useState(null);
    // console.log(schedule);

    // fetch the endpoint for today's schedule
    useEffect(() => {
        fetch('/api/schedule')
        .then(res => res.json())
        .then (data => {
            // console.log(data)
            if (data.data.dates.length > 0) setSchedule(data.data.dates[0].games);
            setStatus("loaded");
        })
        .catch((error) => {
            console.error('Error:', error);
            setStatus("error");
        });
    }, []);

    // submit selection and user
    const handleSubmit = (e) => {
        e.preventDefault();

        setGameStatus({
            ...gameStatus,
            userSelected: true,
        })
        fetchScoreBoard();
    }

    return(
        <>
        { gameStatus.userSelected === true &&
            <Route exact path="/">
                <Redirect to={`/game/${gameStatus.gameId}/`} />
            </Route>
        }
        {status === "loaded" && 
        <Wrapper>
            <form onSubmit={handleSubmit}>
            <label>
                <input required autoComplete="off" value={gameStatus.currentUser} type="text" name="currentUser" placeholder="name" onChange={(e) => setGameStatus({...gameStatus, currentUser: e.target.value})}></input>
                <select required value={gameStatus.gameId} onChange={(e) => setGameStatus({...gameStatus, gameId: e.target.value})}>
                    <option>Choose a game</option>
                    <option value="test1234">Test Mode</option>
                    {schedule !== null &&
                    <>
                    {schedule.map(item => {
                        return(
                            <option key={item.gamePk} value={item.gamePk}>{item.teams.away.team.name} vs {item.teams.home.team.name}</option>
                        )
                    })}
                    </>
                    }
                </select>
                <Button>ENTER</Button>
                </label>
            </form>
        </Wrapper>}
        </>
    )
};

const Wrapper = styled.div`
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60%;
    width: 40%;
    background: white;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    select {
        /* align-self: center; */
        display: block;
    }

`;

const Button = styled.button`
        text-align: center;
        cursor: pointer;
        border: 4px groove;
        border-radius: 5px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        font-family: var(--font-body);
        color: var(--font-light);
        background: var(--color-header);
        padding: 10px;
        margin: 10px;
        width: 284px;
        transition:all ease-out 200ms;
        &:hover {
            opacity: .9;
            border: 2px double;
        }
`;



export default GameSelection;