import styled, { keyframes } from "styled-components";

export const AuthContainer = styled.div`
  display: flex;
  height: 100vh;
  background: #6ce1d1; /* Бирюзовый фон */
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

export const AuthContent = styled.div`
  background-color: #fff1e9;
  border: 2px solid black;
  padding: 40px 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 650px;
  height: 500px;
  border-radius: 12px;
  box-shadow: 0 10px 36px rgba(0, 0, 0, 0.18), 4px 4px 0 black;
  font-family: "Courier New", monospace;
  text-align: center;
`;

export const AuthTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const AuthInput = styled.input`
  display: block;
  width: 70%;
  padding: 10px;
  margin-left: 80px;
  margin-bottom: 15px;
  border: 2px solid black;
  font-family: "Courier New", monospace;
  font-size: 18px;
  outline: none;

  &:focus {
    border-color: #6ce1d1;
    box-shadow: 2px 2px 0 black;
  }
`;

export const AuthButton = styled.button`
  background: #f1eded;
  border: 2px solid black;
  width: 74%;
  margin-left: 80px;
  padding: 10px 20px;
  cursor: pointer;
  font-family: "Courier New", monospace;
  font-size: 16px;
  margin-bottom: 15px;
  transition: all 0.2s ease;

  &:hover {
    background: black;
    color: white;
  }

  &:active {
    box-shadow: none;
    transform: translate(2px, 2px);
  }
`;

export const AuthSwitch = styled.div`
  font-size: 14px;

  span {
    cursor: pointer;
    color: blue;
    text-decoration: underline;
  }
`;

/* ---------- Language Buttons ---------- */
export const LanguageButtonsWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const LangButton = styled.button`
  background: #f1eded;
  border: 2px solid black;
  box-shadow: 2px 2px 0 black;
  padding: 4px 10px;
  font-family: "Courier New", monospace;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.15s ease;

  &:hover {
    background: black;
    color: white;
  }

  &:active {
    box-shadow: none;
    transform: translate(1px, 1px);
  }
`;

/* ---------- Toast Notification ---------- */
const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Toast = styled.div`
  position: fixed;
  bottom: 20px;
  background: #fff1e9;
  border: 2px solid black;
  box-shadow: 4px 4px 0 black;
  padding: 12px 20px;
  border-radius: 8px;
  font-family: "Courier New", monospace;
  font-size: 14px;
  animation: ${slideUp} 0.4s ease;
`;
