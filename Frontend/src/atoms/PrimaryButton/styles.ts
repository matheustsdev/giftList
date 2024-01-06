import styled from 'styled-components';
import Link from 'next/link';

export const Container = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    background-color: ${({ theme }) => theme.colors.black};
    padding: 0.75rem 0;

    border-radius: 1.5rem;

    font-size: 1rem;
    line-height: 1rem;
    color: ${({ theme }) => theme.colors.white};

    cursor: pointer;
`;

export default { Container };