import styled, { css } from "styled-components";

export const sharedInputStyle = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  display: block;
`;

export const Button = styled.button`
  background-color: #f7797d;
  color: #fff;
  display: block;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1em 2em;
`;

export const FormGroup = styled.div`
  flex: 0 0 ${(props) => (props.col === "1" ? 100 : 100 / props.col - 2)}%;
  @media (max-width: 600px) {
    flex: 0 0 100%;
  }
`;

export const StyleInput = styled.input`
  ${sharedInputStyle}
`;

export const Alert = styled.div`
  width: 100%;
  padding: 0.9em;
  background-color: #ffacac;
  border-radius: 5px;
  margin-bottom: 1em;
  color: #4d4d4d;
  font-weight: 700;
`;

export const StyleArea = styled.textarea`
  ${sharedInputStyle}
  height: 5em;
  resize: none;
`;
