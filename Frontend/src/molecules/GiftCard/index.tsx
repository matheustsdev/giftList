import { useState } from "react";
import { useRouter } from "next/navigation";

import { Card, PrimaryButton, SecondaryButton } from "@/atoms";
import { utils } from "@/utils";
import { bebasNeue } from "@/app/fonts";
import { IGift } from "@shared/interfaces/IGift";

import Styled from "./styles";

interface IGiftCardProps {
    gift: IGift;
    onSelectGift: (gift: IGift) => void;
    onPaymentClick: (gift: IGift) => void;
    onReferenceClick: (gift: IGift) => void;
}

export function GiftCard({ gift, onSelectGift, onPaymentClick, onReferenceClick }: IGiftCardProps) {
    const { image_src, price, name, reference_url } = gift;
    const router = useRouter();
    
    return (
        <Card>
            <Styled.Container>
                <h2 className={bebasNeue.className}>{name.toUpperCase()}</h2>
                <Styled.Image src={`/imgs/products/${image_src}`} alt={name} />
                <Styled.ButtonsContainer>   
                    <Styled.SecondaryButtonContainer>
                        <SecondaryButton onClick={() => onSelectGift(gift)}>
                            Escolher
                        </SecondaryButton>
                        <SecondaryButton onClick={() => onReferenceClick(gift)} disabled={!reference_url}>
                            Referência
                        </SecondaryButton>
                    </Styled.SecondaryButtonContainer>
                    <PrimaryButton onClick={() => onPaymentClick(gift)}>
                        ENVIAR PIX - {utils.convertMoney(price)}
                    </PrimaryButton>
                </Styled.ButtonsContainer>
            </Styled.Container>
        </Card>
    )
}