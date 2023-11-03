import React, { useRef } from "react";

import CloseIcon from "assets/icons/close.svg";
import useClickOutside from "hooks/useClickOutside";
import { Icon } from "constants/styles/global";

import { ModalProps } from "./types";
import { CloseButton, ModalWindow, ModalContainer } from "./styled";

const Modal = React.memo(({ children, onClose }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(modalRef, onClose);

  const handleCloseButtonClick = () => {
    onClose();
  };

  return (
    <ModalContainer>
      <ModalWindow ref={modalRef}>
        <CloseButton onClick={handleCloseButtonClick}>
          <Icon src={CloseIcon} />
        </CloseButton>
        {children}
      </ModalWindow>
    </ModalContainer>
  );
});

export default Modal;
