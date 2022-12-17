import { useState, useEffect } from "react";
import Button from "../components/Button";
import TextBox from "../components/TextBox";
import Title from "../components/Title";
import Navigation from "../components/Navigation";
import Input from "../components/Input";


const StartScreen = () => {
    return (
        <>
            <Navigation/>
            <Title/>
            <TextBox/>
            <Input/>
            <Button/>
        </>
    )
}

export default StartScreen;