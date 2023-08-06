import React, { useState, useEffect } from "react";
import {
  Container,
  AppBar,
  Typography,
  Grow,
  Grid,
  Box,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import Form from "./components/Form/Form";
import { getPosts } from "./actions/posts";
import useStyles from "./styles";
import Posts from "../src/components/Posts/Posts";
import TopPost from "./components/Posts/TopPost";
import {getRemainingPosts, getTopPosts} from './utils/dataFilters'
import { Link, Route, Routes } from "react-router-dom";

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const posts = useSelector((state) => state.posts);
  const remainingPosts = getRemainingPosts(posts);
  const topPosts = getTopPosts(posts);
  // const sortedPosts = [...posts].sort((a, b) => b.likeCount - a.likeCount);
  // const topPosts = sortedPosts.slice(0, 3);
  // const remainingPosts = sortedPosts.slice(3);
  

  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography
          className={classes.nav}
          variant="h5"
          align="right"
        ></Typography>
        <Typography className={classes.heading} variant="h4">
          Viraly
        </Typography>
        <Box mr={80} />
        <Typography className={classes.heading} variant="h5">
          <Link to="/media">Media</Link>
        </Typography>
        <Box mr={2} />
        <Typography className={classes.heading} variant="h5">
          <Link to="/about">About</Link>
        </Typography>
        <Box mr={2} />
        <Typography className={classes.heading} variant="h5">
          <Link to="/section">Section</Link>
        </Typography>

        {/* <img className={classes.image} src={memories} alt="icon" height="60" />

    
        <Typography className={classes.nav} variant="h5" align="right">
          Home
        </Typography>
     
        <Typography className={classes.nav} variant="h5" align="right">
          Message
        </Typography>
        <Typography className={classes.nav} variant="h5" align="right">
          About
        </Typography>
        <Typography className={classes.nav} variant="h5" align="right">
          Section
        </Typography> */}
      </AppBar>

      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <TopPost
                topPosts={topPosts}
                remainingPosts={remainingPosts}
                showRemainingPosts={false}
              ></TopPost>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
