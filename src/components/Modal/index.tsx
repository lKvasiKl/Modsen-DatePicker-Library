import React, { useRef } from "react";

import useClickOutside from "hooks/useClickOutside";

import { ICONS } from "constants/icons";
import { Icon } from "constants/styles/global";

import { ModalProps } from "./types";
import { CloseButton, ModalWindow, ModalContainer } from "./styled";

const { close } = ICONS;

const Modal = React.memo(({ children, onClose }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(modalRef, onClose);

  const handleCloseButtonClick = () => {
    onClose();
  };

  return (
    <ModalContainer>
      <ModalWindow ref={modalRef}>
        <CloseButton
          data-testid="modal-close-button"
          onClick={handleCloseButtonClick}
        >
          <Icon src={close} />
        </CloseButton>
        {children}
      </ModalWindow>
    </ModalContainer>
  );
});

export default Modal;
