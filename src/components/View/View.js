import classes from './View.module.css'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { complete, notComplete } from '../../store/levelSlice'
import { isAnagram } from '../../utils/helpers'
import RenderFrogs from './RenderFrogs/RenderFrogs'
import RenderLilypads from './RenderLilypads/RenderLilypads'


export default function View() {

    const dispatch = useDispatch()
    
    const userStyles = useSelector(state => state.levels.userStyles)

    const level = useSelector(state => state.levels.levels.find(level => level.current))

    const lilypadItem = level.lilypadItemStyle || level.lilypadStyle

    React.useEffect(() => {
        document.querySelectorAll('#pond').forEach(elem => elem.style = userStyles)
        document.querySelectorAll('#frog').forEach(elem => elem.style = '')
        
        if(isAnagram(level.correctAnswer, userStyles)) dispatch(complete(level.level))
            
        else dispatch(notComplete(level.level))
        
    }, [userStyles, dispatch, level.level, level.correctAnswer])

    return (
        <section className={classes.view}>
            <div className={classes.board}>
                <RenderFrogs className={classes.pond} level={level} lilypadItem={lilypadItem}/>
                <RenderLilypads className={classes.background} style={lilypadItem} level={level} lilypadItem={lilypadItem}/>
            </div>
        </section>
    )
}
