import { useState, useEffect } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

import Button from "../components/Button";
import TextBox from "../components/TextBox";
import Title from "../components/Title";
import NavItem from "../components/NavItem";
import Input from "../components/Input";
import StartBackground from "../components/StartBackground";
import ContainerBox from "../components/ContainerBox";
import { Modal } from 'react-responsive-modal';
import LeaderboardScreen from "./LeaderboardScreen";


const StartScreen = ({users, nextStage, updateBackground, user, setUser}) => {

    const [open, setOpen] = useState(false);

    const onInputChange = (evt) => {
        const newUser = {nickname: "", score: 0};
        newUser["nickname"] = evt.target.value;
        setUser(newUser);
    }

    const onStartClick = () => {
        if (!user.nickname) {
            const newUser = {nickname: "Guest", score: 0, _id: 1};
            setUser(newUser);
        } else {
            const newUser = {nickname: user.nickname, score: 0, _id: 1};
            setUser(newUser);
        }
        nextStage("General");
    }

    return (
        <ContainerBox>
             <Modal open={open} onClose={() => setOpen(false)}>
                <LeaderboardScreen users={users} />
            </Modal> 
            <StartBackground updateBackground={updateBackground} />
            <Navigation>
                <NavItem><Link to="/about">About</Link></NavItem>
                <NavItem><NavButton onClick={() => setOpen(true)}>Leaderboard</NavButton></NavItem>
            </Navigation>
            <Title>Climate Quiz</Title>
            <TextBox>Test your knowledge on climate change!</TextBox>
            <StartMenu>
                <Input nickname={user.nickname} onChange={onInputChange}/>
                <Button onClick={onStartClick}>Start</Button>
            </StartMenu>
            
        </ContainerBox>
    )
}

const Navigation = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: right;
    padding: 1rem;

    & a {
    color: white;
    text-decoration: none;

    &:hover {
        font-weight: bold;
        cursor: pointer;
    }
    }
`

const NavButton = styled.button`
    background: transparent;
    color: white;
    border: 0;
    font-size: 1rem;
    margin-top: -1rem;

    &:hover {
        font-weight: bold;
        cursor: pointer;
    }
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