import styled from "styled-components";

/* Основная рабочая зона */
export const PageContainer = styled.div`
  flex: 1;
  background: #faefe2;
  border: 3px solid #181818;
  font-family: 'Courier New', Courier, monospace;
  margin-top: 18px;
  padding: 30px;
  min-height: 89vh;
  display: flex;
  flex-direction: column;
  width: 1385px;
`;

export const ModalBlock = styled.div`
  background: #faefe2;
  border: 2px solid #181818;
  box-shadow: 3px 3px 0 #181818;
  width: 600px;
  margin: 40px auto;
  padding: 20px 30px;
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
  margin-bottom: 16px;

  label {
    min-width: 120px;
    font-size: 1rem;
    color: #222;
    margin-right: 12px;
    font-weight: bold;
    text-align: right;
  }
`;

export const Input = styled.input`
  font-family: inherit;
  font-size: 1rem;
  padding: 8px;
  border: 2px solid #222;
  background: #faefe2;
  flex: 1;
`;

export const Select = styled.select`
  font-family: inherit;
  font-size: 1rem;
  padding: 8px;
  border: 2px solid #222;
  background: #faefe2;
  flex: 1;
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 20px;
`;

export const ModalBtn = styled.button`
  background: ${({ primary }) => (primary ? "#222" : "#fff")};
  color: ${({ primary }) => (primary ? "#fff" : "#222")};
  font-family: 'Courier New', Courier, monospace;
  font-size: 1rem;
  border: 2px solid #222;
  box-shadow: 2px 2px 0 #222;
  padding: 8px 24px;
  cursor: pointer;
  font-weight: bold;
  min-width: 100px;
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
