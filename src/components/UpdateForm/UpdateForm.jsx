import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { deleteAccount, updateAccount } from "../../slices/accountSlice";
import {
  BackButton,
  DeleteButton,
  UpdateButton,
  UpdateComponent,
  UpdateInput,
} from "./UpdateForm.styled";

const UpdateForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const userInfo = { ...location.state };

  const [loDate, setLoDate] = useState(userInfo.date);
  const [loItem, setLoItem] = useState(userInfo.item);
  const [loExpense, setLoExpense] = useState(userInfo.expense);
  const [loContent, setLoContent] = useState(userInfo.content);

  const handleBack = () => {
    navigate(-1);
  };

  const handleDelete = () => {
    dispatch(deleteAccount(userInfo.id));
    navigate(-1);
  };

  const handleUpdate = () => {
    const updatedData = {
      id: userInfo.id,
      date: loDate,
      item: loItem,
      expense: loExpense,
      content: loContent,
    };
    dispatch(updateAccount(updatedData));
    navigate(-1);
  };
  return (
    <div>
      <UpdateComponent>
        <label htmlFor="inputDate">날짜 </label>
        <UpdateInput
          type="text"
          id="inputDate"
          value={loDate}
          onChange={(e) => setLoDate(e.target.value)}
        />
        <label htmlFor="inputItem"> 항목 </label>
        <UpdateInput
          type="text"
          id="inputItem"
          value={loItem}
          onChange={(e) => setLoItem(e.target.value)}
        />
        <label htmlFor="inputExpense"> 금액 </label>
        <UpdateInput
          type="text"
          id="inputExpense"
          value={loExpense}
          onChange={(e) => setLoExpense(e.target.value)}
        />
        <label htmlFor="inputContent"> 내용 </label>
        <UpdateInput
          type="text"
          id="inputContent"
          value={loContent}
          onChange={(e) => setLoContent(e.target.value)}
        />
        <UpdateButton type="button" onClick={handleUpdate}>
          수정
        </UpdateButton>
        <DeleteButton type="button" onClick={handleDelete}>
          삭제
        </DeleteButton>
        <BackButton type="button" onClick={handleBack}>
          뒤로 가기
        </BackButton>
      </UpdateComponent>
    </div>
  );
};

export default UpdateForm;
