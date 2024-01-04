import React, { ReactNode } from 'react';
import { LinkProps } from 'next/link';

import Styled from './styles';

interface ISecondaryButtonProps extends LinkProps {
    children: ReactNode;
    href: string
}

export function SecondaryButton({ children, ...rest }: ISecondaryButtonProps) {
    return (
        <Styled.Container {...rest}>
            {children}
        </Styled.Container>
    );
};