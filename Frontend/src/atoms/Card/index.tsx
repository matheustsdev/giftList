import { ReactNode } from "react";
import Styled from "./styles";

interface ICardProps {
    children:ReactNode;
}

export function Card({ children }: ICardProps) {

    return (
        <Styled.Container>
            { children }
        </Styled.Container>
    );
}