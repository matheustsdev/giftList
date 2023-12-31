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

        color: ${({ theme }) => theme.colors.black}
    }
    
    footer {
        display: flex;
        align-items: center;
        justify-content: center;
        
        width: 100%;
    }

    a {
        color: ${({ theme }) => theme.colors.black};
        text-decoration: none;
    }

    .ReactModal__Content {
            padding: 0;
            background-color: ${props => props.theme.colors.black};
        }
        
    @media (max-width: 768px) {
        html {
            font-size: 75%;
        }
    }
`;

export default GlobalStyle;