import styled from "styled-components";

const HomeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 100%;
    height: 100%;
    padding-bottom: 4rem;
`;

const Cover = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 75vh;
    padding: 10rem;
    margin-bottom: 10rem;

    background-image: url("/imgs/texture.png"), linear-gradient(180deg, #1D1D1D 0%, rgba(29, 29, 29, 0) 100%);
    -webkit-box-shadow: 0px 12px 12px 0px rgba(0,0,0,0.3);
    -moz-box-shadow: 0px 12px 12px 0px rgba(0,0,0,0.3);
    box-shadow: 0px 12px 12px 0px rgba(0,0,0,0.3);

    @media(max-width: 768px) {
        height: 50vh;

        padding: 4rem 2rem;
        margin-bottom: 5rem;
    }
`;

const TitleCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    padding: 1.5rem;
    background-color: ${({ theme }) => theme.colors.slate100};
`;

const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.slate950};

    width: 100%;
    height: 100%;

    border: 1px solid ${({ theme }) => theme.colors.slate400};
    background-color: ${({ theme }) => theme.colors.slate100};

    @media(max-width: 768px) {
        font-size: 1.75rem;
        text-align: center;
    }
`;

const Content = styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, auto));
    justify-items: center;
    gap: 1rem;

    width: 100%;
    height: 100%;
    padding: 0 1.5rem;
    
`;

export default { HomeContainer, Cover, TitleCard, Title, Content };