import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Pending = () => {
  return (
    <div className="pending__conteiner">
      <CircularProgress className="pending" />
    </div>
  );
};

export default Pending;
