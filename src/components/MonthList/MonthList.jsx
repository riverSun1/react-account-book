import { useContext } from "react";
import { AccountContext } from "../../context/AccountContext";
import { MonthButton, MonthComponent } from "./MonthList.styled";

const months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

const MonthList = () => {
  const { selectedMonth, setSelectedMonth } = useContext(AccountContext);

  const handleChangeMonth = (month) => {
    setSelectedMonth(month);
  };
  // console.log("MonthList => ", selectedMonth);
  return (
    <MonthComponent>
      <div>
        {months.map((month) => (
          <MonthButton
            key={month}
            $isActive={month === selectedMonth}
            onClick={() => handleChangeMonth(month)}
          >
            {month}월
          </MonthButton>
        ))}
      </div>
    </MonthComponent>
  );
};

export default MonthList;
