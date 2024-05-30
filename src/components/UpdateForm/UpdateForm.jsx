import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { deleteAccount, updateAccount } from "../../redux/slices/accountSlice";
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

  // const [loDate, setLoDate] = useState(userInfo.date);
  // const [loItem, setLoItem] = useState(userInfo.item);
  // const [loExpense, setLoExpense] = useState(userInfo.expense);
  // const [loContent, setLoContent] = useState(userInfo.content);

  const dateRef = useRef(null);
  const itemRef = useRef(null);
  const expenseRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    dateRef.current.value = userInfo.date;
    itemRef.current.value = userInfo.item;
    expenseRef.current.value = userInfo.expense;
    contentRef.current.value = userInfo.content;
  }, [userInfo]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleDelete = () => {
    dispatch(deleteAccount(userInfo.id));
    navigate(-1);
  };

  const handleUpdate = () => {
    const date = dateRef.current.value;
    const item = itemRef.current.value;
    const expense = expenseRef.current.value;
    const content = contentRef.current.value;

    // 유효성 검사
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!datePattern.test(date)) {
      alert("날짜를 YYYY-MM-DD 형식으로 입력해주세요.");
      return;
    }
    if (!item || parseFloat(expense) <= 0) {
      alert("유효한 항목과 금액을 입력해주세요.");
      return;
    }
    const updatedData = {
      id: userInfo.id,
      date: date,
      item: item,
      expense: expense,
      content: content,
    };
    dispatch(updateAccount(updatedData));
    navigate(-1);
  };

  return (
    <div>
      <UpdateComponent>
        <label htmlFor="inputDate">날짜 </label>
        <UpdateInput type="text" id="inputDate" ref={dateRef} />
        <label htmlFor="inputItem"> 항목 </label>
        <UpdateInput type="text" id="inputItem" ref={itemRef} />
        <label htmlFor="inputExpense"> 금액 </label>
        <UpdateInput type="text" id="inputExpense" ref={expenseRef} />
        <label htmlFor="inputContent"> 내용 </label>
        <UpdateInput type="text" id="inputContent" ref={contentRef} />
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
