// ✅ src/styles/calendar.js
import styled from "styled-components";

/* Базовая раскладка */
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
  gap: 20px;
  margin: 20px;
  font-family: "Courier New", monospace;
`;

export const Title = styled.h1`
  font-size: 26px;
  font-weight: bold;
  margin: 0;
  font-family: "Courier New", monospace;
`;

/* Верхний ряд: узкая левая колонка + большой календарь справа */
export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 360px; /* левая часть заметно уже */
  gap: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-left: -70px;
`;

/* Карточки форм */
export const FormCard = styled.div`
  background: #f8f6f4;
  border: 2px solid black;
  box-shadow: 3px 3px 0 black;
  padding: 16px;
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-top: 6px;
`;

export const Input = styled.input`
  background: #f1eded;
  border: 2px solid black;
  box-shadow: 2px 2px 0 black;
  padding: 8px 10px;
  font-family: "Courier New", monospace;
  font-size: 14px;
  outline: none;
  transition: transform 0.05s ease;
`;

export const DateInline = styled(Input).attrs({ type: "date" })``;

export const Select = styled.select`
  background: #f1eded;
  border: 2px solid black;
  box-shadow: 2px 2px 0 black;
  padding: 8px 10px;
  font-family: "Courier New", monospace;
  font-size: 14px;
  outline: none;
  cursor: pointer;
`;

export const Button = styled.button`
  margin-top: 10px;
  background: #f1eded;
  border: 2px solid black;
  box-shadow: 3px 3px 0 black;
  padding: 10px 12px;
  cursor: pointer;
  font-family: "Courier New", monospace;
  font-size: 16px;
  transition: all 0.1s ease;

  &:hover {
    background: black;
    color: white;
  }
  &:active {
    box-shadow: none;
    transform: translate(2px, 2px);
  }
`;

/* ——— ПРАВАЯ ПАНЕЛЬ: БОЛЬШОЙ КАЛЕНДАРЬ ——— */
export const CalendarPanel = styled.div`
  background: #f8f6f4;
  border: 2px solid black;
  box-shadow: 3px 3px 0 black;
  /* margin-left: 100px; */
  width: 900px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  height: 740px;
`;

export const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid black;
  background: #ffe600;
  padding: 10px 12px;
  margin-bottom: 12px;
`;

export const YearNav = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const YearButton = styled.button`
  background: #f1eded;
  border: 2px solid black;
  box-shadow: 2px 2px 0 black;
  padding: 6px 10px;
  cursor: pointer;
  font-family: "Courier New", monospace;
  &:hover { background: black; color: white; }
  &:active { box-shadow: none; transform: translate(1px, 1px); }
`;

export const YearTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
`;

export const MiniNote = styled.div`
  font-size: 14px;
`;

export const MonthBack = styled.button`
  background: #f1eded;
  border: 2px solid black;
  box-shadow: 2px 2px 0 black;
  padding: 6px 10px;
  cursor: pointer;
  font-family: "Courier New", monospace;
  &:hover { background: black; color: white; }
  &:active { box-shadow: none; transform: translate(1px, 1px); }
`;

export const MonthsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const MonthCard = styled.div`
  border: 2px solid black;
  background: white;
  box-shadow: 2px 2px 0 black;
  padding: 14px;
  height: 50px;
  cursor: pointer;
  transition: transform 0.05s ease;

  &:hover { transform: translate(-1px, -1px); background: #fffbe6; }
  &:active { transform: translate(0, 0); }
`;

export const MonthName = styled.div`
  font-weight: bold;
  text-align: center;
`;

export const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 6px;
`;

export const DayName = styled.div`
  font-weight: bold;
  text-align: center;
  padding: 6px 0;
  border-bottom: 2px dashed #000;
`;

export const DayCell = styled.div`
  height: 76px;
  border: 2px solid black;
  background: white;
  box-shadow: 2px 2px 0 black;
  padding: 6px;
  position: relative;
  cursor: pointer;

  &[data-empty="1"] {
    background: #f1eded;
    cursor: default;
  }

  &:hover {
    background: #fffbe6;
  }
