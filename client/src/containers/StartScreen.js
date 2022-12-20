import { useState, useEffect } from "react";
import styled from 'styled-components';

import Button from "../components/Button";
import TextBox from "../components/TextBox";
import Title from "../components/Title";
import NavItem from "../components/NavItem";
import Input from "../components/Input";
import StartBackground from "../components/StartBackground";
import ContainerBox from "../components/ContainerBox";
import { Modal } from 'react-responsive-modal';
import LeaderboardScreen from "./LeaderboardScreen";


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
    
    const [open, setOpen] = useState(false);
    

    return (
        <ContainerBox>
             <Modal open={open} onClose={() => setOpen(false)}>
                <LeaderboardScreen>
                </LeaderboardScreen>
            </Modal> 
            <StartBackground updateBackground={updateBackground} />
            <Navigation>
                <NavItem><a href="/about">About</a></NavItem>
                <NavItem><button onClick={() => setOpen(true)}>Leaderboard</button></NavItem>
            </Navigation>
            <Title>Welcome to Climate Quiz</Title>
            <TextBox>Interesting facts that you may not know</TextBox>
            <StartMenu>
                <Input nickname={nickname} onChange={onInputChange}/>
                <Button onClick={onStartClick}>Start</Button>
            </StartMenu>
            
        </ContainerBox>
    )
}

const Navigation = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: right;
    padding: 1rem;
`

const StartMenu = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;

    button {
        width: 10rem;
    }
`

export default StartScreen;