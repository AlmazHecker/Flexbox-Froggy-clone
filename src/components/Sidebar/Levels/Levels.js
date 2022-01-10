import classes from './Levels.module.css'

export default function Levels({level, onSetCurrent}) {

    const isDone = level.done ? classes.solved : ''

    function getLevel() {
        onSetCurrent(level.level)
    }

    const classNames = `${classes['level-marker']} ${isDone}`

    return <span onClick={getLevel} className={classNames}>{level.level}</span>
}