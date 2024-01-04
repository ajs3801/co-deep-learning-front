import styled from "@emotion/styled";

export const RegisterPhotoContainer = styled.div`
  width: 100%;
  max-width: 400px;
  height: calc(var(--vh, 1vh) * 100 - 56px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: scroll;
  padding: 15px;
  gap: 40px;
`;

export const RegisterPhotoHolder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 50px;
`;

export const RegisterPhotoContent = styled.div`
  width: 160px;
  height: 160px;
  background-color: grey;
  border-radius: 160px;
  position: relative;
`;

export const RegisterPhotoButtonContainer = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 100px;
  left: 120px;
  z-index: 100;
  background-color: var(--grey-white, #FFF);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegisterPhotoButton = styled.img`
  width: 20px;
  height: 20px;
  z-index: 200;
`;

export const RegisterPhotoLabel = styled.p`
  color: var(--grey-black, #1F1F1F);
  font-family: "Pretendard-Regular";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const RegisterNextButton = styled.button`
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

  margin-bottom: 20px;
`;
