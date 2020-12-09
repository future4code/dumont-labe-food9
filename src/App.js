import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes/Routes";
import GlobalStyle from "./styles/globalStyles";
import { ProfileContextProvider } from "./context/ProfileContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <ProfileContextProvider>
          <Routes />
        </ProfileContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
