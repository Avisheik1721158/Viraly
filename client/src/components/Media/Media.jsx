import { Grid } from '@material-ui/core'

import React, { useState } from 'react'

import TopPost from '../Posts/TopPost';
import { useSelector } from 'react-redux';
import {getRemainingPosts, getTopPosts} from '../../utils/dataFilters'



const Media = () => {
 
  const posts = useSelector((state) => state.posts);
  const remainingPosts = getRemainingPosts(posts);
  const topPosts = getTopPosts(posts);


  return (
   <Grid item xs={12} sm={7}>
            <TopPost topPosts={topPosts}  remainingPosts={remainingPosts} showRemainingPosts={true} ></TopPost>
            
            </Grid> 
  )
}

export default Media;
