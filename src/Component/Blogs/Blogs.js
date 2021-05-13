import React, { useState, useEffect } from "react";
import {
  CardMedia,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Box,
} from "@material-ui/core";
import Spinner from "../Spinner";
import { makeStyles } from "@material-ui/core/styles";
import Axios from "axios";
import Footer from "../Footer/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "hidden",
  },
  cardRow: {
    display: "flex",
    flexWrap: "wrap",
    alignContent: "center",
    alignItem: "center",
    justifyContent: "space-around",
    marginTop: "34px",
    height: "73vh",
  },
  card: {
    margin: "12px",
    maxWidth: 400,
    borderRadius: "7px",
  },
  media: {
    height: 140,
  },
  boxTitle: {
    height: "34px",
    fontSize: "45px",
    fontWeight: 900,
    display: "flex",
    justifyContent: "center",
  },
}));

function Blogs() {
  const classes = useStyles();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    gettingDataFromApi();
  }, []);

  const gettingDataFromApi = async () => {
    let linkOfBlog = await Axios.get(
      "https://webicoun-backend-hajkn.run-ap-south1.goorm.io/blogcat"
    );

    setBlogs(linkOfBlog.data.blogs);
    setLoading(false);
  };
  return (
    <div className={classes.root}>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Grid container>
            <Grid item lg={12}>
              <Box className={classes.boxTitle}>Blogs</Box>
            </Grid>
          </Grid>
          <Grid container spacing={7}>
            <Grid item lg={12} md={12} className={classes.cardRow}>
              {blogs.map((blog) => (
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia className={classes.media} image={blog.image} />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="h2">
                        {blog.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {blog.author}
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

export default Blogs;
