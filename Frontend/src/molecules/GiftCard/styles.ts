import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

const Image = styled.img`
    object-fit: contain;
    height: 10rem;
    border-radius: 0.5rem 0 0 0.5rem;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 300px;
    height: 100%;
    padding: 0.25rem;

    svg {
        width: 1.25rem;
        cursor: pointer;
    }
`;

const ItemInfo = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: column;
    
    height: 100%;
`;

export default { Container, Image, Content, ItemInfo };