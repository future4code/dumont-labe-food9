import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "300px",
  },
}));

export default function InputForm(props) {
  const classes = useStyles();
  return (
    <TextField
      className={classes.textField}
      id="outlined-search"
      label={props.label}
      type={props.type}
      variant="outlined"
    />
  );
}
