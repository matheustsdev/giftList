import React, { ReactNode, ButtonHTMLAttributes } from 'react';

import Styled from './styles';

interface IPrimaryButtonProps extends ButtonHTMLAttributes<HTMLElement> {
    children: ReactNode;
}

export function PrimaryButton({ children, ...rest }: IPrimaryButtonProps) {
    return (
        <Styled.Container {...rest}>
            {children}
        </Styled.Container>
    );
};