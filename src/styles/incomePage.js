import styled from "styled-components";

export const IncomeContainer = styled.div`
  background: #fff1e9;
  border: 2px solid black;
  height: 800px;
  padding: 38px 38px 36px 38px;
  font-family: "Courier New", monospace;
  position: relative;
  margin-bottom: 20px;
  margin-top: 20px;
  margin-right: 20px;
`;

export const IncomeHeader = styled.div`
  font-size: 34px;
  font-family: "Courier New", monospace;
  font-weight: bold;
  color: #222;
  margin-bottom: 28px;
`;

export const StatRow = styled.div`
  display: flex;
  gap: 28px;
  align-items: flex-end;
  margin-bottom: 24px;
`;

export const StatBox = styled.div`
  background: #ffe144;
  box-shadow: 3px 4px 0 #222;
  min-width: 180px;
  padding: 18px 36px 14px 28px;
  border: 1.5px solid #222;
  display: flex;
  flex-direction: column;
`;

export const TableControls = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: auto;

  .add-income-btn {
    font-family: "Courier New", monospace;
    background: #f1ededff;
    font-size: 17px;
    border: 2px solid #000;
    padding: 9px 22px;
    box-shadow: 2px 2px 0 #111;
    font-weight: bold;
    cursor: pointer;
    margin-right: 10px;
    transition: all 0.1s ease;

    &:hover {
      background: black;
      color: white;
    }

    &:active {
      box-shadow: none;
      transform: translate(2px, 2px);
    }
  }

  .mode-select,
  .month-select,
  .date-select {
    font-family: "Courier New", monospace;
    border: 1.5px solid #333;
    background: #fffbe6;
    font-size: 15px;
    padding: 7px 13px;
    font-weight: bold;
    margin-left: 4px;
    margin-right: 4px;
    cursor: pointer;
  }
`;

export const MainTable = styled.div`
  margin-top: 18px;
  margin-bottom: 20px;
  background: #fff;
  box-shadow: 2.5px 5px 0 #222;
  border: 2px solid #222;
  max-height: 400px;
  overflow-y: auto;
`;

export const TableHeader = styled.div`
  display: flex;
  background: #fff1e9;
  border-bottom: 2px solid #222;
  font-weight: bold;
  font-size: 19px;
  position: sticky;
  top: 0;
  z-index: 2;
`;

export const TableBody = styled.div`
  background: #fff1e9;
  border-bottom: 1px solid #ddd;
`;

export const TableRow = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
  font-size: 17px;
`;

export const TableCell = styled.div`
  flex: 1;
  padding: 11px 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  &:last-child {
    text-align: center;
  }
`;

export const TableActionLink = styled.span`
  color: #a2b2afff;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  text-decoration: underline transparent;
  transition: color 0.15s;

  &:hover {
    color: #04426a;
    text-decoration: underline;
  }
`;

export const DeleteButton = styled.span`
  color: red;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  margin-left: 8px;
  text-decoration: underline transparent;
  transition: color 0.15s;

  &:hover {
    color: darkred;
    text-decoration: underline;
  }
`;
