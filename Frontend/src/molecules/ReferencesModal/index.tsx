import { Modal, PrimaryButton, SecondaryButton } from "@/atoms";
import { inter } from "@/app/fonts";
import { useRouter } from "next/navigation";

import Styled from "./styles"

interface IReferenceModalProps {
    isOpen: boolean;
    onClose: () => void;
    reference_url?: string;
}

export function ReferenceModal({ isOpen, onClose, reference_url }: IReferenceModalProps) {
    const router = useRouter();
    
    const references = reference_url ? reference_url.split("") : [];
    
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <Styled.Container className={inter.className}>
                <span>O(s) links abaixo são referências para o produto que imaginamos. Caso deseje você pode comprar pelo site também!</span>
                <span>Não esqueça de &ldquo;Escolher&ldquo; esse produto depois do pagamento,</span>
                <span>para que fique registrado o mesmo.</span>
                <Styled.ButtonsContainer>
                    {
                        references.map((reference, index) => (
                            <SecondaryButton key={reference + String(index)} onClick={() => router.push(reference)}>
                                Link {index + 1}
                            </SecondaryButton>
                        ))
                    }
                    <PrimaryButton onClick={onClose}>
                        Fechar
                    </PrimaryButton>
                </Styled.ButtonsContainer>
            </Styled.Container>
        </Modal>
    );
}