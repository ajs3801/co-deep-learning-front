import styled from "@emotion/styled";

export const LoginContentContainer = styled.div`
  width: 100%;
  max-width: 400px;
  height: calc(var(--vh, 1vh) * 100);
  margin: auto;
`;

export const LoginFieldContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  margin-top: 56px;
  padding: 15px;
  gap: 40px;
`;

export const LoginFieldHolder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const LoginFieldLabel = styled.div`
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

export const LoginTextField = styled.input`
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
  border-bottom: 1px solid black;
  background-color: var(--background, #F8F8F8);

  margin: auto;
`;

export const LoginButton = styled.button`
  border: none;
  width: 95%;
  height: 48px;

  border-radius: 4px;
  background-color: #D9D9D9;

  color: #000;
  text-align: center;
  font-family: "Pretendard-Regular";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  margin: auto;

  margin-top: 100px;
  margin-bottom: 20px;
`;