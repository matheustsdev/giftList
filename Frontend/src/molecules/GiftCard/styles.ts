import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;

    padding: 1rem 0.5rem;
    width: 300px;

    h2 {
        font-size: 2rem;
        line-height: 1.25rem;
        font-weight: 700;
        padding-bottom: 1rem;

        color: ${({ theme }) => theme.colors.brown};
    }

    span {
        font-size: 0.75rem;
    }
`;

const Image = styled.img`
    object-fit: contain;
    width: 100%;
    border-radius: 0.5rem;
    
    width: 150px;
    height: 150px;
`;

const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    
    width: 100%;
    padding: 1.5rem 1rem 0 1rem;
`;

const SecondaryButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.25rem;

    width: 100%;
    max-width: 250px;
`;

export default { Container, Image, ButtonsContainer, SecondaryButtonContainer };