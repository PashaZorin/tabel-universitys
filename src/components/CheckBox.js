import React from "react";
import Checkbox from "@mui/material/Checkbox";

const CheckBox = ({ color, handleChange, checked }) => {
  return (
    <div>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
        sx={{
          color: { color },
          "&.Mui-checked": {
            color: { color },
          },
        }}
      />
    </div>
  );
};

export default CheckBox;
