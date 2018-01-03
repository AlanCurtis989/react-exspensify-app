import moment from 'moment';
import {
    setTextFilter,
    sortByDate,
    sortByAmount,
    setStartDate,
    setEndDate } from '../../actions/filters';

test('Should set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
});

test('Should set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
});

test('Should sort by date action object',() =>{
    expect(sortByDate()).toEqual({type:'SORT_BY_DATE'});
    // above = same below
    //
    // const action = sortByDate();
    // expect(action).toEqual({
    //     type: 'SORT_BY_DATE'
    // })
});

test('Should sort by amound action object',() =>{
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
});

test('Should set text filter action object with text values',() =>{
    const text = 'Some Text'
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    })
});

test('Should set text filter action object with default values',() =>{
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})
