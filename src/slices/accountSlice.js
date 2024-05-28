import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

// state init
const initialState = {
  datas: [
    {
      id: uuidv4(),
      date: "2023-01-04",
      item: "식비",
      expense: "12000",
      content: "지역 시장에서 식료품 구매",
    },
    {
      id: uuidv4(),
      date: "2023-01-14",
      item: "미용",
      expense: "20000",
      content: "미용실",
    },
    {
      id: uuidv4(),
      date: "2023-02-02",
      item: "여행",
      expense: "100000",
      content: "제주도 여행",
    },
    {
      id: uuidv4(),
      date: "2023-03-02",
      item: "공과금",
      expense: "30000",
      content: "전기 및 수도 요금을 지불",
    },
  ],
  selectedMonth: "1",
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    addAccount: (state, action) => {
      state.datas.push(action.payload);
    },
    updateAccount: (state, action) => {
      const index = state.datas.findIndex(
        (data) => data.id === action.payload.id
      );
      if (index !== -1) {
        state.datas[index] = {
          ...state.datas[index],
          ...action.payload,
        };
      }
    },
    deleteAccount: (state, action) => {
      state.datas = state.datas.filter((data) => data.id !== action.payload);
    },
    selectMonth: (state, action) => {
      state.selectedMonth = action.payload;
    },
  },
});

// export action creator
export const { addAccount, updateAccount, deleteAccount, selectMonth } =
  accountSlice.actions;
export default accountSlice.reducer;
