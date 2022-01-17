

import React from 'react'
import Lilypads from '../Lilypads/Lilypads'

export default function RenderLilypads({className, style, level, lilypadItem}) {

    const lilypads = level.colors.map( (color, index) => {
        let uStyles = {}
        if(color === lilypadItem.color) uStyles = lilypadItem.style
        return <Lilypads key={index + 1} color={color} uStyles={uStyles}/>
    })

    return <div className={className} style={style}>
    {lilypads}
</div>
}
