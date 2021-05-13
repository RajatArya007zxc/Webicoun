import React, { useState, useEffect } from "react";
import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Banner from "../../Assets/banner.jpeg";
import Footer from "../Footer/Footer";
import YouTubeIcon from "@material-ui/icons/YouTube";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Link,
  Button,
} from "@material-ui/core";
import Spinner from "../Spinner";

const useStyle = makeStyles(() => ({
  root: {
    overflow: "hidden",
  },
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& h3": {
      fontSize: "35px",
      marginBottom: "0",
    },
  },
  cardRow: {
    display: "flex",
    flexWrap: "wrap",
    alignContent: "center",
    alignItem: "center",
    justifyContent: "space-around",
    marginTop: "34px",
  },
  card: {
    margin: "12px",
    minWidth: 400,
    borderRadius: "7px",
    objectFit: "cover",
  },
  media: {
    height: 160,
  },
}));

export default function Webinar() {
  const classes = useStyle();

  const [oldWebinar, setOldWebinar] = useState([]);
  const [newWebinar, setNewWebinar] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    gettingWebinar();
  }, []);

  const gettingWebinar = async () => {
    const oldWebinar = await Axios.get(
      "https://webicoun-backend-hajkn.run-ap-south1.goorm.io/webinars"
    );

    const newWebinar = await Axios.get(
      "https://webicoun-backend-hajkn.run-ap-south1.goorm.io/upcomingwebinars"
    );
    setLoading(false);
    setOldWebinar(oldWebinar.data.webinars);
    setNewWebinar(newWebinar.data.webinars);
  };
  return (
    <div className={classes.root}>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Grid container spacing={7} className={classes.content}>
            <h3>Old Webinars</h3>
            <Grid item lg={12} md={12} className={classes.cardRow}>
              {oldWebinar
                .filter((e, i) => i < 3)
                .map((e) => (
                  <Card className={classes.card}>
                    <CardActionArea>
                      <CardMedia className={classes.media} image={Banner} />
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="h2">
                          Blog {e.category}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          <Link>{e.webiurl}</Link>
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                ))}
            </Grid>
            <h3>New Webinars</h3>
            <Grid item lg={12} md={12} className={classes.cardRow}>
              {newWebinar.map((e) => (
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia className={classes.media} image={e.webiurl} />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="h2">
                        {e.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {e.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}
            </Grid>
          </Grid>
          <Footer />
        </>
      )}
    </div>
  );
}
