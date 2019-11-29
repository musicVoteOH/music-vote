import React from "react";
import { Global, css } from "@emotion/core";

function GlobalStyles() {
  return (
    <Global
      styles={theme => css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          height: 100vh;
          width: 100vw;
          font-family: "Montserrat", sans-serif;
          background: ${theme.background};
          color: ${theme.text};
        }
      `}
    />
  );
}

export default GlobalStyles;
