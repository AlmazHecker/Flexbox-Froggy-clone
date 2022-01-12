import { createSlice } from "@reduxjs/toolkit"
import initState from "./initState"




const levelSlice = createSlice({
    name: 'levelReducer',
    initialState: initState,
    reducers: {
        complete(state, action) {
            state.levels = state.levels.map(level => level.level === action.payload ? {...level, done: true } : level)
        },
        notComplete(state, action) {
            state.levels = state.levels.map(level => level.level === action.payload ? {...level, done: false } : level)
        },
        reset(state) {
            state.levels = state.levels.map(level => ({...level, done: false, userAnswer: ''}))
        },
        setCurrent(state, action) {
            // 
            if(action.payload > 24 || action.payload === 0) return

            // 
            state.currentLevel = action.payload // 2
            
            
            state.levels = state.levels.map(item => ({...item, current: false}) )
            
            // вернуть новый current
            state.levels = state.levels.map(item => item.level === action.payload ? {...item, current: true} : item)
        },
        setStyle(state, action) {
            // textarea value
            state.userStyles = action.payload.trim()

        },
        setUserAnswer(state, action) {
            state.levels = state.levels.map(level => level.level === action.payload.level ? {...level, userAnswer: action.payload.value} : level )
        }
    }
})

export const { complete, notComplete, setCurrent, setStyle, reset, setUserAnswer } = levelSlice.actions


export default levelSlice.reducer