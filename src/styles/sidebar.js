import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 220px;
  padding: 20px 10px;
  background: #6ce1d1;
  font-family: "Courier New", monospace;
  position: relative;
`;

export const SidebarIcon = styled.img`
  display: block;
  margin: 40px auto 60px auto; /* сверху по центру + отступ снизу */
  width: 90px;
  height: 90px;
`;

export const MenuBlock = styled.div`
  position: relative;
  background: black;
  margin-bottom: 16px;
  transition: margin-bottom 0.3s ease;
  padding-bottom: ${(props) =>
    props.expanded || props.isDashboard ? "8px" : "0"};
  border: 2px solid black;
  box-shadow: 4px 4px 0px #000;
`;

export const Title = styled.div`
  background: #ffe600;
  padding: 10px 14px;
  font-weight: bold;
  color: black;
  cursor: pointer;
  border-bottom: 2px solid black;
`;

export const Dropdown = styled.div`
  overflow: hidden;
  max-height: ${(props) =>
    props.isDashboard ? "none" : props.show ? "600px" : "0"};
  transition: max-height 0.35s ease-in-out;
  background: black;
`;

export const DropdownItem = styled.div`
  padding: 10px 16px;
  color: ${(props) => (props.orange ? "#ffb400" : "white")};
  font-weight: ${(props) => (props.isCurrent ? "bold" : "normal")};
  border-bottom: 1px solid #333;
  transition: background 0.2s;
  cursor: pointer;

  &:hover {
    background: #222;
  }
`;
