import React,{useState} from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 4rem;
  align-items: center;
  font-size: 20px;
  text-transform: uppercase;
  z-index:2;`;

const Logo = styled.h2`
padding:1.2rem;

@media(max-width: 500px) {
    display:none;
   }`;

const ListMenu = styled.ul`
  display: flex;
  width: 30rem;
  justify-content: space-evenly;
  height: 5rem;
  align-items: center;
  
  @media(max-width: 500px) {
   display:none;
  }`;

const SubscribeItem = styled.li`
  border: solid black;
  padding: 0.2rem;`;

const HiddenMenu = styled.button`
display:none;

@media(max-width: 500px) {
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    height:1.5rem;
    width:2rem;
    border:none;
    background:none;
   }`

const HiddenList = styled.ul`
display:none;

@media(max-width: 500px) {
    display:block;
    z-index:100;
    position:fixed;
    right:1%;
   }`

const HiddenItem = styled.li`
border:solid #373737;
border-width:thin;

&:hover{
    background-color:#00000029;
}`

const IconButton = styled.div`
height:0.8vw;
width:1.5rem;
background-color:#373737;
margin-top:0.5vw`


export default function Header() {

    const [listMenu, setListMenu] = useState(false)

    const NavMenuCompacted =()=>{
        return(
            <>
                <HiddenList>
                  <HiddenItem>About</HiddenItem>
                  <HiddenItem>Recipes</HiddenItem>
                  <HiddenItem>Subscribe</HiddenItem>
                </HiddenList>
            </>
        )
    }

  return (
    <>
      <Container>
        <div>
            <Logo>RC</Logo>
        </div>
        <div>
          <nav>
            <ListMenu>
              <li>About</li>
              <li>Recipes</li>
              <SubscribeItem>Subscribe</SubscribeItem>
            </ListMenu>
          </nav>
          <div>
          <HiddenMenu onClick={()=>{setListMenu(!listMenu)}}>
            <IconButton></IconButton>
            <IconButton></IconButton>
          </HiddenMenu>
          </div>
          {listMenu && NavMenuCompacted()}
        </div>
      </Container>
    </>
  );
}
