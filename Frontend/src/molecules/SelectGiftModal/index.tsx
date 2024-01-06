import { Modal, PrimaryButton, SecondaryButton } from "@/atoms";
import { Gift } from "@shared/entities/gift.entity";

import Styled from "./styles";
import { bebasNeue, inter } from "@/app/fonts";

interface ISelectGiftModalProps {
    isOpen: boolean;
    onClose: () => void;
    gift: Gift;
}

export function SelectGiftModal({ isOpen, onClose, gift }: ISelectGiftModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <Styled.Container className={inter.className}>
                <Styled.GiftContainer>
                    <h3 className={bebasNeue.className}>{gift.name}</h3> 
                    <img src={gift.image_src} alt={gift.name} />
                </Styled.GiftContainer>
                <span>Ao selecionar esse item, você remove ele da lista, pois você decidiu nos presentear com ele.</span>
                <span>Mas claro, sem pressão. Caso mude de ideia nos contate para tornarmos o item disponível novamente.</span>
                <Styled.ButtonsContainer>
                    <SecondaryButton href="" onClick={onClose}>
                        Cancelar
                    </SecondaryButton>
                    <PrimaryButton href="">
                        Confirmar
                    </PrimaryButton>
                </Styled.ButtonsContainer>
            </Styled.Container>
        </Modal>
    );
}