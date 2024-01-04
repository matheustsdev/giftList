import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;

    padding: 1rem 0.5rem;
    width: 300px;

    svg {
        width: 1.25rem;
        cursor: pointer;
        color: ${props => props.theme.colors.primary};

        transition: transform 0.2s ease-in-out;

        &:hover {
           transform: scale(1.2);
        }
    }

    h2 {
        font-size: 1.25rem;
        line-height: 1.25rem;
        font-weight: 700;
        padding-bottom: 1rem;

        color: ${({ theme }) => theme.colors.green800}
    }

    span {
        font-size: 0.75rem;
    }
`;

const Image = styled.img`
    object-fit: contain;
    width: 100%;
    border-radius: 0.5rem 0 0 0.5rem;
`;

const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    
    width: 100%;
    padding: 1.5rem 1rem 0 1rem;
`;

export default { Container, Image, ButtonsContainer };