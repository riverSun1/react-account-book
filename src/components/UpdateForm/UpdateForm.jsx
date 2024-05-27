import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AccountContext } from "../../context/AccountContext";
import {
  BackButton,
  DeleteButton,
  UpdateButton,
  UpdateComponent,
  UpdateInput,
} from "./UpdateForm.styled";

const UpdateForm = () => {
  const { datas, setDatas } = useContext(AccountContext);

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
    // datas 배열에서 삭제하려는 데이터의 인덱스를 찾습니다.
    const index = datas.findIndex((data) => data.id === userInfo.id);

    if (index !== -1) {
      // 데이터가 존재하면 해당 데이터를 배열에서 제거합니다.
      const newDatas = datas.filter((data) => data.id !== userInfo.id);
      // 상태를 업데이트합니다.
      setDatas(newDatas);
      // 삭제가 완료되면 사용자를 이전 페이지로 이동시킵니다.
      navigate(-1);
    } else {
      // 데이터를 찾을 수 없는 경우의 처리
      console.error("삭제할 데이터를 찾을 수 없습니다.");
    }
  };

  const handleSubmit = () => {
    // 기존 datas 배열에서 수정하려는 데이터의 인덱스를 찾습니다.
    const index = datas.findIndex((data) => data.id === userInfo.id);
    // console.log(userInfo.id);
    // console.log(datas);
    if (index !== -1) {
      // 새로운 데이터 객체를 생성합니다.
      const newData = {
        ...datas[index],
        date: loDate,
        item: loItem,
        expense: loExpense,
        content: loContent,
      };
      // 기존 배열을 복사하고 해당 인덱스의 데이터를 업데이트합니다.
      const newDatas = [...datas];
      newDatas[index] = newData;
      // 상위 컴포넌트의 상태를 업데이트합니다.
      setDatas(newDatas);
      // 수정이 완료되면 사용자를 이전 페이지로 이동시킵니다.
      navigate(-1);
    } else {
      // 데이터를 찾을 수 없는 경우의 처리
      console.error("수정할 데이터를 찾을 수 없습니다.");
    }
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
        <UpdateButton type="button" onClick={handleSubmit}>
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
