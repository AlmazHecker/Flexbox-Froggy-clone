import classes from './Levels.module.css'

export default function LevelMenuItem({ level, onLevelSelect, ...otherProps }) {
   const isDone = level.done ? classes.solved : ''

   function getLevel() {
      onLevelSelect(level.level)
   }

   const classNames = `${classes['level-marker']} ${isDone}`

   return (
      <span onClick={getLevel} className={classNames} {...otherProps}>
         {level.level}
      </span>
   )
}
