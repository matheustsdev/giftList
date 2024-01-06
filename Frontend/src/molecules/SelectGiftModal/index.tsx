import { Modal, PrimaryButton, SecondaryButton } from "@/atoms";
import { api } from "@/services/api";
import { Gift } from "@shared/entities/gift.entity";

import Styled from "./styles";
import { bebasNeue, inter } from "@/app/fonts";

interface ISelectGiftModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    gift: Gift;
}

export function SelectGiftModal({ isOpen, onClose, onConfirm, gift }: ISelectGiftModalProps) {
    const handleConfirm = async () => {
        try {
            await api.patch(`/gifts/purchase/${gift.gift_id}`)
            onConfirm();
        } catch (error) {
            console.log(error);
        }
    }
    
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
                    <SecondaryButton onClick={onClose}>
                        Cancelar
                    </SecondaryButton>
                    <PrimaryButton onClick={handleConfirm}>
                        Confirmar
                    </PrimaryButton>
                </Styled.ButtonsContainer>
            </Styled.Container>
        </Modal>
    );
}