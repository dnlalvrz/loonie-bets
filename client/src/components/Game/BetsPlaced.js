import styled from "styled-components";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GameContext } from "../Context/GameContext";

const BetsPlaced = () => {

    // useEffect(() => {

    // })

    const { id } = useParams();
    return(
        <Wrapper>
            <h1>{id}</h1>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    position: absolute;
    left: 25%;
    align-self: center;
    display: flex;
    flex-direction: column;
    height: 50%;
    width: 50%;
    background: var(--color-header);
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    h1 {
        font-family: var(--font-heading);
    }
`

export default BetsPlaced;