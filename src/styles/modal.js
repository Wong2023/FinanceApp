import styled from "styled-components";

/* Главный фоновой контейнер — НЕ МЕНЯТЬ */
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
`;

export const HeaderContainer = styled.div`
  width: 840px;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
  margin-top: 20px;
  margin-right: 500px;
`;

export const TabsContainer = styled.div`
  width: 840px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-bottom: 20px;
  margin-left: 80px;
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
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 6px;
`;

export const ClientSection = styled.div`
  border: 2px solid #181818;
  background: #faefe2;
  padding: 14px 15px 10px 15px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ModalRow = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 10px;
  flex-wrap: wrap;
`;

/* Новый контейнер: label сверху, поле снизу */
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
`;

export const Select = styled.select`
  font-family: inherit;
  font-size: 1rem;
  padding: 7px 8px;
  border: 2px solid #181818;
  background: #fff;
  width: 100%;
  box-sizing: border-box;
`;

export const CommentInput = styled.input`
  font-family: inherit;
  font-size: 1rem;
  padding: 7px 8px;
  border: 2px solid #181818;
  background: #fff;
  width: 100%;
  box-sizing: border-box;
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 18px;
`;

export const ModalBtn = styled.button`
  background: ${({ primary }) => (primary ? "#181818" : "#fff")};
  color: ${({ primary }) => (primary ? "#fff" : "#181818")};
  font-family: 'Courier New', Courier, monospace;
  font-size: 1rem;
  border: 2px solid #181818;
  box-shadow: 2px 2px 0 #181818;
  padding: 7px 36px;
  cursor: pointer;
  font-weight: bold;
  min-width: 120px;
  text-align: center;

  &:hover {
    background: ${({ primary }) => (primary ? "#093" : "#181818")};
    color: #fff;
  }
  &:active {
    box-shadow: none;
    transform: translate(2px, 2px);
  }
`;
