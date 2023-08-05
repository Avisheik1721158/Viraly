import { Grid } from '@material-ui/core'

import React, { useState } from 'react'

import Posts from '../Posts/Posts';



const Media = () => {
  const [currentId, setCurrentId] = useState(0);
  return (
   <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId}></Posts>
            </Grid> 
  )
}

export default Media;
