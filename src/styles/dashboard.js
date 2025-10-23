import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background: #6ce1d1;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
  position: relative;
  background-color: #fff1e9;
  border: 2px solid black;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-top: 20px;
  margin-right: 20px;
`;

export const Title = styled.h1`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 20px;
  font-family: "Courier New", monospace;
`;

export const Row = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
`;

export const Tables = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const AddButtonWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const AddButton = styled.button`
  background: #f1ededff;
  border: 2px solid black;
  box-shadow: 3px 3px 0 black;
  padding: 8px 12px;
  cursor: pointer;
  font-family: "Courier New", monospace;
  font-size: 16px;
  position: relative;
  z-index: 11;
  transition: all 0.1s ease;
  width: 160px;

  &:hover {
    background: black;
    color: white; 
  }

  &:active {
    box-shadow: none;
    transform: translate(2px, 2px);
  }
`;

export const LanguageButtonsWrapper = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 8px;
`;

export const LangButton = styled.button`
  background: #f1eded;
  border: 2px solid black;
  box-shadow: 2px 2px 0 black;
  padding: 4px 10px;
  font-family: "Courier New", monospace;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.1s ease;

  &:hover {
    background: black;
    color: white;
  }

  &:active {
    box-shadow: none;
    transform: translate(1px, 1px);
  }
`;

export const DropdownMenu = styled.div`
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease, transform 0.25s ease;
  position: absolute;
  top: 110%;
  right: 0;
  width: 160px;
  background: black;
  color: white;
  box-shadow: 3px 3px 0 black;
  font-family: "Courier New", monospace;
  font-size: 18px;
  text-align: center;
  padding: 8px 0;
  z-index: 10;
  transform: translateY(-20px);
`;

export const DropdownItem = styled.div`
  padding: 10px 0;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background: #292929;
    color: #6ce1d1;
  }
`;

export const LogoutButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: #f1eded;
  border: 2px solid black;
  box-shadow: 3px 3px 0 black;
  padding: 8px 16px;
  cursor: pointer;
  font-family: "Courier New", monospace;
  font-size: 16px;
  transition: all 0.15s ease;

  &:hover {
    background: black;
    color: white;
  }

  &:active {
    box-shadow: none;
    transform: translate(2px, 2px);
  }
`;
