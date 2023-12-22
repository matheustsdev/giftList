import styled from "styled-components";

const Container = styled.div`
    width: 800px;
    height: 400px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    h3 {
        width: 100%;
        padding: 0.5rem 1rem;
        background-color: ${props => props.theme.colors.slate900};
        
        font-size: 2rem;
        text-align: start;
        color: ${props => props.theme.colors.slate200};
    }

    @media (max-width: 800px) {
        width: calc(100vw - 2rem);
        height: 75vh;
    }
`;

const Description = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

      img {
        width: 30%;
        object-fit: cover;
        margin: 1rem;

        border-radius: 0.25rem;
    }
`;

const InfoContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    gap: 2rem;

    color: ${props => props.theme.colors.slate300};

    width: 100%;
    height: 100%;
    padding: 1rem 0;
    overflow: auto;
`;


const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    padding: 1rem;

    div {
        display: flex;
        align-items: center;
        gap: 1.5rem;

        button, a {
            border: none;
            background-color: transparent;
            color: ${props => props.theme.colors.slate200};
            font-size: 1rem;
            font-weight: 700;
    
            cursor: pointer;
    
            transition: color 0.2s ease-in-out;
    
            &:hover {
                color: ${props => props.theme.colors.slate500};
            }
        }
    }

    p {
        border: none;
        background-color: transparent;
        color: ${props => props.theme.colors.slate200};
        font-size: 1rem;
        font-weight: 700;
    }
`;

export default { Container, Description, InfoContainer, Footer };