import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    width: fit-content;
    height: fit-content;
    background-color: transparent;
    border: 3px solid ${theme.colors.brown};
    border-radius: 0.5rem;
`;

export default { Container };