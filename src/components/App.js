import "../App.css";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "components/pages/Login";
import Home from "components/pages/Home";
const GlobalStyle = createGlobalStyle`
body{
  background:white;
  min-height:100vh;
  margin:0;
  color:black;
  font-family:'Kaushan Script';
}
`;
const theme = {
  primaryColor: "#8e44ad",
  secondaryColor: "#c0392b",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
