import React,{useState} from "react";
import styled from "styled-components"
import { createGlobalStyle } from "styled-components";

import SpoonSalt from "../Assets/SpoonSaltDesk.png"

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}`

const ContainerSectionSpoon = styled.section`
width: 100%;
height: 70vh;
display: flex;
justify-content: center;
align-items: center;
@media(max-width: 500px) {
    display:flex;
    flex-direction: column;
   }
`

const SpoonImg = styled.img`
height: 70vh;
width: 50%;
object-position: center;
@media(max-width: 500px) {
    width: 100%;
   }
`

const AboutBox = styled.div`
width: 50vw;
height: 100%;
padding: 10%;
display: flex;
align-items:  center;
justify-content: space-evenly;
flex-direction: column;
@media(max-width: 500px) {
    padding: 0;
    width: 100%;
    height: 50vh;
   }
`

const AboutTitle = styled.h1`
font-size: 2vw;
@media(max-width: 500px) {
    font-size: 8vw;
   }
`

const Trace = styled.div`
height: 0.5vh;
width: 4vw;
background-color: #373737;
border-radius: 20px;
@media(max-width: 500px) {
    width: 12vw;
   }
`

const AboutText = styled.p`
font-size: 1vw;
@media(max-width: 500px) {
    font-size: 5vw;
   }
`

const ContainerSectionSubscribe = styled.section`
background-color: #DFE4DE;
width: 100%;
height: 70vh;
padding: 10%;
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-between;
@media(max-width: 500px) {
    height: 40vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    
   }
`

const SubscribeTitle = styled.h2`
font-size: 2vw;
@media(max-width: 500px) {
    font-size: 7vw;
    margin-bottom: 0.5vh;
   }
`

const SignUpTitle = styled.h2`
font-size: 2vw;
font-weight: lighter;
@media(max-width: 500px) {
    font-size: 7vw;
    margin-bottom: 0.5vh;
   }
`

const SubscribeInput = styled.input`
width: 30vw;
height: 10vh;
border: none;
margin-bottom: 0.5vh;
padding-left: 1vw;
font-size: 1vw;
@media(max-width: 500px) {
    font-size: 3vw;
    height: 4vh;
    width: 80vw;
   }
`

const SubmitBttn = styled.button`
border: 2px solid black;
width: 8vw;
height: 5vh;
background-color: #DFE4DE;
font-size: 1vw;
@media(max-width: 500px) {
    font-size: 3vw;
    height: 4vh;
    width: 80vw;
   }
`

const SpoonSection = () => {
    return(
        <ContainerSectionSpoon>
        <SpoonImg src={SpoonSalt} alt="Colher de Sal Grosso"/>
        <AboutBox>
            <AboutTitle>
                ABOUT
            </AboutTitle>
            <Trace></Trace>
            <AboutText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur lorem, quis tempor lorem justo quis nisi. Nam interdum, nisi nec mollis sagittis, enim risus euismod nisi, quis rutrum quam augue id mauris. Pellentesque mattis hendrerit semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vestibulum nisl ante, et ultricies sapien facilisis aliquam.
            </AboutText>
        </AboutBox>
    </ContainerSectionSpoon>
    )
}

const SubscribeSection = () => {
    return(
        <ContainerSectionSubscribe>
            <SubscribeTitle>SUBSCRIBE</SubscribeTitle>
            <SignUpTitle>Sing up for newsletter</SignUpTitle>
            <SubscribeInput placeholder="Your Email"></SubscribeInput>
            <SubmitBttn>SUBMIT</SubmitBttn>
        </ContainerSectionSubscribe>
    )
}

export default function Main2(){
    return(
        <>
        <SpoonSection/>
        <SubscribeSection/>
        </>
    )
}