import styled from "@emotion/styled";
import { TextareaAutosize } from '@mui/base/TextareaAutosize';

export const RegisterFieldContainer = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  padding: 15px;
  gap: 40px;
`;

export const RegisterFieldHolder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const RegisterFieldLabel = styled.div`
  display: flex;
  justify-content: start;
  width: 95%;

  color: var(--main, #68B38F);
  font-family: "Pretendard-Regular";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 20px */
  letter-spacing: -0.4px;
`;

export const RegisterTextField = styled.input`
  width: 100%;
  resize: none;

  color: #000;
  font-family: "Pretendard-Regular";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 24px */
  letter-spacing: -0.48px;

  border: none;
  border-bottom: 1px solid black;
  background-color: var(--background, #F8F8F8);

  margin: auto;
`;

export const RegisterButton = styled.button`
  border: none;
  width: 80%;
  height: 56px;

  border-radius: 8px;
  background: var(--main, #68B38F);

  color: #FFF;
  font-family: "Pretendard-Regular";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 20px */
  letter-spacing: -0.4px;

  margin: auto;

  margin-top: 50px;
  margin-bottom: 20px;
`;
