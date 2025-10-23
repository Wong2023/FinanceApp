import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  background: #fff1e9; 
  border: 2px solid black;
  max-width: 1403px;
  height: 90.5vh;
  margin-top: 22px;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const FormBox = styled.div`
  background: #fceee8;
  border: 2px solid black;
  padding: 60px;
  width: 900px;
  margin-left: 190px;
  height: 450px;
  box-shadow: 3px 3px 0px #000;
  margin-top: 90px;
`;

export const FormRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  flex: 0 0 130px;
  font-size: 16px;
  font-weight: bold;
  text-align: right;   /* ✅ выравнивание по правому краю */
  margin-right: 25px;
  margin-left: 160px;
`;

export const Input = styled.input`
  background: #fceee8;
  border: 2px solid black;
  padding: 5px;
  font-size: 30px;
  width: 550px;
  margin-top: 5px;
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  gap: 10px;
`;

export const CancelButton = styled.button`
margin-top: 70px;
  border: 1px solid #333;
  background: #fff;
  padding: 6px 14px;
  width: 170px;
  cursor: pointer;
  box-shadow: 2px 2px 0px #000;

  &:hover {
      background: black;;
      color: white; 
    }

  &:active {
    box-shadow: none;
    transform: translate(2px, 2px);
  }
`;

export const SaveButton = styled.button`
margin-top: 70px;
  border: 1px solid #000;
  background: #000;
  color: #fff;
  padding: 6px 16px;
  width: 250px;
  height: 40px;
  cursor: pointer;
  box-shadow: 2px 2px 0px #000;

  &:hover {
      background: white;;
      color: black; 
    }

  &:active {
    box-shadow: none;
    transform: translate(2px, 2px);
  }
`;
