import classes from './Instructions.module.css'
import titles from '../titles'
import { useSelector } from 'react-redux'



export default function Instructions() {

    const currentLevel = useSelector(state => state.levels.currentLevel)


    return (
        <div className={classes.instructions}>
            {titles[currentLevel - 1]}
        </div>
    )
}
