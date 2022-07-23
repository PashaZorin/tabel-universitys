//import './App.css';
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchDataGet } from "./store/todoSlice";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataGet());
  }, []);

  return <section></section>;
};

export default App;
