import classes from '../Header.module.css'
import React from 'react'
import LevelMenuItem from '../../Levels/LevelMenuItem'
import { reset, setCurrent } from '../../../../store/levelSlice'
import { useDispatch } from 'react-redux'

const DropDownMenu = ({ levels, onClose, ...otherProps }) => {
   const dispatch = useDispatch()

   function levelChangeHandler(levelName) {
      dispatch(setCurrent(levelName))
      onClose()
   }

   function resetLevels() {
      dispatch(reset())
   }

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
                  onLevelSelect={levelChangeHandler}
               />
            ))}
         </div>
         <div className={classes.labelReset} onClick={resetLevels}>
            Сбросить
         </div>
      </div>
   )
}

export default DropDownMenu
