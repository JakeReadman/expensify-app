import moment from 'moment';
import {
  setStartDate,
  setEndDate,
  sortByDate,
  sortByAmount,
  setTextFilter,
} from '../../actions/filters';

test('Should generate set start date object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0),
  });
});

test('Should generate set end date object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0),
  });
});

test('Should set up sort by date action object', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE',
  });
});

test('Should set up sort by amount action object', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT',
  });
});

test('Should set up text filter object with text value', () => {
  const action = setTextFilter('arse');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'arse',
  });
});

test('Should set up text filter object with default', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: '',
  });
});
