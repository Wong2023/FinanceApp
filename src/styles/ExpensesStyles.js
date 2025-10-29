import styled from "styled-components";

export const ContentArea = styled.div`
  background: #fff1e9;
  padding: 20px 30px;
  min-height: 96vh;
  font-family: "Courier New", monospace;
  border: 2px solid black;
  box-sizing: border-box;
  margin: 20px;
  overflow-x: hidden;

  @media (max-width: 1024px) {
    padding: 18px 20px;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

export const Header = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 24px;
  color: #000;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const TotalBox = styled.div`
  background: #ffdf00;
  box-shadow: 7px 7px 0px #000000cc;
  padding: 12px 18px;
  width: fit-content;
  margin: 0 0 20px 37px;

  @media (max-width: 768px) {
    margin: 0 auto 20px auto;
  }
`;

export const TotalTitle = styled.div`
  font-size: 15px;
  font-weight: bold;
  border-bottom: 2px solid black;
  padding-bottom: 4px;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const TotalAmount = styled.div`
  font-size: 22px;
  font-weight: 900;
  margin-top: 6px;

  @media (max-width: 480px) {
    font-size: 18px;
  }
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
  transition: 0.15s;

  &:hover {
    background: black;
    color: white;
  }

  &:active {
    box-shadow: none;
    transform: translate(2px, 2px);
  }

  @media (max-width: 480px) {
    font-size: 13px;
    padding: 6px 14px;
  }
`;

export const TabsRowContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
  position: relative;
`;

export const TabButtonsBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

export const TabButton = styled.button`
  font-family: "Courier New", monospace;
  font-size: 15px;
  font-weight: 600;
  background: #fbeee8;
  color: black;
  padding: 12px 0;
  border: 1.5px solid #000;
  cursor: pointer;
  box-shadow: 4px 4px 0 0 #000000cc;
  transition: background 0.2s ease;
  min-width: 180px;
  max-width: 220px;
  flex: 1 1 200px;

  &:hover {
    background: black;
    color: white;
  }

  &:active {
    box-shadow: none;
    transform: translate(2px, 2px);
  }

  @media (max-width: 480px) {
    font-size: 13px;
    min-width: 140px;
  }
`;

export const ActiveTabButton = styled(TabButton)`
  background: black;
  color: white;
`;

export const IconRow = styled.div`
  display: flex;
  gap: 7px;
  position: absolute;
  bottom: 100%;
  right: 0;
  transform: translateY(-10px);

  @media (max-width: 768px) {
    position: static;
    justify-content: center;
    margin-bottom: 10px;
    transform: none;
  }
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
  transition: 0.15s;

  &:hover {
    background: black;
    color: white;
  }

  &:active {
    box-shadow: none;
    transform: translate(2px, 2px);
  }

  @media (max-width: 480px) {
    font-size: 18px;
    padding: 3px 10px;
  }
`;

export const TableWrapper = styled.div`
  box-shadow: 10px 10px 0 0 #000000cc;
  background: #fbeee8;
  border: 1.5px solid black;
  padding: 12px 24px 24px 24px;
  margin-top: 20px;
  margin-left: 37px;
  margin-right: auto;
  width: 100%;
  max-width: 1250px;
  height: auto;
  overflow-x: auto;
  overflow-y: auto;

  @media (max-width: 768px) {
    margin-left: auto;
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 8px;
  }
`;

export const MonthYearRow = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 24px;
  justify-content: flex-end;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 10px;
  }
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

  option {
    font-family: "Courier New", monospace;
    font-weight: normal;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    padding: 5px 10px;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  min-width: 700px;

  @media (max-width: 768px) {
    min-width: 600px;
  }

  @media (max-width: 480px) {
    min-width: 500px;
  }
`;

export const TableHeader = styled.th`
  padding: 12px 16px;
  font-family: "Courier New", monospace;
  font-weight: 700;
  font-size: 13px;
  text-align: left;
  border-bottom: 2px solid black;
  user-select: none;

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 10px;
  }
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

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 10px 8px;
  }
`;
