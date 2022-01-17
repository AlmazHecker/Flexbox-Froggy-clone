import React from 'react'
import Frogs from '../Frogs/Frogs'

export default function RenderFrogs({className, level, lilypadItem}) {

    const frogs = level.colors.map( (color, index) => {

        let id = 'frog'
        if(color === lilypadItem.color) id = 'pond'
        return <Frogs key={index} color={color} id={id}/>
    })

    return <div className={className} id={lilypadItem.color ? '' : 'pond'}>
        {frogs}
    </div>
    
}
