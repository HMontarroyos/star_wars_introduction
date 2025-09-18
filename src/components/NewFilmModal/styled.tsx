import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: #fff;
  padding: 40px 30px;
  width: 500px;
  max-width: 90%;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  font-size: 28px;
  font-family: ${(props) => props.theme.fonts.display};
  letter-spacing: 2px;

  h2 {
    margin-bottom: 20px;
    font-size: 24px;
    letter-spacing: 1.5px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  label {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    letter-spacing: 1px;
  }

  input[type="text"],
  input[type="file"],
  textarea {
    padding: 14px;
    font-size: 14px;
    border-radius: 8px;
    border: 1px solid #ccc;
    outline: none;
    width: 100%;
    box-sizing: border-box;
    letter-spacing: 1px;
  }

  textarea {
    resize: none;
    min-height: 140px;
  }

  span {
    color: red;
    font-size: 12px;
    margin-top: 4px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  margin-top: 10px;

  button {
    padding: 10px 22px;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    font-size: 14px;
    transition: all 0.2s ease;
    cursor: pointer;
    letter-spacing: 1px;
  }

  button[type="button"] {
    background: #e74c3c;
    color: white;

    &:hover {
      background: #c0392b;
    }
  }

  button[type="submit"] {
    background: #2ecc71;
    color: white;

    &:hover {
      background: #27ae60;
    }
  }
`;
