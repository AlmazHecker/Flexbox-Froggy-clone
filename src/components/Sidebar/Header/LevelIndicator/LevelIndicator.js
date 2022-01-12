import classes from '../Header.module.css'
import React from 'react'

const LevelIndicator = ({ onClick, selectedLevel, ...otherProps }) => {
   return (
      <span
         className={`${classes.arrow} ${classes['level-indicator']} `}
         onClick={onClick}
         {...otherProps}
      >
         <span className={classes.labelLevel}>
            Уровень {selectedLevel} из 24
         </span>
         <span className={classes.caret}>▾</span>
      </span>
   )
}

export default LevelIndicator
