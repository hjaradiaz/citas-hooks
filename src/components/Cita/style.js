import styled from "styled-components";
import { sharedButtonStyle } from "../compartidoStyled";

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 18em;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid #eee;
  margin: 1em;
`;

export const CardHeader = styled.section`
  background-color: #ffffffb0;
  width: 100%;
  padding: 0.5em;
  border-bottom: 1px solid #e2e2e2;
`;

export const CardBody = styled.section`
  background-color: #fff;
  width: 100%;
  padding: 0.5em;
`;

export const ListaItems = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  padding: 0.5em;
  border-top: 1px solid #cbcbcb;
  :first-of-type {
    border-top: none;
  }
`;

export const CardFooter = styled.section`
  background-color: #ffffffb0;
  width: 100%;
  padding: 0.5em;
  border-top: 1px solid #e2e2e2;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.section`
  ${sharedButtonStyle};
`;