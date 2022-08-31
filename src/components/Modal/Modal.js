import { useCallback } from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { ContainerBackdrop, ModalWindow } from "./Modal.styled";
import PropTypes from "prop-types"

const Modal = ({ children, onClose }) => {
    const modalRoot = document.querySelector('#modal-root');

    const handleKeyDown = useCallback(() => {
        window.addEventListener("keydown", e => {
            if(e.code === "Escape") {
                onClose();
            }
        })
    }, [onClose]) 

    useEffect(() => {
        handleKeyDown()

        return () => window.removeEventListener("keydown", handleKeyDown)
    },[onClose, handleKeyDown])

    return (
        createPortal(
            <ContainerBackdrop>
                <ModalWindow >
                    {children}
                </ModalWindow>
            </ContainerBackdrop>, modalRoot,
        )
    );
};

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
}

export default Modal;