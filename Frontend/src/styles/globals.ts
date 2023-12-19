import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html,
    body {
        max-width: 100vw;
        width: 100vw;
        height: 100vh;
        overflow-x: hidden;

        background: #020617;
        font-family: "Inter", sans-serif;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;

export default GlobalStyle;