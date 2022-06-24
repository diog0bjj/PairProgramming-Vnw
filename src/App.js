import React from "react";
import Main from "./Components/Main.js";
import { createGlobalStyle } from "styled-components";

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
    </>
  );
}
