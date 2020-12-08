import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes/Routes";
import GlobalStyle from "./styles/globalStyles";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
