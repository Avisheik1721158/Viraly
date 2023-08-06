import React, { useState } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';

import Post from './Post/Post'


import useStyles from './styles';

const TopPosts = ({ topPosts, remainingPosts, showRemainingPosts }) => {
//   const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(0);

//   const sortedPosts = [...posts].sort((a,b) => b.likeCount - a.likeCount)
//   const topPosts = sortedPosts.slice(0,3)
//   const remainingPosts = sortedPosts.slice(3);

  return (
    !topPosts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {topPosts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}

        {showRemainingPosts ? remainingPosts.map((post) => ( <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>)): null}
        
      </Grid>
    )
  );
};

export default TopPosts;
