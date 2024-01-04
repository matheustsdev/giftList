import React, { ReactNode } from 'react';
import { LinkProps } from 'next/link';

import Styled from './styles';

interface IPrimaryButtonProps extends LinkProps {
    children: ReactNode;
}

export function PrimaryButton({ children, ...rest }: IPrimaryButtonProps) {
    return (
        <Styled.Container {...rest}>
            {children}
        </Styled.Container>
    );
};