import React from "react";
import { ThemeProvider } from "emotion-theming";
import GlobalStyles from "./GlobalStyles";
import theme from "./themes/theme";
import NavButton from "./components/NavButton";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme.default}>
      <GlobalStyles />
      <Router>
        <NavButton />
        <div>Hello</div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
