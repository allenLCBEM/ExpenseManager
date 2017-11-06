import {createStore} from 'redux';

//Action generators

const incrementCount = ({ incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decCount = ({decBy = 1} = {}) => ({
    type: 'DECREMENT',
    decBy
})

const setCount = ({count} = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

//reducers
const countReducer = (state = {count:0}, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decBy
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(incrementCount());

// store.dispatch({
//     type:'INCREMENT',
//     incrementBy: 5
// });
// store.dispatch({
//     type:'INCREMENT'
// });



//just call the subscribe funtion to stop it.  weird?
//unsubscribe()'
// store.dispatch({
//     type:'RESET'
// });
store.dispatch(resetCount());

store.dispatch(decCount());
store.dispatch(decCount({decBy:10}));
// store.dispatch({
//     type:'DECREMENT',
//     decBy:10
// });
// store.dispatch({
//     type:'DECREMENT'
// });
// store.dispatch({
//     type:'SET',
//     count: 101
// })
store.dispatch(setCount({count:199}));



