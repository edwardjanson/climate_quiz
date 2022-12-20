import { useState, useEffect } from "react";
import styled from 'styled-components';

import Button from "../components/Button";
import TextBox from "../components/TextBox";
import Title from "../components/Title";
import NavItem from "../components/NavItem";
import Input from "../components/Input";
import StartBackground from "../components/StartBackground";


const StartScreen = ({nextStage, updateBackground}) => {

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
        <div>
            <StartBackground updateBackground={updateBackground} />
            <Navigation>
                <NavItem><a href="/about">About</a></NavItem>
                <NavItem onClick={openLeaderboard}>Leaderboard</NavItem>
            </Navigation>
            <Container>
                <StartContainer>
                    <Title>Welcome to Climate Quiz</Title>
                    <TextBox>Interesting facts that you may not know</TextBox>
                    <StartMenu>
                        <Input nickname={nickname} onChange={onInputChange}/>
                        <Button onClick={onStartClick}>Start</Button>
                    </StartMenu>
                </StartContainer>
            </Container>
        </div>
    )
}

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
`;

const StartContainer = styled.div`
  
    background: rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    width: 75%;
  `;

const Navigation = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: right;
    padding: 1rem;
`;
const StartMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
`;

export default StartScreen;