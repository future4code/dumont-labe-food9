import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "300px",
    border: "1px solid var(--main)",
  },
}));

export default function InputForm() {
  const classes = useStyles();
  return (
    <TextField
      className={classes.textField}
      id="outlined-search"
      label="Search field"
      type="search"
      variant="outlined"
    />
  );
}
