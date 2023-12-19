import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    padding-right: 0.5rem;
    overflow: hidden;

    svg {
        width: 1.25rem;
        cursor: pointer;
        color: ${props => props.theme.colors.primary};

        transition: transform 0.2s ease-in-out;

        &:hover {
           transform: scale(1.2);
        }
    }
`;

const Image = styled.img`
    object-fit: contain;
    height: 5rem;
    border-radius: 0.5rem 0 0 0.5rem;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 300px;
    height: 100%;
    padding: 0.25rem 0.5rem 0.25rem 0.25rem;
    overflow: hidden;

    h2 {
        font-size: 1.25rem;
        font-weight: 700;
    }

    span {
        font-size: 0.75rem;
    }
`;

export default { Container, Image, Content };