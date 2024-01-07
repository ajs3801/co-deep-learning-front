import { FC, ReactNode } from "react";
import Modal from "@mui/material/Modal";
import {
  ModalContainer,
  ModalContentContainer,
  CloseButtonContainer,
  CloseButton,
} from "./ModalLayout.styles";

const ModalLayout = ({
  children,
  modalOpen,
  handleModalClose,
}) => {
  return (
    <Modal open={modalOpen} onClose={handleModalClose} sx={{ outline: "none" }}>
      <ModalContainer>
        <ModalContentContainer>
          <CloseButtonContainer>
            <CloseButton onClick={handleModalClose} />
          </CloseButtonContainer>
          {children}
        </ModalContentContainer>
      </ModalContainer>
    </Modal>
  );
};

export default ModalLayout;
