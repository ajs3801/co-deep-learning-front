import styled from "@emotion/styled";
import CloseIcon from "@mui/icons-material/Close";

export const ModalContainer = styled.div`
  position: absolute !important;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 792px;
`;

export const ModalContentContainer = styled.div`
  width: 100%;
  border-radius: 15px;
  background: var(--background, #f5f5f5);
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CloseButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  padding-top: 5px;
  padding-right: 5px;
`;

export const CloseButton = styled(CloseIcon)``;


