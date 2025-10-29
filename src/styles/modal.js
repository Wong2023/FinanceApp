import styled from "styled-components";

export const PageContainer = styled.div`
  flex: 1;
  background: #faefe2;
  border: 3px solid #181818;
  font-family: 'Courier New', Courier, monospace;
  margin-top: 18px;
  min-height: 96vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 98.5%;
  box-sizing: border-box;
  padding: 20px;

  @media (max-width: 1200px) {
    width: 98%;
    padding: 16px;
  }

  @media (max-width: 768px) {
    width: 100%;
    border-width: 2px;
    padding: 12px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const HeaderContainer = styled.div`
  width: 840px;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
  margin-top: 20px;
  margin-right: 500px;

  @media (max-width: 1400px) {
    margin-right: 0;
    justify-content: center;
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    margin: 10px 0;
  }
`;

export const TabsContainer = styled.div`
  width: 840px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-bottom: 20px;
  margin-left: 80px;

  @media (max-width: 1400px) {
    justify-content: center;
    margin-left: 0;
    width: 90%;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    gap: 8px;
    margin-bottom: 15px;
  }
`;

export const ModalBlock = styled.div`
  background: #faefe2;
  border: 2px solid #181818;
  box-shadow: 3px 3px 0 #181818;
  width: 920px;
  min-height: 720px;
  margin: 0 auto;
  padding: 28px 34px 18px 34px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    width: 90%;
    min-height: 640px;
    padding: 24px;
  }

  @media (max-width: 768px) {
    width: 95%;
    min-height: auto;
    padding: 20px;
  }

  @media (max-width: 480px) {
    width: 100%;
    box-shadow: 2px 2px 0 #181818;
    padding: 16px;
  }
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 6px;

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

export const ClientSection = styled.div`
  border: 2px solid #181818;
  background: #faefe2;
  padding: 14px 15px 10px 15px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 768px) {
    padding: 12px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    gap: 8px;
  }
`;

export const ModalRow = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 10px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 12px;
    margin-bottom: 8px;
  }
`;

export const FieldBlock = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 140px;

  label {
    font-size: 1rem;
    color: #181818;
    font-weight: bold;
    margin-bottom: 4px;

    @media (max-width: 480px) {
      font-size: 0.95rem;
    }
  }
`;

export const Input = styled.input`
  font-family: inherit;
  font-size: 1rem;
  padding: 7px 8px;
  border: 2px solid #181818;
  background: #fff;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 480px) {
    font-size: 0.95rem;
    padding: 6px 8px;
  }
`;

export const Select = styled.select`
  font-family: inherit;
  font-size: 1rem;
  padding: 7px 8px;
  border: 2px solid #181818;
  background: #fff;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 480px) {
    font-size: 0.95rem;
    padding: 6px 8px;
  }
`;

export const CommentInput = styled.input`
  font-family: inherit;
  font-size: 1rem;
  padding: 7px 8px;
  border: 2px solid #181818;
  background: #fff;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 480px) {
    font-size: 0.95rem;
    padding: 6px 8px;
  }
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 18px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
    margin-top: 14px;
  }
`;

export const ModalBtn = styled.button`
  background: ${({ $primary }) => ($primary ? "#181818" : "#fff")};
  color: ${({ $primary }) => ($primary ? "#fff" : "#181818")};
  font-family: 'Courier New', Courier, monospace;
  font-size: 1rem;
  border: 2px solid #181818;
  box-shadow: 2px 2px 0 #181818;
  padding: 7px 36px;
  cursor: pointer;
  font-weight: bold;
  min-width: 120px;
  text-align: center;
  transition: 0.1s ease;

  &:hover {
    background: ${({ $primary }) => ($primary ? "#093" : "#181818")};
    color: #fff;
  }

  &:active {
    box-shadow: none;
    transform: translate(2px, 2px);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 9px 0;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;
