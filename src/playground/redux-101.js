import { createStore } from 'redux';

// Action generators - functions that return action objects.

const incrementCount = ({ incrementBy = 1 }= {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({setCount = 0} = {}) => ({
    type: 'SET',
    setCount
});
// this function is called a reducer.
// 1. they are pure functions. output is determined by input.
// 2. Never change state or action.
const countReducer = (state = { count:0 }, action)=>{
    switch(action.type){
        case 'INCREMENT':
            return{
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return{
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return{
                count: state.count= 0
            };
        case 'SET':
            return{
                count: state.count = action.setCount
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);

// you can unsubcribe by calling it in a function
const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});
//unsubscribe();

store.dispatch(incrementCount( {incrementBy: 5}));
store.dispatch(resetCount());
store.dispatch(decrementCount( {decrementBy: 20}));
store.dispatch(setCount({setCount: 101}));
