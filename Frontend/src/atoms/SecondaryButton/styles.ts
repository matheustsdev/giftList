import styled from 'styled-components';
import Link from 'next/link';

export const Container = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    background-color: transparent;
    padding: 0.75rem 0;
    
    border: 2px solid ${({ theme }) => theme.colors.brown};
    border-radius: 1.5rem;

    font-size: 1rem;
    line-height: 1rem;
    text-decoration: none;

    cursor: pointer;
`;

export default { Container };