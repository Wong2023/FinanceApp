import styled from "styled-components";

export const ModalBg = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  
  
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
  margin-left: 460px;
  display: flex;
  flex-direction: column;
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

  label {
    min-width: 90px;
    font-size: 1rem;
    color: #222;
    margin-right: 6px;
    font-weight: bold;
    margin-left: 260px;
    text-align: right; /* подписи выравнены по правому краю */
  }
`;

export const SizeOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 160px;
  flex-wrap: nowrap;
`;

export const Input = styled.input`
  font-family: inherit;
  font-size: 1.07rem;
  padding: 10px 9px;
  border: 2px solid #222;
  background: #faefe2; /* фон как у модалки */
  flex: 1;
  max-width: 500px; 
  min-height: 36px;
`;

export const Select = styled.select`
  font-family: inherit;
  font-size: 1.07rem;
  padding: 10px 9px;
  border: 2px solid #222;
  background: #faefe2; /* фон как у модалки */
  flex: 1;
  max-width: 520px; 
  min-height: 60px;
`;

export const CheckboxLabel = styled.label`
  font-size: 1rem;
  display: flex;
  align-items: center;
  flex-direction: row-reverse; /* 👈 меняем порядок элементов */
  gap: 6px; /* расстояние между словом и квадратом */
  margin: 0;
  cursor: pointer;
`;


// квадратный чекбокс
export const SizeCheckbox = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid #222;
  background: #faefe2;;
  cursor: pointer;

  &:checked {
    background: #222;
  }
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1px;
`;

export const ModalBtn = styled.button`
  background: ${({ primary }) => (primary ? "#222" : "#fff")};
  color: ${({ primary }) => (primary ? "#fff" : "#222")};
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.02rem;
  border: 2px solid #222;
  box-shadow: 2px 2px 0 #222;
  padding: 9px 28px;
  cursor: pointer;
  font-weight: bold;
  min-width: 120px;
  text-align: center;

  &:hover {
    background: ${({ primary }) => (primary ? "#093" : "#222")};
    color: #fff;
  }
  &:active {
    box-shadow: none;
    transform: translate(2px, 2px);
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
`;
