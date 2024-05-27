import PropTypes from "prop-types";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Home from "./pages/Home";
import Update from "./pages/Update";

function App() {
  const [date, setDate] = useState(`2024-01-01`);
  const [item, setItem] = useState("");
  const [expense, setExpense] = useState("");
  const [content, setContent] = useState("");
  const [datas, setDatas] = useState([
    {
      id: uuidv4(),
      date: "2023-01-04",
      item: "식비",
      expense: "12000",
      content: "지역 시장에서 식료품 구매",
    },
    {
      id: uuidv4(),
      date: "2023-01-14",
      item: "미용",
      expense: "20000",
      content: "미용실",
    },
    {
      id: uuidv4(),
      date: "2023-02-02",
      item: "여행",
      expense: "100000",
      content: "제주도 여행",
    },
    {
      id: uuidv4(),
      date: "2023-03-02",
      item: "공과금",
      expense: "30000",
      content: "전기 및 수도 요금을 지불",
    },
  ]);
  // console.log(setDatas);
  // console.log(typeof expense);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                datas={datas}
                setDatas={setDatas}
                date={date}
                setDate={setDate}
                item={item}
                setItem={setItem}
                expense={expense}
                setExpense={setExpense}
                content={content}
                setContent={setContent}
              />
            }
          />
          <Route
            path="/update"
            element={
              <Update
                datas={datas}
                setDatas={setDatas}
                date={date}
                setDate={setDate}
                item={item}
                setItem={setItem}
                expense={expense}
                setExpense={setExpense}
                content={content}
                setContent={setContent}
              />
            }
          />
          <Route
            path="/update/:id"
            element={
              <Update
                datas={datas}
                setDatas={setDatas}
                date={date}
                setDate={setDate}
                item={item}
                setItem={setItem}
                expense={expense}
                setExpense={setExpense}
                content={content}
                setContent={setContent}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
App.propTypes = {
  datas: PropTypes.array,
  setDatas: PropTypes.func,
  date: PropTypes.string,
  setDate: PropTypes.func,
  item: PropTypes.string,
  setItem: PropTypes.func,
  expense: PropTypes.string,
  setExpense: PropTypes.func,
  content: PropTypes.string,
  setContent: PropTypes.func,
};
export default App;
