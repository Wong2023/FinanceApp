import styled from "styled-components";

export const PageWrapper = styled.div`
  background: #6ce1d1;
  min-height: 100vh;
  display: flex;
  justify-content: flex-start; 
  align-items: center;
  padding-right: 20px;
  padding-bottom: 100px;
`;

export const Container = styled.div`
  background-color: #fff1e9;
  border: 2px solid black;
  height: 91vh;
  padding: 20px;
  width: 100%;
  font-family: "Courier New", monospace;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  margin-left: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;

  h1 {
    font-weight: bold;
    font-size: 22px;
    margin: 0;
  }
`;

export const TableScrollWrapper = styled.div`
  flex: 1;
  max-height: 55vh;
  overflow-y: auto;
  margin-left: 55px;
  width: calc(92% - 10px);
  border: 2px solid black;
  box-shadow: 0 10px 36px rgba(0, 0, 0, 0.18), 4px 4px 0 #000;

  scrollbar-width: thin;
  scrollbar-color: #b5b5b5 transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #b5b5b5;
    border-radius: 3px;
  }
`;

export const AddButton = styled.button`
  background: #f8ece4;
  color: black;
  width: 200px;
  height: 5vh;
  border: 2px solid black;
  padding: 5px 10px;
  font-family: inherit;
  font-size: 17px;
  cursor: pointer;
  box-shadow: 3px 3px 0px black;

  &:hover {
    background: black;
    color: white;
  }

  &:active {
    box-shadow: none;
    transform: translate(2px, 2px);
  }
`;

export const CategoriesWrapper = styled.div`
  display: grid;
  grid-template-columns: ${({ buttonWidth }) =>
    buttonWidth
      ? `repeat(auto-fill, minmax(${buttonWidth}, 1fr))`
      : "repeat(auto-fit, minmax(120px, 1fr))"};
  gap: ${({ gap }) => gap || "65px"};
  margin-bottom: 35px;
  width: 100%;
  margin-left: 70px;
  margin-top: 90px;
`;

export const CategoryButton = styled.button`
  background-color: #f8ece4;
  color: black;
  border: 2px solid black;
  padding: 5px;
  font-family: inherit;
  font-size: 18px;
  cursor: pointer;
  height: 6vh;
  width: ${({ width }) => width || "118%"};
  text-align: center;
  justify-self: center;

  &:hover {
    background: black;
    color: white;
  }

  &:active {
    box-shadow: none;
    transform: translate(2px, 2px);
  }
`;

export const IconButton = styled.button`
  border: 2px solid black;
  background-color: transparent;
  padding: 5px;
  cursor: pointer;
  height: 6vh;
  width: ${({ width }) => width || "50px"};
  box-shadow: 2px 2px 0 #000;

  &:hover {
    background: black;
    color: white;
  }

  &:active {
    box-shadow: none;
    transform: translate(2px, 2px);
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #f8ece4;
`;

export const TableHeader = styled.thead`
  background-color: transparent;
  border-bottom: 2px solid black;
  position: sticky;
  top: 0;
  z-index: 2;

  th {
    padding: 8px 12px;
    text-align: left;
    background-color: #f8ece4;

    &:last-child {
      text-align: right;
      padding-right: 35px;
    }
  }
`;

export const TableRow = styled.tr`
  td {
    padding: 8px 12px;
    border-bottom: 1px solid #c8bfb8;

    &:last-child {
      text-align: right;
      padding-right: 30px;
    }
  }
`;

export const EditButton = styled.button`
  border: none;
  background: transparent;
  color: black;
  text-decoration: underline;
  cursor: pointer;
`;
