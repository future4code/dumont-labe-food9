import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes/Routes";
import GlobalStyle from "./styles/globalStyles";
import { ProfileContextProvider } from "./context/ProfileContext";
import { RestaurantsContextProvider } from "./context/RestaurantsContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <RestaurantsContextProvider>
          <ProfileContextProvider>
            <Routes />
          </ProfileContextProvider>
        </RestaurantsContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
