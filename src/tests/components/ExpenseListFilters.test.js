import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import expenses from '../fixtures/expenses';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test('Should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseListFilters with alt date correctly', () => {
  wrapper.setProps({ filters: altFilters });
  expect(wrapper).toMatchSnapshot();
});

test('Should handle text change', () => {
  wrapper
    .find('input')
    .simulate('change', { target: { value: altFilters.text } });
  expect(setTextFilter).toHaveBeenLastCalledWith(altFilters.text);
});

test('Should sort by date', () => {
  wrapper
    .find('select')
    .simulate('change', { target: { value: filters.sortBy } });
  expect(sortByDate).toHaveBeenCalled();
});

test('Should sort by amount', () => {
  wrapper
    .find('select')
    .simulate('change', { target: { value: altFilters.sortBy } });
  expect(sortByAmount).toHaveBeenCalled();
});

test('Should handle date changes', () => {
  const startDate = moment(0).add(4, 'years');
  const endDate = moment(0).add(5, 'years');
  wrapper.find('DateRangePicker').prop('onDatesChange')({
    startDate: startDate,
    endDate: endDate,
  });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('Should handle date focus changes', () => {
  const calendarFocused = 'endDate';
  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});
