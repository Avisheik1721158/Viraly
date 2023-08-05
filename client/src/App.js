import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import Form from "./components/Form/Form";
import { getPosts } from "./actions/posts";
import useStyles from "./styles";


import { Link, Route, Routes } from "react-router-dom";


const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
      <Typography className={classes.nav} variant="h5" align="right"> 
        </Typography>
          <Typography className={classes.heading} variant="h2">
          Viraly
        </Typography>
          <Typography className={classes.heading} variant="h5">
          <Link to="/media" >Media</Link>
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
            {/* <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid> */}
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
