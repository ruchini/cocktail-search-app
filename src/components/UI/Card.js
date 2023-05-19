import React from 'react'
import Container from '@mui/material/Container';
import classes from './Card.module.css'

const Card = (props) => {
  return (
    // <div className={classes.card}>{props.children}</div>
    <Container className={classes.card} >{props.children}</Container>
  )
}

export default Card