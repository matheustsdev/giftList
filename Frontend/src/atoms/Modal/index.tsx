import { ReactNode } from "react";
import LibModal from "react-modal";

interface IDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;

}

export function Modal({ isOpen, onClose, children }: IDetailsModalProps) {

    return (
        <LibModal 
            isOpen={isOpen} 
            onRequestClose={onClose} 
            style={{
            content: {
                height: "fit-content",
                width: "fit-content",
                padding: 0,
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
           {children}
        </LibModal>
    );
}