import classes from './Header.module.css'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrent } from '../../../store/levelSlice'
import PreviousButton from './PreviousButton/PreviousButton'
import NextButton from './NextButton/NextButton'
import LevelIndicator from './LevelIndicator/LevelIndicator'
import DropDownMenu from './DropDownMenu/DropDownMenu'

export default function Header() {
   const dispatch = useDispatch()

   const [isShowLevels, setIsShowLevels] = React.useState(false)
   const currentLevel = useSelector((state) => state.levels.currentLevel)

   const levels = useSelector((state) => state.levels.levels)

   const level = levels.find((item) => item.level === currentLevel)

   const closeDropdownMenu = () => {
      setIsShowLevels(false)
   }

   function nextLevel() {
      setIsShowLevels(false)
      dispatch(setCurrent(currentLevel + 1))
   }

   function previousLevel() {
      setIsShowLevels(false)
      dispatch(setCurrent(currentLevel - 1))
   }

   function showLevelsHandler(e) {
      e.stopPropagation()
      setIsShowLevels((prev) => !prev)
   }

   return (
      <header className={classes.header} onClick={() => setIsShowLevels(false)}>
         <div>
            <h1 className={classes.title}>Flexbox Froggy</h1>
         </div>

         <div className={classes['level-counter']}>
            <PreviousButton onClick={previousLevel} />
            <LevelIndicator
               onClick={showLevelsHandler}
               selectedLevel={level.level}
            />
            <NextButton onClick={nextLevel} />

            {isShowLevels && (
               <DropDownMenu onClose={closeDropdownMenu} levels={levels} />
            )}
         </div>
      </header>
   )
}
