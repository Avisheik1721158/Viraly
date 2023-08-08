import { Grid } from '@material-ui/core'
import React, { useState } from 'react'
import MyForm from '../MyForm/MyForm'

export default function About() {
    const [currentId, setCurrentId] = useState(0);
    // const posts = useSelector((state) => state.posts);
  return (
    <Grid item xs={12} sm={4}>
    <MyForm currentId={currentId} setCurrentId={setCurrentId} />
  </Grid>
  )
}
