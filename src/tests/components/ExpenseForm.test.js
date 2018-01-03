import React from 'react';
import { shallow } from 'enzyme';
import { SingleDatePicker } from 'react-dates';
// import 'react-dates/initialize'
// import { SingleDatePicker } from 'react-dates'
// import 'react-dates/lib/css/_datepicker.css'
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';


test('should render ExpenseForm correctly', () =>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with expense data', () =>{
    const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set descripton on input change',() => {
    const value = 'New Descripton test'
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('description')).toBe(value);
});

test('should set Note on textarea change',() => {
    const value = 'New Note test'
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', {
        target: { value }
    });
    expect(wrapper.state('note')).toBe(value);
});

test('should set amount if valid input change',() => {
    const value = '20.30'
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount if invalid input change',() => {
    const value = '20.3033'
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe('');
});

test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm  expense={expenses[0]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount:expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    });
});

// This test Was not working, something with prop method.had to import SingleDatePicker.
test('should set new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find(SingleDatePicker).prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

// This test Was not working, something with prop method. had to import SingleDatePicker.
test('Should set calender focus on change', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find(SingleDatePicker).prop('onFocusChange')({focused});
    expect(wrapper.state('calendarFocused')).toBe(focused);
});