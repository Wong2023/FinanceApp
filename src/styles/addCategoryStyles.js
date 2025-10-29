import styled from "styled-components";

export const PageContainer = styled.div`
  flex: 1;
  background: #faefe2;
  border: 3px solid #181818;
  font-family: 'Courier New', Courier, monospace;
  margin-top: 18px;
  padding: 30px;
  min-height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1385px;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1440px) {
    width: 95%;
  }

  @media (max-width: 1024px) {
    padding: 20px;
    width: 92%;
  }

  @media (max-width: 768px) {
    padding: 16px;
    border-width: 2px;
    width: 100%;
  }

  @media (max-width: 480px) {
    padding: 12px;
    border-width: 1.5px;
  }
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
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 80%;
    padding: 20px;
  }

  @media (max-width: 768px) {
    width: 95%;
    padding: 16px;
    box-shadow: 2px 2px 0 #181818;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin: 20px auto;
    padding: 12px;
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
  margin-bottom: 16px;
  flex-wrap: wrap;

  label {
    min-width: 120px;
    font-size: 1rem;
    color: #222;
    margin-right: 12px;
    font-weight: bold;
    text-align: right;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    label {
      text-align: left;
      margin-right: 0;
      margin-bottom: 6px;
      min-width: 100%;
      font-size: 0.95rem;
    }
  }

  @media (max-width: 480px) {
    label {
      font-size: 0.9rem;
    }
  }
`;

export const Input = styled.input`
  font-family: inherit;
  font-size: 1rem;
  padding: 8px;
  border: 2px solid #222;
  background: #faefe2;
  flex: 1;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 7px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 6px;
  }
`;

export const Select = styled.select`
  font-family: inherit;
  font-size: 1rem;
  padding: 8px;
  border: 2px solid #222;
  background: #faefe2;
  flex: 1;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 7px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 6px;
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
    gap: 12px;
  }
`;

export const ModalBtn = styled.button`
  background: ${({ $primary }) => ($primary ? "#222" : "#fff")};
  color: ${({ $primary }) => ($primary ? "#fff" : "#222")};
  font-family: 'Courier New', Courier, monospace;
  font-size: 1rem;
  border: 2px solid #222;
  box-shadow: 2px 2px 0 #222;
  padding: 8px 24px;
  cursor: pointer;
  font-weight: bold;
  min-width: 100px;
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
