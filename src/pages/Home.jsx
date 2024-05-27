import AddDataForm from "../components/AddDataForm/AddDataForm";
import Graph from "../components/Graph/Graph";
import MonthList from "../components/MonthList/MonthList";
import PayList from "../components/PayList/PayList";

const Home = () => {
  return (
    <div>
      <h1 style={{ color: "#f6f7fa" }}>💸가계부💰</h1>
      <AddDataForm />
      <MonthList />
      <Graph />
      <PayList />
    </div>
  );
};

export default Home;
