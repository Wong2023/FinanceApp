import styled from "styled-components";

/* Общий контейнер для основной части */
export const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  font-family: 'Courier New', Courier, monospace;
`;

/* Основная страница */
export const PageContainer = styled.div`
  flex: 1;
  background: #fff1e9;
  border: 2px solid black;
  margin: 18px 18px 18px 1px;
  padding: 50px;
  display: flex;
  flex-direction: column;
`;

export const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 1.4rem;
    font-weight: bold;
  }

  span {
    font-weight: normal;
  }
`;

/* Поиск */
export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #181818;
  background: #fff;
`;

export const SearchInput = styled.input`
  border: none;
  padding: 6px 8px;
  font-family: inherit;
  font-size: 1rem;
  outline: none;
`;

export const SearchBtn = styled.button`
  border: none;
  background: transparent;
  font-size: 1rem;
  cursor: pointer;
  padding: 6px 8px;
`;

/* Таблица */
export const TableWrapper = styled.div`
  border: 2px solid #181818;
  box-shadow: 3px 3px 0 #181818;
  margin-top: 0;
  background: #fff1e9;
  overflow-y: auto;
  height: 660px; /* уменьшаем, чтобы с учётом хедера ровно помещалось */

  /* Кастомный скроллбар (Chrome, Edge, Opera) */
  &::-webkit-scrollbar {
    width: 7px;
    background: #f5ede8;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #dad7d3;
    border-radius: 8px;
    border: 1px solid #cfcfcf;
    min-height: 40px;
  }
  &::-webkit-scrollbar-track {
    background: #faefe2;
    border-radius: 10px;
    margin: 4px 0;
  }

  /* Для Firefox */
  scrollbar-width: thin;
  scrollbar-color: #dad7d3 #faefe2;
`;

/* Заголовок таблицы — отдельно сверху */
export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background: #fff1e9;
  border: 2px solid black;
  border-bottom: 0.5px solid #181818;
  padding: 10px;
  font-weight: bold;
  font-size: 0.95rem;
  margin-top: 20px;
  height: 40px;
  align-items: center;

`;

/* Сами данные клиентов */
export const Table = styled.div`
  display: table;
  width: 100%;
  border-collapse: collapse;
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  border-bottom: 1px solid #ccc;
`;

export const TableCell = styled.div`
  padding: 8px 10px;
  height: 28px;
`;
