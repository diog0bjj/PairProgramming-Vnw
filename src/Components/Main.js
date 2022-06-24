import React from "react";
import Header from "./Header.js";
import styled from 'styled-components';
import backgroundTitle from '../Assests/BackgroundTitle.png';
import RedVelvetCake from '../Assests/Cake.png';
import NeapolitanPizza from '../Assests/Pizza.png';
import PeanutButter from '../Assests/Peanut.png';

const TitleAndMenu = styled.section`
background-image:url('${backgroundTitle}');
background-size:cover;
background-position:center bottom;
height:125vh; 
margin:1.3vw;
position:relative`;

const PrincipalTitle = styled.div`
position:absolute;
top:50%;
width:100%;
display:flex;
justify-content:center;
font-size:5vw;
letter-spacing:1vw;`;

const LatestRecipes = styled.section`
background-color:#F2F4F1;
width:100%;
padding:12vw 2vw 6vw 2vw;
display:flex;
align-items:center;
flex-direction:column;`;

const RecipesPartTitle = styled.div`
margin-bottom:4rem;
width:16rem;
display:flex;
flex-direction:column;
align-items:center;`;

const Recipes = styled.div`
display:flex;
width:96vw;
justify-content:space-evenly;
flex-wrap:wrap;`;

const Food = styled.div`
width:18rem;
display:flex;
flex-direction:column;`;

const FoodImg = styled.img`
width:18rem;
height:14rem;`;

const RecipeName = styled.div`
background-color:#fff;
display:flex;
width:18rem;
justify-content:center;
align-items:center;
flex-direction:column;
height:14rem;
box-shadow: 0px 5px 10px grey;
margin-bottom:1rem;`

const Decoration = styled.div`
width:4.5rem;
height:0.2rem;
background-color:#373737;
margin-bottom:1rem;`;

export default function Main() {
  return (
    <>
      <TitleAndMenu>
        <Header/>
        <PrincipalTitle>
          <h1>RECIPES</h1>
        </PrincipalTitle>
      </TitleAndMenu>
      <LatestRecipes>
        <RecipesPartTitle>
          <h2 style={{marginBottom:'1rem'}}>LATEST RECIPES</h2>
          <Decoration></Decoration>
        </RecipesPartTitle>
        <Recipes>
          <Food>
            <FoodImg src={RedVelvetCake}/>
            <RecipeName>
            <Decoration></Decoration>
              <h3>Red Velvet Cake</h3>
            </RecipeName>
          </Food>
          <Food>
            <FoodImg src={NeapolitanPizza} />
            <RecipeName>
            <Decoration></Decoration>
              <h3>Margherita Pizza</h3>
            </RecipeName>
          </Food>
          <Food>
            <FoodImg src={PeanutButter} />
            <RecipeName>
            <Decoration></Decoration>
              <h3>Peanut Smoothie</h3>
            </RecipeName>
          </Food>
        </Recipes>
      </LatestRecipes>
    </>
  );
}
