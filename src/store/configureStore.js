import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';


// Store Creation. This is using combinedReducers so we can have multiple reducers.

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        }),
        // install redux dev tools for chrome had  got this code from:
        // https://github.com/zalmoxisus/redux-devtools-extension
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};

