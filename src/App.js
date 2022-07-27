//import './App.css';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataGet } from "./store/todoSlice";

import FormSection from "./components/FormSection";
import TableSection from "./components/TableSection";
import Pending from "./components/Pending";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataGet());
  }, []);

  const table = useSelector((state) => state.todos.usersChoice);
  const { pending } = useSelector((state) => state.todos);

  return (
    <div>
      {pending && <Pending />}
      <section className="conteiner">
        <FormSection />
        {table.length > 0 && <TableSection />}
      </section>
    </div>
  );
};

export default App;
