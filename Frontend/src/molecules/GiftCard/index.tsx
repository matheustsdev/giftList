import { Card, PrimaryButton, SecondaryButton } from "@/atoms";
import { utils } from "@/utils";

import Styled from "./styles";

interface IGiftCardProps {
    name: string;
    description: string;
    imageSrc: string;
    value: number;
    onClick(): void;
}

export function GiftCard({ name, description, imageSrc, value, onClick }: IGiftCardProps) {
    return (
        <Card>
            <Styled.Container>
                <h2>{name.toUpperCase()}</h2>
                <Styled.Image src={imageSrc} alt="placeholder" />
                <Styled.ButtonsContainer>
                    <SecondaryButton href="/secondary">
                        Marcar como pago
                    </SecondaryButton>
                    <PrimaryButton href="/primary">
                        ENVIAR PIX - {utils.convertMoney(value)}
                    </PrimaryButton>
                </Styled.ButtonsContainer>
            </Styled.Container>
        </Card> 
    )
    
}