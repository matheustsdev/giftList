import Modal from "react-modal";
import Styled from "./styles";
import { theme } from "@/styles/theme";
import { Gift } from "@/types";
import { utils } from "@/utils";

interface IDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    gift: Gift;

}

export function DetailsModal({ isOpen, onClose, gift }: IDetailsModalProps) {
    const { name, description, image_src, link, price } = gift;

    return (
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onClose} 
            style={{
            content: {
                height: "fit-content",
                width: "fit-content",
                padding: 0,
                backgroundColor: theme.colors.slate800,
                overflow: "hidden",
                inset: "unset",
                border: "none"
            },
            overlay: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0,0,0,0.5)"
            }
        }} >
            <Styled.Container>
                <h3>{name}</h3>
                <Styled.Description>
                    <img src={image_src} alt={name} />
                    <Styled.InfoContainer>
                        <span>{description}</span>
                    </Styled.InfoContainer>
                </Styled.Description>
                <Styled.Footer>
                    <p>{utils.convertMoney(price)}</p>
                    <div>
                        <a href={link} >ACESSAR</a>
                        <button onClick={onClose}>FECHAR</button>
                    </div>
                </Styled.Footer>
            </Styled.Container>
        </Modal>
    );
}