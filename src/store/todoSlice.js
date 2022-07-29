import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { array } from "yup";

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
        (item) =>
          item.country ===
          action.payload.country
            .split(/\s+/)
            .map((word) => word[0].toUpperCase() + word.substring(1))
            .join(" ")
      );
      state.usersChoice = [...res];
    },
    togglePending(state, action) {
      state.pending = !state.pending;
    },

    usersChecked(state, action) {
      const localSt = JSON.parse(localStorage.getItem("usersChoice")) || [];
      console.log(localSt, "localSt");
      let newLocalSt = [];
      if (localSt.length > 0) {
        localSt.forEach((el) => {
          if (el.id === action.payload.id) {
            console.log(action.payload, "action.payload");
            newLocalSt = localSt.filter(
              (el) => el.name !== action.payload.name
            );
            localStorage.setItem(usersChoice, JSON.stringify(newLocalSt));
          } else {
            newLocalSt.push(action.payload);
            localStorage.setItem("usersChoice", JSON.stringify(newLocalSt));
          }
        });
      } else {
        localStorage.setItem("usersChoice", JSON.stringify([action.payload]));
      }

      const res = state.usersChoice.filter((item) => {
        if (item.id === action.payload.id) {
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
        usersChoice: JSON.parse(localStorage.getItem("usersChoice")),
        disabledBtn: false,
      };
    },
    [fetchDataGet.rejected]: (state, action) => {
      console.log(action.payload, "rejected");
      return { ...state, panding: false };
    },
  },
});
export const { usersChoice, usersChecked, togglePending } = todoSlice.actions;
export default todoSlice.reducer;
