import React from "react";
import { ThemeProvider } from "emotion-theming";
import GlobalStyles from "./GlobalStyles";
import theme from "./themes/theme";

function App() {
  return (
    <ThemeProvider theme={theme.default}>
      <GlobalStyles />
      <div>Hello</div>
    </ThemeProvider>
  );
}

export default App;
