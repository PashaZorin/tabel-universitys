import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDataGet = createAsyncThunk(
  "todos/fetchDataGet",

  async function (action, { rejectWithValue }) {
    try {
      const respons = await fetch(`${action}`);
      const data = await respons.json();
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
    pending: false,
    disabledBtn: false,
  },
  reducers: {
    getTodos(state, action) {
      state.todos.push(action.payload);
    },
  },
  extraReducers: {
    [fetchDataGet.pending]: (state, action) => ({
      ...state,
      pending: true,
      disabledBtn: true,
    }),
    [fetchDataGet.fulfilled]: (state, action) => {
      return {
        ...state,
        pending: false,
        list: [...action.payload],
        disabledBtn: false,
      };
    },
    [fetchDataGet.rejected]: (state, action) =>
      console.log(action.payload, "rejected"),
  },
});
export const { getTodos } = todoSlice.actions;
export default todoSlice.reducer;
