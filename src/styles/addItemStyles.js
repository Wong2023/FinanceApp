import styled from "styled-components";

export const ModalBg = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  background: rgba(0, 0, 0, 0.1); /* лёгкое затемнение */

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const ModalBlock = styled.div`
  background: #faefe2;
  border: 2.5px solid #181818;
  box-shadow: 3px 3px 0 #181818;
  padding: 24px 32px;
  font-family: 'Courier New', Courier, monospace;
  width: 950px;
  height: 550px;
  margin: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease;

  @media (max-width: 1440px) {
    width: 80%;
    height: auto;
  }

  @media (max-width: 1024px) {
    width: 85%;
    height: auto;
    padding: 20px 24px;
  }

  @media (max-width: 768px) {
    width: 95%;
    height: auto;
    padding: 16px 18px;
    box-shadow: 2px 2px 0 #181818;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
    padding: 12px 14px;
  }
`;

export const ModalContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ModalRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  flex-wrap: wrap;

  label {
    min-width: 90px;
    font-size: 1rem;
    color: #222;
    margin-right: 6px;
    font-weight: bold;
    text-align: right;
    margin-left: 260px;
  }

  @media (max-width: 1024px) {
    label {
      margin-left: 0;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    label {
      text-align: left;
      margin: 0 0 6px 0;
      font-size: 0.95rem;
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    label {
      font-size: 0.9rem;
    }
  }
`;

export const SizeOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 160px;
  flex-wrap: nowrap;

  @media (max-width: 1024px) {
    gap: 80px;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 20px;
  }
`;

export const Input = styled.input`
  font-family: inherit;
  font-size: 1.07rem;
  padding: 10px 9px;
  border: 2px solid #222;
  background: #faefe2;
  flex: 1;
  max-width: 500px; 
  min-height: 36px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    width: 100%;
    max-width: none;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 8px;
  }
`;

export const Select = styled.select`
  font-family: inherit;
  font-size: 1.07rem;
  padding: 10px 9px;
  border: 2px solid #222;
  background: #faefe2;
  flex: 1;
  max-width: 520px; 
  min-height: 60px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    width: 100%;
    min-height: 45px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 8px;
  }
`;

export const CheckboxLabel = styled.label`
  font-size: 1rem;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  gap: 6px;
  margin: 0;
  cursor: pointer;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const SizeCheckbox = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid #222;
  background: #faefe2;
  cursor: pointer;

  &:checked {
    background: #222;
  }

  @media (max-width: 480px) {
    width: 16px;
    height: 16px;
  }
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 20px;

  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }
`;

export const ModalBtn = styled.button`
  background: ${({ $primary }) => ($primary ? "#222" : "#fff")};
  color: ${({ $primary }) => ($primary ? "#fff" : "#222")};
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.02rem;
  border: 2px solid #222;
  box-shadow: 2px 2px 0 #222;
  padding: 9px 28px;
  cursor: pointer;
  font-weight: bold;
  min-width: 120px;
  text-align: center;
  transition: all 0.1s ease;

  &:hover {
    background: ${({ $primary }) => ($primary ? "#093" : "#222")};
    color: #fff;
  }

  &:active {
    box-shadow: none;
    transform: translate(2px, 2px);
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 0.95rem;
    padding: 10px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const BackdropContainer = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1500;
`;

export const BigBlock = styled.div`
  background: #fbeee8;
  border: 3px solid #181818;
  font-family: 'Courier New', Courier, monospace;
  width: 1360px;
  height: 86vh;
  padding: 40px;
  margin-left: 220px;
  box-sizing: border-box;

  @media (max-width: 1440px) {
    width: 90%;
    margin: 20px auto;
  }

  @media (max-width: 1024px) {
    width: 95%;
    padding: 24px;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 95%;
    padding: 20px;
    margin: 0 auto;
    border-width: 2px;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 16px;
    border-width: 1.5px;
  }
`;
