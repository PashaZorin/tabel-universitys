//import './App.css';
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchDataGet } from "./store/todoSlice";

import FormSection from "./components/FormSection";
import TableSection from "./components/TableSection";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataGet());
  }, []);

  return (
    <section className="conteiner">
      <FormSection />
      <TableSection />
    </section>
  );
};

export default App;
