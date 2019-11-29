import React from "react";
import { ThemeProvider } from "emotion-theming";
import GlobalStyles from "./GlobalStyles";
import styled from "@emotion/styled";
import theme from "./themes/theme";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddMusicVote from "./components/pages/AddMusicVote";
import MusicVoteList from "./components/pages/MusicVoteList";
import Header from "./components/Header";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

function App() {
  return (
    <ThemeProvider theme={theme.default}>
      <GlobalStyles />
      <Router>
        <Container>
          <Header />
          <Switch>
            <Route exact path="/">
              <MusicVoteList />
            </Route>
            <Route path="/vote">
              <AddMusicVote />
            </Route>
          </Switch>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
