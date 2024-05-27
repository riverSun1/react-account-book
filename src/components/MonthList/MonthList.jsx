import PropTypes from "prop-types";
import { MonthButton, MonthComponent } from "./MonthList.styled";

const months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

const MonthList = ({ selectedMonth, setSelectedMonth }) => {
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

MonthList.propTypes = {
  selectedMonth: PropTypes.string,
  setSelectedMonth: PropTypes.func,
};

export default MonthList;
