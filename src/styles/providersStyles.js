import styled from "styled-components";

export const Container = styled.div`
  background: #fff1e9;
  padding: 30px;
  max-width: 1446px;
  height: 95.5vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 auto;
  font-family: monospace;
  box-sizing: border-box;
  margin-top: 20px;
  margin-right: 20px;
  border: 2px solid black;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-family: monospace;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 20px;
    font-weight: normal;
    margin-left: 8px;
  }
`;

export const AddButton = styled.button`
  font-family: "Courier New", monospace;
  font-size: 17px;
  background: #f1ededff;
  border: 2px solid black;
  padding: 9px 22px;
  box-shadow: 2px 2px 0 #111;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.1s ease;

  &:hover {
    background: black;
    color: white;
  }

  &:active {
    transform: translate(2px, 2px);
    box-shadow: 0px 0px 0 #111;
  }
`;

export const ScrollContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  border: 1px solid black;
  box-shadow: 5px 5px black;

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
    background: #fff1e9;
    border-radius: 10px;
    margin: 4px 0;
  }

  /* Для Firefox */
  scrollbar-width: thin;
  scrollbar-color: #dad7d3 #fff1e9;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: monospace;
`;

export const Thead = styled.thead`
  background-color: #fff1e9;
  border-bottom: 2px solid black;
`;

export const Tr = styled.tr`
  border-bottom: 1px solid #e0d6cd;

  &:last-child {
    border-bottom: none;
  }
`;

export const Th = styled.th`
  text-align: left;
  padding: 12px 10px;
  font-weight: bold;
  font-size: 14px;
`;

export const Td = styled.td`
  padding: 12px 10px;
  font-size: 14px;
  color: #222;

  &:last-child {
    color: #888;
    text-align: right;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: black;
    }
  }
`;
