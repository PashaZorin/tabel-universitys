import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDataGet = createAsyncThunk(
  "todos/fetchDataGet",

  async function (action, { rejectWithValue }) {
    try {
      const response = await fetch("http://localhost:3000/Data.json");
      const data = await response.json();

      if (!data.ok) return data;
    } catch (error) {
      rejectWithValue(error.messege);
    }
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    list: [],
    usersChoice: [],
    pending: false,
    disabledBtn: false,
  },
  reducers: {
    usersChoice(state, action) {
      const res = state.list.filter(
        (item) => item.country === action.payload.country
      );
      state.usersChoice = [...res];
    },
    usersChecked(state, action) {
      const res = state.usersChoice.filter((item) => {
        if (item.id === action.payload) {
          return (item.checked = !item.checked);
        } else return item;
      });
      state.usersChoice = [...res];
    },
  },
  extraReducers: {
    [fetchDataGet.pending]: (state, action) => ({
      ...state,
      pending: true,
      disabledBtn: true,
    }),
    [fetchDataGet.fulfilled]: (state, action) => {
      const res = action.payload.map((el, index) => {
        return { ...el, checked: false, id: index };
      });
      return {
        ...state,
        pending: false,
        list: [...res],
        disabledBtn: false,
      };
    },
    [fetchDataGet.rejected]: (state, action) =>
      console.log(action.payload, "rejected"),
  },
});
export const { usersChoice, usersChecked } = todoSlice.actions;
export default todoSlice.reducer;
