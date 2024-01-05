import styled from "@emotion/styled";

export const LoginContentContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: auto;
  margin-top: 56px;
`;

export const LoginTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const LoginFieldContainer = styled.div`
  width: 100%;
  height: calc(var(--vh, 1vh) * 100 - 56px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: scroll;
  padding: 15px;
`;

export const LoginFieldHolder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const LoginFieldLabel = styled.div`
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

export const LoginTextField = styled.input`
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
  border-bottom: 0.5px solid black;
  background-color: var(--background, #F8F8F8);

  margin: auto;
  padding-bottom: 8px;
`;

export const LoginButton = styled.button`
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

  margin-top: 100px;
  margin-bottom: 20px;
`;