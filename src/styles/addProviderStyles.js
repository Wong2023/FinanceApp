import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  background: #fff1e9;
  border: 2px solid black;
  max-width: 1400px;
  min-height: 95vh;
  margin: 22px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    max-width: 95%;
    padding: 16px;
  }

  @media (max-width: 768px) {
    border-width: 1.5px;
    padding: 14px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const Title = styled.h2`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 25px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const FormBox = styled.div`
  background: #fceee8;
  border: 2px solid black;
  box-shadow: 3px 3px 0px #000;
  width: 900px;
  max-width: 90%;
  padding: 50px 60px;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding: 40px;
    margin-top: 50px;
  }

  @media (max-width: 768px) {
    padding: 25px;
    margin-top: 30px;
    box-shadow: 2px 2px 0 #000;
  }

  @media (max-width: 480px) {
    padding: 18px;
  }
`;

export const FormRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    margin-bottom: 15px;
  }
`;

export const Label = styled.label`
  width: 130px;
  font-size: 16px;
  font-weight: bold;
  text-align: right;
  margin-right: 25px;
  color: #000;

  @media (max-width: 1024px) {
    width: 110px;
    font-size: 15px;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
    margin-right: 0;
    margin-bottom: 6px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Input = styled.input`
  background: #fceee8;
  border: 2px solid black;
  padding: 8px 10px;
  font-size: 18px;
  width: 550px;
  max-width: 100%;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    font-size: 17px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 7px 9px;
  }

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
    margin-top: 30px;
  }
`;

export const CancelButton = styled.button`
  border: 1px solid #333;
  background: #fff;
  padding: 8px 16px;
  width: 160px;
  height: 40px;
  cursor: pointer;
  box-shadow: 2px 2px 0px #000;
  font-family: "Courier New", monospace;
  font-weight: bold;
  transition: 0.1s ease;

  &:hover {
    background: black;
    color: white;
  }

  &:active {
    box-shadow: none;
    transform: translate(2px, 2px);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SaveButton = styled.button`
  border: 1px solid #000;
  background: #000;
  color: #fff;
  padding: 8px 16px;
  width: 220px;
  height: 40px;
  cursor: pointer;
  box-shadow: 2px 2px 0px #000;
  font-family: "Courier New", monospace;
  font-weight: bold;
  transition: 0.1s ease;

  &:hover {
    background: white;
    color: black;
  }

  &:active {
    box-shadow: none;
    transform: translate(2px, 2px);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
