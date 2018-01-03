import { createStore } from 'redux';

// Action generators - functions that return action objects.

const incrementCount = () => ({
    type: 'INCREMENT'
});

const store = createStore((state = { count:0 }, action)=>{
    switch(action.type){
        case 'INCREMENT':
            // if incrementBy is a  number else defaulet is 1
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy: 1 ;
            return{
                count: state.count + incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy ==='number' ? action.decrementBy: 1;
            return{
                count: state.count - decrementBy
            };
        case 'RESET':
            return{
                count: state.count=0
            };
        case 'SET':
            return{
                count: state.count = action.count
            };
        default:
            return state;
    }
});

// subscibe does something whenever the state changes.
// store.subscribe(()=>{
//     console.log(store.getState());
// });

// you can unsubcribe by calling it in a function
const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});
//unsubscribe();

// dispatch: when it gets called it changes something in the store.
// Increment Count
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

// decrement Count
store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});

// reset count
store.dispatch({
    type: 'RESET'
});

// set
store.dispatch({
    type:'SET',
    count: 101
});
