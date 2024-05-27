import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { AccountContext } from "../../context/AccountContext";
import {
  InformButton,
  InformComponent,
  InfromInput,
  LabelComponent,
} from "./AddDataForm.styled";

const AddDataForm = () => {
  const {
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
  } = useContext(AccountContext);

  const handleAdd = (newSpendings) => {
    setDatas([...datas, newSpendings]);
    setDate("");
    setItem("");
    setExpense("");
    setContent("");
  };
  const handleSubmit = () => {
    handleAdd({
      date: date,
      item: item,
      expense: expense,
      content: content,
      id: uuidv4(),
    });
  };

  return (
    <div>
      <InformComponent>
        <LabelComponent>
          <label htmlFor="inputDate">날짜 </label>
          <InfromInput
            type="text"
            id="inputDate"
            placeholder="지출 날짜"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </LabelComponent>
        <LabelComponent>
          <label htmlFor="inputItem"> 항목 </label>
          <InfromInput
            type="text"
            id="inputItem"
            placeholder="지출 항목"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
        </LabelComponent>
        <LabelComponent>
          <label htmlFor="inputExpense"> 금액 </label>
          <InfromInput
            type="text"
            id="inputExpense"
            placeholder="지출 금액"
            value={expense}
            onChange={(e) => setExpense(e.target.value)}
          />
        </LabelComponent>
        <LabelComponent>
          <label htmlFor="inputContent"> 내용 </label>
          <InfromInput
            type="text"
            id="inputContent"
            placeholder="지출 내용"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </LabelComponent>
        <InformButton type="button" onClick={handleSubmit}>
          저장
        </InformButton>
      </InformComponent>
      {/* {console.log(datas)} */}
    </div>
  );
};

export default AddDataForm;
