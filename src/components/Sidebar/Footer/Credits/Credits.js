import classes from '../Footer.module.css'

import React from 'react'

export default function Credits() {
    return <>
    <div className={classes.credits}>
            <span>Игра Flexbox Froggy создана </span>
                <a href='https://codepip.com'>Codepip</a> {' • '}
                <a href='https://github.com/thomaspark/flexboxfroggy/'>GitHub</a> {' • '}
                <a href='https://twitter.com/playcodepip'>Twitter</a> {' • '}
            <span>
                <span>Settings</span>
            </span>

            </div>
            <div className={classes.credits}>
                <span>Want to learn CSS grid? Play</span>
                <a href='https://codepip.com/games/grid-garden'>Grid Garden</a> {' .'}
            </div>
            </>
}
