import styled from "styled-components";

export const MonthComponent = styled.div`
  margin: 25px 0px;
  padding: 10px 10px;
  border-radius: 8px;
  font-size: 1.6rem;
  line-height: 1.5;
  border: 1px solid #999999;
  background: #646464;
`;

export const MonthButton = styled.button`
  margin: 10px;
  flex-wrap: wrap;
  width: 60px;
  padding: 7px;
  border-radius: 8px;
  font-size: 1.2rem;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  /* 활성화된 상태일 때의 스타일 */
  color: ${(props) => (props.$isActive ? "white" : "black")};
  background: ${(props) => (props.$isActive ? "#e8344e" : "#f6f7fa")};
  border: 0;
  cursor: pointer;
`;
