import styled from "styled-components";
import { useContext } from "react";
import { GameContext } from "../Context/GameContext";

const Gains = () => {
    const { gameStatus } = useContext(GameContext);
    return(
        <Wrapper>
            <p>{gameStatus.currentUser}</p>
            <h3>{gameStatus.userGains}$</h3>
        </Wrapper>
    )
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: var(--font-light);
    font-family: var(--font-heading);
    font-size: .9em;
    padding: 10px;
    h3 {
        margin: 2px 0;
    }
    p {
        margin: 2px 0;
    }
`;

export default Gains;