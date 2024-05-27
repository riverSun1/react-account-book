import { useContext } from "react";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import { AccountContext } from "../../context/AccountContext";
import { GraphComponent } from "./Graph.styled";

const COLOR = ["#3d6aff", "#24c459", "#fff458", "#e8344e"];

const Graph = () => {
  const { selectedMonth, datas } = useContext(AccountContext);
  const filteredData = datas.filter((data) => {
    const dataMonth = data.date.split("-")[1];
    const zeroSelectedMonth =
      selectedMonth < 10 ? `0${selectedMonth}` : selectedMonth;
    return dataMonth === zeroSelectedMonth;
  });

  // 데이터를 숫자로 변환
  const formattedData = filteredData.map((data) => ({
    ...data,
    expense: Number(data.expense),
  }));

  return (
    <GraphComponent>
      {filteredData.length > 0 ? (
        <div>
          {`${selectedMonth}월의 지출`}
          <PieChart width={500} height={350}>
            <Pie
              data={formattedData}
              dataKey={formattedData.length > 0 ? "expense" : "0"}
              nameKey={formattedData.length > 0 ? "item" : "0"}
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
              fill="#8884d8"
            >
              {filteredData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLOR[index % COLOR.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      ) : (
        <div>지출이 없습니다.</div>
      )}
    </GraphComponent>
  );
};

export default Graph;
