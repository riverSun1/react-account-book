import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import {
  ListItem,
  NoListItem,
  PayListComponent,
  StyleText,
} from "./PayList.styled";

const PayList = ({ datas, selectedMonth }) => {
  const navigate = useNavigate();

  const handleUpdatePost = (data) => {
    navigate(`/update/${data.id}`, {
      state: {
        id: data.id,
        date: data.date,
        item: data.item,
        content: data.content,
        expense: data.expense,
      },
    });
  };

  // const allData = [...datas];
  // // console.log(allData);

  const filteredData = datas.filter((data) => {
    const dataMonth = data.date.split("-")[1];
    const zeroSelectedMonth =
      selectedMonth < 10 ? `0${selectedMonth}` : selectedMonth;
    return dataMonth === zeroSelectedMonth;
  });

  // console.log(filteredData);

  return (
    <PayListComponent>
      {filteredData.length > 0 ? (
        filteredData.map((data) => (
          <ListItem key={data.id} onClick={() => handleUpdatePost(data)}>
            <p>{data.date}</p>
            <p>
              {data.item} - {data.content}
            </p>
            <StyleText>{data.expense}원</StyleText>
          </ListItem>
        ))
      ) : (
        <NoListItem>지출이 없습니다.</NoListItem>
      )}
    </PayListComponent>
  );
};

PayList.propTypes = {
  datas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      // id: PropTypes.number,
      date: PropTypes.string,
      item: PropTypes.string,
      content: PropTypes.string,
      expense: PropTypes.string,
    })
  ).isRequired,
  selectedMonth: PropTypes.string,
};

export default PayList;
