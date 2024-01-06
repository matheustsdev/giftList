import React, { ButtonHTMLAttributes, ReactNode } from 'react';

import Styled from './styles';

interface ISecondaryButtonProps extends ButtonHTMLAttributes<HTMLElement> {
    children: ReactNode;
}

export function SecondaryButton({ children, ...rest }: ISecondaryButtonProps) {
    return (
        <Styled.Container {...rest}>
            {children}
        </Styled.Container>
    );
};