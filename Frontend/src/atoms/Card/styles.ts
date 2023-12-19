import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    width: fit-content;
    background-color: ${theme.colors.slate900};
    border-radius: 0.5rem;

    color: ${theme.colors.slate300};
`;

export default { Container };