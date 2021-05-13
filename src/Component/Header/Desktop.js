import React from "react";
import { Toolbar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import LinkData from "./LinkData";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignContent: "center",
    fontFamily: "'Poppins', sans-serif",
    color: "black",
  },
  logo: {
    flexGrow: "1",
    color: "black",
  },

  Links: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    fontFamily: "'Poppins', sans-serif",
    "@media (max-width: 900px)": {
      display: "none",
    },
  },
  typo: {
    color: "black",
    textDecoration: "none",
  },
}));

export default function Desktop() {
  const classes = useStyles();

  return (
    <Toolbar className={classes.appBarWrapper}>
      <div className={classes.logo}>WEBiCOUN</div>

      <div className={classes.Links}>
        {LinkData.map(({ label, href }) => {
          return (
            <Button
              {...{
                key: label,
                color: "black",
              }}
            >
              <Link to={href} className={classes.typo}>
                {label}
              </Link>
            </Button>
          );
        })}
      </div>
    </Toolbar>
  );
}
