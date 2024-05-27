import PropTypes from "prop-types";
import { useState } from "react";
import AddDataForm from "../components/AddDataForm/AddDataForm";
import Graph from "../components/Graph/Graph";
import MonthList from "../components/MonthList/MonthList";
import PayList from "../components/PayList/PayList";

const Home = ({
  datas,
  setDatas,
  date,
  setDate,
  item,
  setItem,
  expense,
  setExpense,
  content,
  setContent,
}) => {
  const [selectedMonth, setSelectedMonth] = useState("1");

  return (
    <div>
      <h1 style={{ color: "#f6f7fa" }}>💸가계부💰</h1>
      <AddDataForm
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
      <MonthList
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />
      <Graph datas={datas} selectedMonth={selectedMonth} />
      <PayList datas={datas} selectedMonth={selectedMonth} />
      {/* {console.log(setDatas)} */}
    </div>
  );
};

Home.propTypes = {
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
  selectedMonth: PropTypes.string,
};

export default Home;
