import classes from '../Header.module.css'
import React from 'react'

const NextButton = ({ onClick, ...otherProps }) => {
   return (
      <span
         className={`${classes.arrow} ${classes.right}`}
         onClick={onClick}
         {...otherProps}
      >
         <span className={classes.triangle}></span>
      </span>
   )
}

export default NextButton
