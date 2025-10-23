import styled from "styled-components";

/* Фон */
export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 260px;
  right: 0;
  z-index: 1000;
  background: #faefe2;
  display: flex;
  width: 1445px;
  margin-top: 20px;
  margin-left: -20px;
  height: 875px;
  justify-content: center;
  align-items: center;
  border: 3px solid #181818;
`;

export const BoxShadow = styled.div`
  background: transparent;
  box-shadow: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBox = styled.div`
  background: #faefe2;
  border: 3px solid #181818;
  box-shadow: 4px 4px 0 #181818;
  width: 840px;
  min-height: 720px;
  padding: 36px 40px 18px 40px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const ModalTitle = styled.div`
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.5rem;
  font-weight: bold;
  color: #181818;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 36px;
  left: 40px;
`;

export const AddNewBox = styled.div`
  position: absolute;
  top: 36px;
  right: 40px;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 18px;
  right: 24px;
  background: transparent;
  border: none;
  font-size: 1.8rem;
  font-weight: bold;
  color: #222;
  cursor: pointer;
`;

export const ExpenseForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 70px; /* чтобы форма не перекрывала заголовок */
`;

/* Ряд в виде сетки */
export const ModalRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* две колонки */
  gap: 20px;
`;

/* Каждое поле */
export const Field = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.1rem;
  font-weight: bold;
  color: #181818;
  margin-bottom: 6px;
  user-select: none;
`;

/* Изменено: размеры инпутов через пропсы */
export const Input = styled.input`
  font-family: inherit;
  font-size: 1.1rem;
  padding: 9px 12px;
  border: 3px solid #181818;
  background: #fff;
  width: ${({ width }) => width || "100%"};
  box-sizing: border-box;
`;

/* Изменено: размеры селектов через пропсы */
export const Select = styled.select`
  font-family: inherit;
  font-size: 1.1rem;
  padding: 9px 12px;
  border: 3px solid #181818;
  background: #fff;
  width: ${({ width }) => width || "100%"};
  box-sizing: border-box;
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 120px;
  padding-top: 22px;
  border-top: 3px solid #181818;
`;

export const Btn = styled.button`
  background: ${({ primary }) => (primary ? "#181818" : "#fff")};
  color: ${({ primary }) => (primary ? "#fff" : "#181818")};
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.1rem;
  border: 3px solid #181818;
  box-shadow: 3px 3px 0 #181818;
  padding: 10px 44px;
  cursor: pointer;
  font-weight: bold;
  min-width: 140px;
  text-align: center;
  user-select: none;
  margin-top:17px;

  &:hover {
    background: ${({ primary }) => (primary ? "#095" : "#222")};
    color: #fff;
  }
  &:active {
    box-shadow: none;
    transform: translate(3px, 3px);
  }
`;
