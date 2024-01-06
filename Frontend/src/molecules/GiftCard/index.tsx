import { useState } from "react";

import { Card, PrimaryButton, SecondaryButton } from "@/atoms";
import { utils } from "@/utils";
import { bebasNeue } from "@/app/fonts";
import { SelectGiftModal } from "../SelectGiftModal";
import { Gift } from "@shared/entities/gift.entity";

import Styled from "./styles";

interface IGiftCardProps {
    gift: Gift;
    onSelectGift: (gift: Gift) => void;
}

export function GiftCard({ gift, onSelectGift }: IGiftCardProps) {
    const { image_src, price, name } = gift;
    
    return (
        <Card>
            <Styled.Container>
                <h2 className={bebasNeue.className}>{name.toUpperCase()}</h2>
                <Styled.Image src={image_src} alt="placeholder" />
                <Styled.ButtonsContainer>
                    <Styled.SecondaryButtonContainer>
                        <SecondaryButton href="" onClick={() => onSelectGift(gift)}>
                            Escolher
                        </SecondaryButton>
                        <SecondaryButton href="/secondary">
                            Referência
                        </SecondaryButton>
                    </Styled.SecondaryButtonContainer>
                    <PrimaryButton href="/primary">
                        ENVIAR PIX - {utils.convertMoney(price)}
                    </PrimaryButton>
                </Styled.ButtonsContainer>
            </Styled.Container>
        </Card>
    )
}