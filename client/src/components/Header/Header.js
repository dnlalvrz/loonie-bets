import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";

// import components
import Gains from "./Gains";
import ScoreBoard from "./ScoreBoard";

const Header = () => {

    return(
        <Wrapper>
            <Logo to="/">
                <p>Looney Bets</p>
            </Logo>
            <ScoreBoard />
            <Gains />
        </Wrapper>
    )
}

const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--color-header);
    height: 110px;
    padding: 18px;
    border: 5px groove gray;
`;

const Logo = styled(Link)`
    color: var(--font-light);
    font-family: var(--font-heading);
    font-size: 1.2em;
    text-decoration: none;
`;


export default Header;