`;

export const DayNumber = styled.div`
  font-weight: bold;
  margin-bottom: 4px;
`;

/* контейнер для точек (без текста задач) */
export const DayDots = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`;

export const DayDot = styled.span`
  display: inline-block;
  width: 6px;
  height: 6px;
  border: 2px solid #000;
  box-shadow: 1px 1px 0 #000;
  border-radius: 50%;
`;

/* ——— СПИСОК СОБЫТИЙ — теперь расположен в левой колонке ниже форм ——— */
export const EventsCard = styled.div`
  background: #f8f6f4;
  border: 2px solid black;
  box-shadow: 3px 3px 0 black;
  padding: 0;
  display: flex;
  flex-direction: column;
  width: 435px;
`;

export const EventsHeader = styled.div`
  background: #ffe600;
  border-bottom: 2px solid black;
  padding: 10px 14px;
  font-weight: bold;
`;

export const EventsList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 8px;

  /* скролл ровно в списке после ~5 задач */
  max-height: 275px;
  overflow-y: auto;

  scrollbar-width: thin;
  scrollbar-color: #000 #f8f6f4;

  &::-webkit-scrollbar { width: 10px; }
  &::-webkit-scrollbar-track {
    background: #f8f6f4;
    border-left: 2px solid #000;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffe600;
    border: 2px solid #000;
    box-shadow: inset 0 0 0 1px #ffe600;
  }
  &::-webkit-scrollbar-thumb:hover { background: #000; border-color: #000; }
`;

export const EventItem = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px;
  align-items: start;
  border: 2px solid black;
  background: #fff;
  padding: 10px;
  box-shadow: 2px 2px 0 black;

  &[data-overdue="1"] {
    border-left: 8px solid #ef476f;
    background: #fff7f8;
  }
`;

export const EventTitle = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

export const EventMeta = styled.div`
  opacity: 0.9;
  font-size: 14px;
  margin-top: 2px;
`;

export const EventActions = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  margin-top: 6px;
`;

export const SmallButton = styled.button`
  background: #f1eded;
  border: 2px solid black;
  box-shadow: 2px 2px 0 black;
  padding: 6px 10px;
  cursor: pointer;
  font-family: "Courier New", monospace;
  font-size: 14px;
  transition: all 0.1s ease;

  &:hover { background: black; color: white; }
  &:active { box-shadow: none; transform: translate(1px, 1px); }
`;

export const EditRow = styled.div`
  display: flex;
  flex-direction: column; /* теперь редактирование идёт по вертикали */
  gap: 10px;
  align-items: stretch;
  width: 100%;
  box-sizing: border-box;
`;

export const FilterRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;

  @media (width: 920px) {
    grid-template-columns: 1fr;
  }
`;

export const SearchInput = styled(Input)`
  width: 60%;
`;

/* Тосты справа снизу */
export const ToastStack = styled.div`
  position: fixed;
  right: 28px;
  bottom: 28px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 9999;
`;

export const ToastItem = styled.div`
  position: relative;
  min-width: 260px;
  max-width: 360px;
  background: #000;
  color: #fff;
  border: 2px solid #000;
  box-shadow: 4px 4px 0 #000;
  padding: 12px 40px 12px 12px;
  font-family: "Courier New", monospace;
`;

export const ToastTitle = styled.div`
  font-weight: bold;
  margin-bottom: 4px;
  color: #ffe600;
`;

export const ToastClose = styled.button`
  position: absolute;
  right: 8px;
  top: 6px;
  width: 28px;
  height: 28px;
  line-height: 24px;
  background: #ffe600;
  color: #000;
  border: 2px solid #000;
  box-shadow: 2px 2px 0 #000;
  font-weight: bold;
  cursor: pointer;

  &:hover { background: #000; color: #ffe600; }
  &:active { box-shadow: none; transform: translate(1px, 1px); }
`;

export const EmptyState = styled.div`
  padding: 20px;
  text-align: center;
  color: #333;
`;
