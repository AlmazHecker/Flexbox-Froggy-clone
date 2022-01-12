import classes from '../Header.module.css'
import React from 'react'
import LevelMenuItem from '../../Levels/LevelMenuItem'

const DropDownMenu = ({
   onLevelSelect,
   onLevelReset,
   levels,
   ...otherProps
}) => {
   return (
      <div
         className={`${classes.levelsWrapper} ${classes.tooltip}`}
         {...otherProps}
      >
         <div className={classes.levels}>
            {levels.map((level) => (
               <LevelMenuItem
                  key={level.level}
                  level={level}
                  onLevelSelect={onLevelSelect}
               />
            ))}
         </div>
         <div className={classes.labelReset} onClick={onLevelReset}>
            Сбросить
         </div>
      </div>
   )
}

export default DropDownMenu
