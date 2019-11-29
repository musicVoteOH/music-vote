import React from "react";
import { ThemeProvider } from "emotion-theming";
import GlobalStyles from "./GlobalStyles";
import theme from "./themes/theme";
import NavButton from "./components/NavButton";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddMusicVote from "./components/pages/AddMusicVote";
import MusicVoteList from "./components/pages/MusicVoteList";

function App() {
  return (
    <ThemeProvider theme={theme.default}>
      <GlobalStyles />
      <Router>
        <NavButton />
        <Switch>
          <Route exact path="/">
            <MusicVoteList />
          </Route>
          <Route path="/vote">
            <AddMusicVote />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
