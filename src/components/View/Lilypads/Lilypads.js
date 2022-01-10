import classes from './Lilypads.module.css'


import React from 'react'


export default function Lilypads({color, uStyles}) {
    return <div className={`${classes.lilypad} ${classes[color]}`} style={uStyles}>
            <div className={classes.bg}></div>
    </div>
}
