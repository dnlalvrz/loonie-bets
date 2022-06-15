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
                <p>Loonie Bets</p>
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
    min-height: 110px;
    max-height: 130px;
    padding: 18px;
    border: 5px groove gray;
`;

const Logo = styled(Link)`
    color: var(--font-light);
    font-family: var(--font-heading);
    font-size: .9em;
    text-decoration: none;
    padding: 10px;
`;


export default Header;
