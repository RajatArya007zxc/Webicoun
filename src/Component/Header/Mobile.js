import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  MenuItem,
  //   Link,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import LinkData from "./LinkData";
import Desktop from "./Desktop";
import Home from "../HomePage/Home";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignContent: "center",
    fontFamily: "'Poppins', sans-serif",
  },
  logo: {
    flexGrow: "1",
    color: "black",
    fontFamily: "'Poppins', sans-serif",
  },
  appBar: {
    // background:'linear-gradient(to right,#ffb88c,#de6262)'
    background: "linear-gradient(145deg,#910592,#b460b4)",
  },
  appBarWrapper: {
    // width:'89%',
    // margin:'0 auto',
    // justifyContent: "space-between"
  },

  rightIcon: {
    marginLeft: "20px",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
}));

export default function Main() {
  const classes = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar className={classes.appBarWrapper}>
        <div className={classes.logo}>WEBiCOUN</div>

        <IconButton
          {...{
            edge: "end",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={classes.drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>
      </Toolbar>
    );
  };
  const getDrawerChoices = () => {
    return LinkData.map(({ label, href }) => {
      return (
        <Link
          {...{
            to: `${href}`,
            color: "inherit",

            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const { mobileView, drawerOpen } = state;
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        {mobileView ? displayMobile() : <Desktop />}
      </AppBar>
    </div>
  );
}
