import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const GreenCheckbox = withStyles({
  root: {
    color: "green[400]",
    "&$checked": {
      color: "green[600]",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const Checkboxs = (props) => {
  const [state, setState] = useState({
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormControlLabel
      control={
        <GreenCheckbox
          checked={state.checkedG}
          onChange={handleChange}
          name="checkedG"
          style={{ color: "green" }}
        />
      }
      label={props.name}
    />
  );
};

export default Checkboxs;
