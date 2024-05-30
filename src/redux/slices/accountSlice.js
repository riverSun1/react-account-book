import { createSlice } from "@reduxjs/toolkit";

// state init
const initialState = {
  datas: [
    {
      id: "25600f72-56b4-41a7-a9c2-47358580e2f8",
      date: "2024-01-04",
      item: "식비",
      expense: "12000",
      content: "지역 시장에서 식료품 구매",
    },
    {
      id: "25600f72-53b4-4187-a9c2-47358580e2f8",
      date: "2024-01-14",
      item: "미용",
      expense: "30000",
      content: "미용실",
    },
    {
      id: "4f60bace-03dc-458d-b0dc-d89ada034b29",
      date: "2024-01-16",
      item: "도서",
      expense: "40500",
      content: "모던 자바스크립트",
    },
    {
      id: "52f8e60d-5998-4f82-961d-4ab0cb3f26b1",
      date: "2024-01-20",
      item: "간식",
      expense: "15000",
      content: "아이스크림",
    },
    {
      id: "24310f72-56b4-41a7-a9c2-458580ef1f8",
      date: "2024-02-02",
      item: "여행",
      expense: "100000",
      content: "제주도 여행",
    },
    {
      id: "25600f72-99b4-41z7-e4h6-47312365e2f8",
      date: "2024-02-06",
      item: "공과금",
      expense: "40000",
      content: "전기 및 수도 요금을 지불",
    },
  ],
  selectedMonth: "1",
  // selectedMonth: localStorage.getItem("selectedMonth") || "1",
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