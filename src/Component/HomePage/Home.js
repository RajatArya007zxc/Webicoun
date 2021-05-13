import React from "react";
import Banner from "../../Assets/banner.jpeg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  home: {
    width: "100%",
    minHeight: "80vh",
    backgroundImage: `url(${Banner})`,

    objectFit: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
}));

function Home() {
  const classes = useStyles();

  return <div className={classes.home}></div>;
}

export default Home;
