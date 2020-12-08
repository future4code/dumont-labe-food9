import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const Checkboxs = () => {
  return (
    <FormControlLabel
      control={
        <Checkbox checked={""} onChange={""} name="checkedB" color="primary" />
      }
      label="Primary"
    />
  );
};

export default Checkboxs;
