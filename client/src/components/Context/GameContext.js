import {useState, createContext, useEffect} from 'react';

export const GameContext = createContext();

export const GameProvider = ({children}) => {
    const [gameStatus, setGameStatus] = useState({status: null, gameId: "", currentUser: "", userSelected: false});
    const [gameData, setGameData] = useState([]);
    console.log(gameStatus)
    // console.log(status)
    // console.log(gameData)
    // fetch the endpoint for selected game's scoreboard
    const fetchScoreBoard = () => {
        fetch(`/api/score-board/${gameStatus.gameId}`)
        .then(res => res.json())
        .then (data => {
            // console.log(data)
            setGameData(data.data);
            setGameStatus({...gameStatus, status: data.status});
        })
        .catch((error) => {
            console.error('Error:', error);
            setGameStatus("error");
        });
    }


    return(
        <GameContext.Provider value={{gameData, gameStatus, setGameStatus, fetchScoreBoard}}>
            {children}
        </GameContext.Provider>
    )
}