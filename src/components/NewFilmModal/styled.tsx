import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  background: #fff;
  padding: 20px;
  width: 400px;
  border-radius: 12px;

  h2 {
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  label {
    display: flex;
    flex-direction: column;
    font-size: 14px;
  }

  span {
    color: red;
    font-size: 12px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;

  button {
    padding: 8px 14px;
    cursor: pointer;
    border: none;
    border-radius: 6px;
  }

  button[type="submit"] {
    background: #007bff;
    color: white;
  }
`;