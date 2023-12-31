import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;

    padding: 1rem 0.5rem;
    width: 900px;

    img {
        font-size: 2rem;
        line-height: 1.25rem;
        font-weight: 700;
        padding-bottom: 1rem;
    }

    span {
        font-size: 1rem;
        text-align: center;
    }
    
    @media(max-width: 768px) {
        width: 90vw;
    }
`;

const GiftContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;

    width: 100%;
    padding: 1rem 0.5rem;
    
    h3 {
        font-size: 1.5rem;
        color: ${({ theme }) => theme.colors.brown};
    }
`;

const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    
    width: 100%;
    padding: 1.5rem 1rem 0 1rem;
`;

const Image = styled.img`
    object-fit: contain;
    width: 100%;
    border-radius: 0.5rem;
    
    width: 150px;
    height: 150px;
`;

export default { Container, GiftContainer, ButtonsContainer, Image };