import { useState, useEffect } from "react";
import styled from 'styled-components';

import Button from "../components/Button";
import TextBox from "../components/TextBox";
import Title from "../components/Title";
import NavItem from "../components/NavItem";
import Input from "../components/Input";


const StartScreen = ({nextStage}) => {

    const [nickname, changeNickname] = useState("");

    const openLeaderboard = () => {
        return;
    }

    const onInputChange = (evt) => {
        changeNickname(evt.target.value);
    }

    const onStartClick = () => {
        nextStage("General");
    }

    return (
        <Container>
            <Navigation>
                <NavItem><a href="/about">About</a></NavItem>
                <NavItem onClick={openLeaderboard}>Leaderboard</NavItem>
            </Navigation>
            <StartContainer>
                <Title>Welcome</Title>
                <TextBox>This is example text</TextBox>
                <StartMenu>
                    <Input nickname={nickname} onChange={onInputChange}/>
                    <Button onClick={onStartClick}>Start</Button>
                </StartMenu>
            </StartContainer>
        </Container>
    )
}

const Container = styled.div`
`
const StartContainer = styled.div`
    margin-top: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.5);
    width: 85%;
    border-radius: 5px;
    color: white;
    width: 100%;
    padding-left: 0rem;
  `;

const Navigation = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: right;
    padding: 1rem;
    padding-right: 0rem;
`;
const StartMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
`;

export default StartScreen;