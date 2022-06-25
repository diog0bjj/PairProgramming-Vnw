import React,{useState} from "react";
import styled from "styled-components"
import { createGlobalStyle } from "styled-components";

import InstaIcon from "../Assets/InstaElipse.svg"
import TwitterIcon from "../Assets/TwitterElipse.svg"
import FaceIcon from "../Assets/Facebook.svg"
import PintIcon from "../Assets/PinterestEllipse.svg"



const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}`

const FooterSection = styled.section`
background-color: #F2F4F1;
height: 40vh;
padding: 2%;
display: flex;
align-items: center;
justify-content: space-between;
@media(max-width: 500px) {
    display: flex;
    justify-content: center;
    flex-direction: column-reverse;
   }
`
const SocialMediaBox = styled.div`
width: 20vw;
display: flex;
justify-content: space-around;
@media(max-width: 500px) {
    width: 40vw;
   }
`
const SocialIcon = styled.img`
width: 4vw;
@media(max-width: 500px) {
    width: 8vw;
   }
`
const Pages = styled.nav`
width: 40vw;
@media(max-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: center;
}
`
const PagesList = styled.ul`
width: 100%;
font-size: 2vw;
display: flex;
align-items: center;
justify-content: space-around;
@media(max-width: 500px) {
    font-size: 5vw;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
   }
`
const ListItem = styled.li`
`

const CopyrightSection = styled.section`
width: 100%;
height: 10vh;
background-color: #446061;
display: flex;
align-items: center;
justify-content: space-around;
@media(max-width: 500px) {
    height: 6vh;
    padding: 10%;
   }
`
const CopyrightText = styled.p`
color: white;
`

const SocialAndRoutes = () =>{
    return(
        <FooterSection>
            <SocialMediaBox>
                <SocialIcon src={InstaIcon} alt="Ícone do Instagram"/>
                <SocialIcon src={TwitterIcon} alt="Ícone do Twitter"/>
                <SocialIcon src={FaceIcon} alt="Ícone do Facebook"/>
                <SocialIcon src={PintIcon} alt="Ícone do Pinterest"/>
            </SocialMediaBox>
            <Pages>
                <PagesList>
                    <ListItem>ABOUT</ListItem>
                    <ListItem>RECIPES</ListItem>
                    <ListItem>SUBSCRIBE</ListItem>
                </PagesList>
            </Pages>
        </FooterSection>
    )
}

const Copyright = () => {
    return(
        <CopyrightSection>
            <CopyrightText>
            Layout produzido por Vai na Web para fins exclusivamente educacionais. Referência: https://br.pinterest.com/pin/AVuDlMAl4GsQiM6nijH9YbG9bsNKpompSEOEHzig6GJ58AnUtMkSy7k/
            </CopyrightText>
        </CopyrightSection>
    )
}

export default function Footer(){
    return(
        <>
        <SocialAndRoutes/>
        <Copyright/>
        </>
    )
}