import styled, { createGlobalStyle } from "styled-components";

// Общий фон, цвет меняется через проп bgColor
export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.bgColor || "#6ce1d1"};
  z-index: -1; /* ← чтобы всегда был за контентом */
`;



// Отключение прокрутки
export const NoScroll = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    overflow: hidden !important;
    height: 100vh;
    width: 100vw;
  }
`;
