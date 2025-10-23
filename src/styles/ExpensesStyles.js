import styled from "styled-components";

export const ContentArea = styled.div`
  background: #fff1e9;
  padding: 20px 30px;
  min-height: 96vh;
  font-family: "Courier New", monospace;
  border: 2px solid black;
  box-sizing: border-box;
  margin-top: 20px;
  margin-right: 20px;
  border: 2px solid black;
`;

export const Header = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 24px;
  color: #000;
  font-family: "Courier New", monospace;
`;

export const TotalBox = styled.div`
  margin-left: 37px;
  background: #ffdf00;
  box-shadow: 7px 7px 0px 0px #000000cc;
  padding: 12px 18px;
  width: fit-content;
  margin-bottom: 20px;
  user-select: none;
`;

export const TotalTitle = styled.div`
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 1px;
  border-bottom: 2px solid black;
  padding-bottom: 4px;
  user-select: none;
`;

export const TotalAmount = styled.div`
  font-size: 22px;
  font-weight: 900;
  margin-top: 6px;
  letter-spacing: 1.5px;
  user-select: none;
`;

export const AddButton = styled.button`
  font-family: "Courier New", monospace;
  background: #fbeee8;
  font-weight: 600;
  font-size: 14px;
  padding: 7px 18px;
  color: black;
  border: 2px solid black;
  cursor: pointer;
  box-shadow: 6px 6px 0 0 #000000cc;
  margin-left: auto;
  user-select: none;
  &:hover {
    background: black;
    color: white;
  }
  &:active {
    box-shadow: none;
    transform: translate(2px, 2px);
  }
`;

export const TabsRowContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1250px;
  margin-left: 37px;
  margin-bottom: 0px;
  position: relative;
`;

export const TabButtonsBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 20px;
  gap: 50px;
`;

export const TabButton = styled.button`
  flex: 1;
  font-family: "Courier New", monospace;
  font-size: 15px;
  min-width: 220px;   /* фиксированная ширина */
  max-width: 220px;
  font-weight: 600;
  background: #fbeee8;
  color: black;
  padding: 12px 0px;
  border: 1.5px solid #000;
  cursor: pointer;
  box-shadow: 4px 4px 0 0 #000000cc;
  transition: background 0.2s ease;
  user-select: none;
  &:hover {
    background: black;
    color: white;
  }
  &:active {
    box-shadow: none;
    transform: translate(2px, 2px);
  }
`;

export const ActiveTabButton = styled(TabButton)`
  background: black;
  color: white;
  box-shadow: 4px 4px 0 0 #000000cc;
`;

export const IconRow = styled.div`
  display: flex;
  gap: 7px;
  position: absolute;
  bottom: 100%;
  right: 0;
  transform: translateX(50px);
  margin-bottom: 5px;
`;

export const IconButton = styled.button`
  font-family: "Courier New", monospace;
  font-weight: 600;
  font-size: 22px;
  padding: 4px 14px;
  background: #fbeee8;
  border: 2px solid #000;
  box-shadow: 4px 4px 0 0 #000000cc;
  cursor: pointer;
  user-select: none;
  &:hover {
    background: black;
    color: white;
  }
  &:active {
    box-shadow: none;
    transform: translate(2px, 2px);
  }
`;

export const TableWrapper = styled.div`
  box-shadow: 10px 10px 0 0 #000000cc;
  background: #fbeee8;
  border: 1.5px solid black;
  padding: 12px 24px 24px 24px;
  user-select: none;
  margin-top: 20px;
  width: 1250px;
  height: 530px;
  margin-left: 37px;
`;

export const MonthYearRow = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 24px;
  margin-top: 0px;
  justify-content: flex-end;
  user-select: none;
`;

export const Select = styled.select`
  font-family: "Courier New", monospace;
  border: 2px solid #000;
  background: #fbeee8;
  font-size: 14px;
  font-weight: 600;
  padding: 6px 12px;
  cursor: pointer;
  box-shadow: 3px 3px 0 0 #000000cc;
  user-select: none;
  option {
    font-family: "Courier New", monospace;
    font-weight: normal;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`;

export const TableHeader = styled.th`
  padding: 12px 16px;
  font-family: "Courier New", monospace;
  font-weight: 700;
  font-size: 13px;
  text-align: left;
  border-bottom: 2px solid black;
  user-select: none;
`;

export const TableRow = styled.tr`
  border-bottom: 1.5px solid #00000066;
`;

export const TableCell = styled.td`
  padding: 12px 16px;
  font-size: 13px;
  font-family: "Courier New", monospace;
  color: black;
  text-align: left;
  vertical-align: middle;
  border-bottom: 1px solid #00000044;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
