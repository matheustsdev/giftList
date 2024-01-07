import { Modal, PrimaryButton, SecondaryButton } from "@/atoms";
import { api } from "@/services/api";
import { Gift } from "@shared/entities/gift.entity";
import { bebasNeue, inter } from "@/app/fonts";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Styled from "./styles";

interface ISelectGiftModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    gift: Gift;
}

export function SelectGiftModal({ isOpen, onClose, onConfirm, gift }: ISelectGiftModalProps) {
    const handleConfirm = async () => {
        try {
            const response = await api.patch(`/gifts/purchase/${gift.gift_id}`)
            
            if (response.data.status !== "SUCCESS") {
                toast.error(response.data.message);
                return;
            }
            
            toast.success(response.data.message);
            onConfirm();
        } catch (error: any) {
            toast.error(error.message);
        }
    }
    
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <Styled.Container className={inter.className}>
                <Styled.GiftContainer>
                    <h3 className={bebasNeue.className}>{gift.name}</h3> 
                    <Styled.Image src={`/imgs/products/${gift.image_src}`} alt={gift.name} />
                </Styled.GiftContainer>
                <span>Ao selecionar esse item você remove ele da lista, pois você decidiu nos presentear com ele.</span>
                <span>Mas claro, sem pressão! Caso mude de ideia nos contate para tornarmos o item disponível novamente.</span>
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