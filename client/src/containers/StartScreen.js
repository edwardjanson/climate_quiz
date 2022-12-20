import { useState, useEffect } from "react";
import styled from 'styled-components';

import Button from "../components/Button";
import TextBox from "../components/TextBox";
import Title from "../components/Title";
import NavItem from "../components/NavItem";
import Input from "../components/Input";
import StartBackground from "../components/StartBackground";
import ContainerBox from "../components/ContainerBox";
import { postUser } from "../UsersService";


const StartScreen = ({nextStage, updateBackground, addNewUser, user, setUser,}) => {

    const openLeaderboard = () => {
        return;
    }

    const onInputChange = (evt) => {
        const newUser = {nickname: "", score: 0};
        newUser["nickname"] = evt.target.value;
        setUser(newUser);
    }

    const onStartClick = () => {
        postUser(user)
        .then(data => {
            addNewUser(data);
            setUser(data);
            nextStage("General");
        });
    }

    return (
        <ContainerBox>
            <StartBackground updateBackground={updateBackground} />
            <Navigation>
                <NavItem><a href="/about">About</a></NavItem>
                <NavItem onClick={openLeaderboard}>Leaderboard</NavItem>
            </Navigation>
            <Title>Welcome to Climate Quiz</Title>
            <TextBox>Interesting facts that you may not know</TextBox>
            <StartMenu>
                <Input nickname={user.nickname} onChange={onInputChange}/>
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