import styled from "@emotion/styled";
import { TextareaAutosize } from '@mui/base/TextareaAutosize';

export const RegisterFieldContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const RegisterFieldLabel = styled.div`
  display: flex;
  justify-content: start;
  width: 95%;
  color: #000;
  font-family: "Pretendard-Regular";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 24px */
  letter-spacing: -0.48px;
`;

export const RegisterTextField = styled(TextareaAutosize)`
  width: 95%;
  resize: none;

  color: #000;
  font-family: "Pretendard-Regular";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 24px */
  letter-spacing: -0.48px;

  border: none;
  background-color: var(--background, #F8F8F8);
`;
