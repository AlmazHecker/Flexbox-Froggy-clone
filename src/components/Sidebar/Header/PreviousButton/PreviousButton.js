import classes from '../Header.module.css'
import React from 'react'

const PreviousButton = ({ onClick, ...otherProps }) => {
   return (
      <span
         className={`${classes.arrow} ${classes.left} `}
         onClick={onClick}
         {...otherProps}
      >
         <span className={classes.triangle}></span>
      </span>
   )
}

export default PreviousButton
