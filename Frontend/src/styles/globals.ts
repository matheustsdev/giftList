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
        padding: 0;
        overflow-x: hidden;

        color: ${({ theme }) => theme.colors.slate600}
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    .ReactModal__Content {
            padding: 0;
            background-color: ${props => props.theme.colors.slate800};
        }
`;

export default GlobalStyle;