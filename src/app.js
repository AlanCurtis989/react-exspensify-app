
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter.js';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisableExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();


//adding objects to the store
store.dispatch(addExpense({description:'Water Bill', amount:300, createdAt: 200}));
store.dispatch(addExpense({description:'Gas Bill', amount:400, createdAt: 100}));
store.dispatch(addExpense({description:'Rent', amount:100, createdAt: -20}));


// applying filters
//store.dispatch(setTextFilter('water'));
// store.dispatch(setTextFilter());
// store.dispatch(sortByAmount('amount'));


// log our visable expenses from store.
const state = store.getState();
const visableExpenses = getVisableExpenses(state.expenses, state.filters);
console.log(visableExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

