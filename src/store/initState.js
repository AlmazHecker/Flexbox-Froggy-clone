// <div> .... </div d'justify-content TEXT' <div> .... </div>

const initState = {

    userStyles: '',
    currentLevel: 1,
    
    levels: [
    {
        level: 1,
        current: true,
        done: false,
        lines: 1,
        lilypadStyle: {justifyContent: 'flex-end'},
        colors: ['green'],
        userAnswer: '',
        correctAnswer: 'justify-content: flex-end;'
    },
    {
        level: 2,
        current: false, 
        done: false,
        lines: 1,
        lilypadStyle: {justifyContent: 'center'},
        colors: ['green', 'yellow'],
        userAnswer: '',
        correctAnswer: 'justify-content: center;'
    },
    {
        level: 3,
        current: false,
        done: false,
        lines: 1,
        lilypadStyle: {justifyContent: 'space-around'},
        colors: ['green', 'yellow', 'red'],
        userAnswer: '',
        correctAnswer: 'justify-content: space-around;'
    },
    {
        level: 4,
        current: false, 
        done: false,
        lines: 1,
        lilypadStyle: {justifyContent: 'space-between'},
        colors: ['green', 'yellow', 'red'],
        userAnswer: '',
        correctAnswer: 'justify-content: space-between;'
    },
    {
        level: 5,
        current: false, 
        done: false,
        lines: 1,
        lilypadStyle: {alignItems: 'flex-end'},
        colors: ['green', 'yellow', 'red'],
        userAnswer: '',
        correctAnswer: 'align-items: flex-end;'


    },
    {
        level: 6,
        current: false, 
        done: false,
        lines: 2,
        lilypadStyle: {justifyContent: 'center', alignItems: 'center'},
        colors: ['green'],
        userAnswer: '',
        correctAnswer: 'justify-content: center; align-items: center;'

    },
    {
        level: 7,
        current: false, 
        done: false,
        lines: 2,
        lilypadStyle: {justifyContent: 'space-around', alignItems: 'flex-end'},
        colors: ['green', 'yellow', 'red'],
        userAnswer: '',
        correctAnswer: 'justify-content: space-around; align-items: flex-end;'

    },
    {
        level: 8,
        current: false, 
        done: false,
        lines: 1,
        lilypadStyle: {flexDirection: 'row-reverse'},
        colors: ['green', 'yellow', 'red'],
        userAnswer: '',
        correctAnswer: 'flex-direction: row-reverse;'

    },
    {
        level: 9,
        current: false, 
        done: false,
        lines: 1,
        lilypadStyle: {flexDirection: 'column'},
        colors: ['green', 'yellow', 'red'],
        userAnswer: '',
        correctAnswer: 'flex-direction: column;'
    },
    {
        level: 10,
        current: false,
        done: false,
        lines: 2,
        colors: ['green', 'yellow', 'red'],
        lilypadStyle: {flexDirection: 'row-reverse', justifyContent: 'flex-end'},
        userAnswer: '',
        correctAnswer: 'flex-direction: row-reverse; justify-content:flex-end;'
        
    },
    {
        level: 11,
        current: false, 
        done: false,
        lines: 2,
        colors: ['green', 'yellow', 'red'],
        lilypadStyle: {flexDirection: 'column', justifyContent: 'flex-end'},
        userAnswer: '',
        correctAnswer: 'flex-direction: column; justify-content: flex-end;'

    },
    {
        level: 12,
        current: false, 
        done: false,
        lines: 2,
        colors: ['green', 'yellow', 'red'],
        lilypadStyle: {flexDirection: 'column-reverse',justifyContent: 'space-between'},
        userAnswer: '',
        correctAnswer: 'flex-direction: column-reverse; justify-content: space-between;',

    },
    {
        level: 13,
        current: false, 
        done: false,
        lines: 3,
        colors: ['green', 'yellow', 'red'],
        lilypadStyle: {flexDirection: 'row-reverse', justifyContent: 'center', alignItems: 'flex-end'},
        userAnswer: '',
        correctAnswer: 'flex-direction: column-reverse; justify-content: center; align-items: flex-end;',

    },

    
    // self level!!!
    {
        level: 14,
        current: false, 
        done: false,
        lines: 1,
        colors: ['green', 'yellow', 'red'],
        lilypadItemStyle: {color: 'yellow', style : { order: '2'} },
        userAnswer: '',
        correctAnswer: 'order: 2;'

    },

    // self level!!!
    {
        level: 15,
        current: false, 
        done: false,
        lines: 1,
        colors: ['green', 'green', 'green', 'red', 'green'],
        lilypadItemStyle: {color: 'red', style: { order: '-1' } },
        userAnswer: '',
        correctAnswer: 'order: -1;'

    },

    // self level!!!
    {
        level: 16,
        current: false, 
        done: false,
        lines: 1,
        colors: ['green', 'green', 'yellow', 'green', 'green'],
        lilypadItemStyle: { color: 'yellow', style: { alignSelf: 'flex-end'} },
        userAnswer: '',
        correctAnswer: 'align-self: flex-end;'

    },

    // self level!!!
    {
        level: 17,
        current: false,
        done: false,
        lines: 2,
        colors: ['yellow', 'green', 'yellow', 'green', 'green'],
        lilypadItemStyle: { color: 'yellow', style: { alignSelf: 'flex-end', order: 2} },
        userAnswer: '',
        correctAnswer: 'align-self: flex-end; order: 2;'
    },
    {
        level: 18,
        current: false,
        done: false,
        lines: 1,
        colors: ['yellow', 'green', 'green', 'green', 'green', 'green', 'red'],
        lilypadStyle: {flexWrap: 'wrap'},
        userAnswer: '',
        correctAnswer: 'flex-wrap: wrap;',
    },

    {
        level: 19,
        current: false,
        done: false,
        lines: 1,
        colors: [
            'green', 'green', 'green', 'green', 'green',
            'red', 'red', 'red', 'red', 'red', 
            'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 
        ],
        lilypadStyle: {flexFlow: 'column wrap'},
        userAnswer: '',
        correctAnswer: 'flex-flow: column wrap;'
    },

    {
        level: 20,
        current: false,
        done: false,
        lines: 1,
        colors: [
            'green', 'green', 'green', 'green', 'green',
            'red', 'red', 'red', 'red', 'red', 
            'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 
        ],
        lilypadStyle: {flexFlow: 'column wrap'},
        userAnswer: '',
        correctAnswer: 'flex-flow: column wrap;'
    },

    {
        level: 21,
        current: false,
        done: false,
        lines: 2,
        colors: [
            'green', 'green', 'green', 'green', 'green',
            'green', 'green', 'green', 'green', 'green',
            'green', 'green', 'green', 'green', 'green',
        ],
        lilypadStyle: {flexWrap: 'wrap', alignContent: 'flex-start'},
        userAnswer: 'flex-wrap: wrap;',
        correctAnswer: 'align-content: flex-start; flex-wrap: wrap;',
    },

    {
        level: 22,
        current: false,
        done: false,
        lines: 2,
        colors: [
            'green', 'green', 'green', 'green', 'green',
            'green', 'green', 'green', 'green', 'green',
            'green', 'green', 'green', 'green', 'green',
        ],
        lilypadStyle: {flexWrap: 'wrap', alignContent: 'flex-end'},
        userAnswer: 'flex-wrap: wrap;',
        correctAnswer: 'align-content: flex-end; flex-wrap: wrap;',
    },

    {
        level: 23,
        current: false,
        done: false,
        lines: 3,
        colors: [
            'red', 'green', 'green', 'green', 'yellow',
            'red', 'green', 'green', 'green', 'yellow',
            'red', 'green', 'green', 'green', 'yellow',
        ],
        lilypadStyle: {flexWrap: 'wrap', alignContent: 'center', flexDirection: 'column-reverse'},
        userAnswer: 'flex-wrap: wrap;',
        correctAnswer: 'flex-wrap: wrap; align-content: center; flex-direction: column-reverse;',
    },

    {
        level: 24,
        current: false,
        done: false,
        lines: 4,
        colors: ['red', 'green', 'green', 'green', 'green', 'yellow', 'yellow'],
        lilypadStyle: { flexFlow: 'column-reverse wrap-reverse' , alignContent: 'space-between', justifyContent: 'center'},
        userAnswer: '',
        correctAnswer: 'flexFlow: column-reverse wrap-reverse; align-content: space-between; justify-content: center;',
    }

    ],
}

export default initState