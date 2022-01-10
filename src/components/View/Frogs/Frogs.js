import classes from './Frogs.module.css'


import React from 'react'


export default function Frog({color, id}) {
    return <div className={`${classes.frog} ${classes[color]}`} id={id}>
            <div className={classes.bg}></div>
        </div>            
    
}
// number('2') + 2 === 4

//  '2' - 2 == 0