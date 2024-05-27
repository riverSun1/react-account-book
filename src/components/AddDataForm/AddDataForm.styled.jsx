import styled from "styled-components";

export const InformComponent = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: bold;
  border: 1px solid #999999;
  color: black;
  background: #646464;
  padding: 0px 15px;
`;

export const LabelComponent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  min-width: 120px;
`;

export const InfromInput = styled.input`
  border-radius: 8px;
  padding: 8px 0px;
  text-align: center;
  margin: 5px;
  font-size: 1rem;
  border: 0;
`;

export const InformButton = styled.button`
  margin: 25px 10px;
  padding: 10px;
  border-radius: 8px;
  font-size: 1.4rem;
  border: 1px solid black;
  color: black;
  background: #e8344e;
  border: 0;
  cursor: pointer;
`;
