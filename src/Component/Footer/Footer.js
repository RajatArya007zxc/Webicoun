import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Rajat Arya
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    position: "relative",
    bottom: "0px",
    left: "0",
    width: "100%",
    backgroundColor: "#bababa",
  },
  footerS: {
    display: "flex",
    justifyContent: "space-around",
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <div maxWidth="sm" className={classes.footerS}>
          <Typography variant="body1">
            Footer. <Copyright />
          </Typography>
        </div>
      </footer>
    </div>
  );
}
