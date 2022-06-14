import {useState, createContext } from 'react';

export const GameContext = createContext();

export const GameProvider = ({children}) => {
    const [gameStatus, setGameStatus] = useState({status: null,
        gameId: "",
        currentUser: "",
        currentUserHasWon: null,
        userSelected: false, 
        userGains: 0, 
        currentPlayerSelected: {id: null, name: null},
        lastPlayerSelected: {id: null, name: null},
        newGoal: false,
        latestGoal: null,
        goalsInGame: 0,
    });

    const [gameData, setGameData] = useState([]);
    // console.log(gameStatus)
    // console.log(status)
    // console.log(gameData)
    // fetch the endpoint for selected game's scoreboard
    const fetchScoreBoard = () => {
        fetch(`/api/score-board/${gameStatus.gameId}`)
        .then(res => res.json())
        .then (data => {
            // console.log(data)
            setGameData(data.data);
            if (gameStatus.status === null) setGameStatus({...gameStatus, status: data.status});
        })
        .catch((error) => {
            console.error('Error:', error);
            setGameStatus("error");
        });
        const interval = setInterval(() => {
            fetch(`/api/score-board/${gameStatus.gameId}`)
            .then(res => res.json())
            .then (data => {
                // console.log(data)
                setGameData(data.data);
            })
            .catch((error) => {
                console.error('Error:', error);
                setGameStatus("error");
            });
        }, 30000);
        return () => clearInterval(interval);
    }

    return(
        <GameContext.Provider value={{gameData, gameStatus, setGameStatus, fetchScoreBoard }}>
            {children}
        </GameContext.Provider>
    )
}