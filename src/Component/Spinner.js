import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Spin from "../Assets/logo192.png";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(0,0,0,0.3)",
    height: "80vh",
  },
}));

export default function Spinner() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={Spin} alt="spinner" />
    </div>
  );
}
