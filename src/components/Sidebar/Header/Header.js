
import classes from './Header.module.css'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Levels from '../Levels/Levels'
import { reset, setCurrent } from '../../store/levelSlice';


export default function Header() {
    const dispatch = useDispatch()
   

    const [isShowLevels, setIsShowLevels] = React.useState(false)
    const currentLevel = useSelector(state => state.levels.currentLevel)

    const levels = useSelector(state => state.levels.levels)

    const level = levels.filter(item => item.level === currentLevel)[0]


    function checkHandler(levelName){
        dispatch(setCurrent(levelName))
        setIsShowLevels(false)   
    }


    function nextLevel() {
        setIsShowLevels(false)
        dispatch(setCurrent(currentLevel + 1 ))
    }

    // предыдущий уровень <
    function previousLevel() {
        setIsShowLevels(false)
        dispatch(setCurrent(currentLevel - 1))
    }

    function resetLevels() {
        dispatch(reset())
    }


    function showLevelsHandler(e) {
        e.stopPropagation()
        setIsShowLevels(prev => prev = !prev)
    }


    let content;
      // модальное окно с уровнями
      if(isShowLevels) {
        content = <div className={`${classes.levelsWrapper} ${classes.tooltip}`}>
            <div className={classes.levels}>
                
        { levels.map(level => <Levels key={level.level} level={level} onSetCurrent={checkHandler} />) }

            </div>
                <div className={classes.labelReset} onClick={resetLevels}>Сбросить</div>
        </div>
    }



    return (
       <header className={classes.header} onClick={() => setIsShowLevels(false)}>
                <div >
                    <h1 className={classes.title}>Flexbox Froggy</h1>
                </div>

                <div className={classes['level-counter']}>
                    <span className={`${classes.arrow} ${classes.left} `} onClick={previousLevel}>
                        <span className={classes.triangle} ></span>
                    </span>

                    
                    <span className={`${classes.arrow} ${classes['level-indicator']} `} onClick={showLevelsHandler}>
                        <span className={classes.labelLevel}>Уровень {level.level} из 24</span>
                        <span className={classes.caret}>▾</span>
                    </span>


                    <span className={`${classes.arrow} ${classes.right}`} onClick={nextLevel}>
                        <span className={classes.triangle}></span>
                    </span>
                {content}
                </div>
        </header>
    )
}
