import PropTypes from "prop-types";
import UpdateForm from "../components/UpdateForm/UpdateForm";

const Update = ({
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
}) => {
  return (
    <div>
      <UpdateForm
        datas={datas}
        setDatas={setDatas}
        date={date}
        setDate={setDate}
        item={item}
        setItem={setItem}
        expense={expense}
        setExpense={setExpense}
        content={content}
        setContent={setContent}
      />
    </div>
  );
};

Update.propTypes = {
  datas: PropTypes.array,
  setDatas: PropTypes.func,
  date: PropTypes.string,
  setDate: PropTypes.func,
  item: PropTypes.string,
  setItem: PropTypes.func,
  expense: PropTypes.string,
  setExpense: PropTypes.func,
  content: PropTypes.string,
  setContent: PropTypes.func,
};

export default Update;
