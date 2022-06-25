import React from "react";
import Main from "./Components/Main.js";
import { createGlobalStyle } from "styled-components";
import Main2 from "./Components/Main2.js";
import Footer from "./Components/Footer"

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  list-style:none;
  color:#373737;
}`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Main />
      <Main2/>
      <Footer/>
    </>
  );
}
