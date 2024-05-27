import styled from "styled-components";

export const UpdateComponent = styled.div`
  gap: 10px;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  align-items: center;
  margin: 30px;
  padding: 25px;
  text-align: start;
  border-radius: 8px;
  font-size: 1.3rem;
  border: 1px solid #999999;
  color: black;
  background: #646464;
`;

export const UpdateInput = styled.input`
  width: 100%;
  text-align: start;
  border: 0;
  border-radius: 8px;
  font-size: 1.3rem;
  padding: 10px;
`;

export const UpdateButton = styled.button`
  padding: 7px 10px;
  border-radius: 8px;
  font-size: 1.4rem;
  border: 1px solid #34e89d;
  color: black;
  background: #34e89d;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  margin: 10px;
  padding: 7px 10px;
  border-radius: 8px;
  font-size: 1.4rem;
  border: 1px solid #e8344e;
  color: black;
  background: #e8344e;
  cursor: pointer;
`;

export const BackButton = styled.button`
  padding: 7px 10px;
  border-radius: 8px;
  font-size: 1.4rem;
  border: 1px solid #e8c734;
  color: black;
  background: #e8c734;
  cursor: pointer;
`;
