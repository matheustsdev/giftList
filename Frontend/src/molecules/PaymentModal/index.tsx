import { Modal, PrimaryButton } from "@/atoms";
import { inter } from "@/app/fonts";
import { useRouter } from "next/navigation";

import Styled from "./styles"

interface ISelectGiftModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function PaymenModal({ isOpen, onClose }: ISelectGiftModalProps) {
    const router = useRouter();
    
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <Styled.Container className={inter.className}>
                <span>Não esqueça de &ldquo;Escolher&ldquo; esse produto depois do pagamento,</span>
                <span>para que fique registrado o mesmo.</span>
                <Styled.ButtonsContainer>
                    <PrimaryButton onClick={() => router.push("https://nubank.com.br/cobrar/v17a/6599a92a-b9b7-4b3b-b12d-4e841ede6bd3")}>
                        Continuar
                    </PrimaryButton>
                </Styled.ButtonsContainer>
            </Styled.Container>
        </Modal>
    );
}