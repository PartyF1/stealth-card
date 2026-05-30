import { useEffect, type ReactNode } from "react";
import {
  Body,
  CloseButton,
  Dialog,
  Header,
  Overlay,
  Title,
} from "./Modal.styled";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <>
      <Overlay $isOpen={isOpen} onClick={onClose} aria-hidden={!isOpen} />
      <Dialog
        $isOpen={isOpen}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <Header>
          <Title id="modal-title">{title}</Title>
          <CloseButton type="button" onClick={onClose} aria-label="Закрыть">
            ×
          </CloseButton>
        </Header>
        <Body>{children}</Body>
      </Dialog>
    </>
  );
};
