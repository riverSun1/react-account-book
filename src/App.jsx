import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import { AccountContext } from "./context/AccountContext";
import Home from "./pages/Home";
import Update from "./pages/Update";

function App() {
  const [date, setDate] = useState(`2024-01-01`);
  const [item, setItem] = useState("");
  const [expense, setExpense] = useState("");
  const [content, setContent] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("1");
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

  return (
    <AccountContext.Provider
      value={{
        date,
        setDate,
        item,
        setItem,
        expense,
        setExpense,
        content,
        setContent,
        datas,
        setDatas,
        selectedMonth,
        setSelectedMonth,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/update" element={<Update />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </AccountContext.Provider>
  );
}

export default App;
