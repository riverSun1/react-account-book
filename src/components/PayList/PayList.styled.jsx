import styled from "styled-components";

export const PayListComponent = styled.div`
  padding: 10px;
  border-radius: 8px;
  font-size: 1.6rem;
  border: 1px solid #999999;
  color: black;
  background: #646464;
  margin: 25px 0px;
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px;
  flex-wrap: wrap;
  padding: 8px;
  border-radius: 8px;
  font-size: 1.2rem;
  border: 0;
  color: black;
  background: #f6f7fa;
  cursor: pointer;
`;

export const NoListItem = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.3rem;
  font-weight: bold;
`;

export const StyleText = styled.div`
  color: #e8344e;
  font-weight: bold;
`;
