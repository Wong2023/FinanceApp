import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  background: white;
  padding: 16px;
  box-shadow: 3px 3px 0 black;
  min-width: 280px;
`;

export const Title = styled.div`
  font-weight: bold;
  margin-bottom: 12px;
  font-size: 18px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Tr = styled.tr``;

export const Td = styled.td`
  padding: 6px 8px;
  font-size: 14px;
  border-bottom: 1px solid #eee;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  padding: 6px 0;
  border-bottom: 1px solid #ddd;
  font-size: 14px;
`;