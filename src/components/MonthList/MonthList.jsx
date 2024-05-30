import { useDispatch, useSelector } from "react-redux";
import { selectMonth } from "../../redux/slices/accountSlice";
import { MonthButton, MonthComponent } from "./MonthList.styled";

const months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

const MonthList = () => {
  const dispatch = useDispatch();
  const selectedMonth = useSelector((state) => state.account.selectedMonth);

  const handleChangeMonth = (month) => {
    // localStorage.setItem("selectedMonth", month);
    dispatch(selectMonth(month));
  };

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
