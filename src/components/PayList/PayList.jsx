import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AccountContext } from "../../context/AccountContext";
import {
  ListItem,
  NoListItem,
  PayListComponent,
  StyleText,
} from "./PayList.styled";

const PayList = () => {
  const navigate = useNavigate();
  const { datas, selectedMonth } = useContext(AccountContext);
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

  const filteredData = datas.filter((data) => {
    const dataMonth = data.date.split("-")[1];
    const zeroSelectedMonth =
      selectedMonth < 10 ? `0${selectedMonth}` : selectedMonth;
    return dataMonth === zeroSelectedMonth;
  });

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

export default PayList;
