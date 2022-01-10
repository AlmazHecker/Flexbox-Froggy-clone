
import classes from './View.module.css'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { complete, notComplete } from '../store/levelSlice'
import { isAnagram } from '../utils/helpers'
import Frogs from './Frogs/Frogs'
import Lilypads from './Lilypads/Lilypads'


export default function View() {

    const dispatch = useDispatch()

    
    const userStyles = useSelector(state => state.levels.userStyles)

    const level = useSelector(state => state.levels.levels.filter(level => level.current)[0])

    const lilypadItem = level.lilypadItemStyle || level.lilypadStyle

    React.useEffect(() => {
        
        document.querySelectorAll('#pond').forEach(elem => elem.style = userStyles)
        
        if(isAnagram(level.correctAnswer, userStyles)) dispatch(complete(level.level))
            
        else dispatch(notComplete(level.level))
        
    }, [userStyles, dispatch, level.level, level.correctAnswer])
    

    const frogs = level.colors.map( (color, index) => {

        let id = ''
        if(color === lilypadItem.color) id = 'pond'
        return <Frogs key={index} color={color} id={id}/>
    })

    const lilypads = level.colors.map( (color, index) => {
        let uStyles = {}
        if(color === lilypadItem.color) uStyles = lilypadItem.style
        return <Lilypads key={index + 1} color={color} uStyles={uStyles}/>
    })


    return (
        <section className={classes.view}>
            <div className={classes.board}>
                {/* если задание связано только с одним фрогом, стили не будет применяться */}
                <div className={classes.pond} id={lilypadItem ? 'pond' : ''}>
                    {frogs}
                </div>

                <div className={classes.background} style={lilypadItem}>
                    {lilypads}
                </div>

            </div>
        </section>
    )
}
