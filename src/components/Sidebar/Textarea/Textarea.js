
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrent, setStyle, setUserAnswer } from '../../../store/levelSlice'
import classes from './Textarea.module.css'
import 'animate.css'


export default function Textarea() {
  
  const dispatch = useDispatch()
  
  const currentLevel = useSelector(state => state.levels.currentLevel)
  const levels = useSelector(state => state.levels.levels)

  const level = levels.filter(item => item.level === currentLevel)[0]

  const [value, setValue] = React.useState(level.userAnswer)
  React.useEffect(() => setValue(level.userAnswer), [level.level, level.userAnswer])

  
  function nextLevel() {
    dispatch(setCurrent(currentLevel + 1 ))
  }


  React.useEffect(() => {
    // debouncing
    const timer = setTimeout(() => {
      dispatch(setStyle(value))
      dispatch(setUserAnswer({level: level.level, value: value}))

    }, 500);

    return () => clearInterval(timer)
  }, [value, dispatch, level.level])
  


  const lineHeight = {height: `${24 * level.lines}px`}

  const isDisabled = level.done ? `${classes.enabled} animate__animated animate__tada` : classes.disabled



  return (
  <div className={classes.editor}>
    <div className={classes.css}>


      <div className={classes['line-numbers']}>
          1 <br/> 2 <br/> 3 <br/> 4 <br/> 5 <br/> 6 <br/> 7 <br/> 8 <br/> 9 <br/> 10 <br/>
      </div>

      <pre className={classes.pre}>{`#pond {
  display: flex;`}
    </pre>

    <textarea style={lineHeight} className={classes.code} onChange={(e) => setValue(e.target.value)} value={value}/>
    
    <pre className={classes.pre}>{'}'}</pre>
     
        <button className={`${classes.next} ${isDisabled}`} onClick={nextLevel}>Следущий</button>
     
     </div>
    </div>
  )
}
