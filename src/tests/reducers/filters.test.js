import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('Should set up default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  });
});

test('Should set sort by to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('Should set sort by to date', () => {
  const state = filtersReducer({ sortBy: 'amount' }, { type: 'SORT_BY_DATE' });
  expect(state.sortBy).toBe('date');
});

test('Should set text filter', () => {
  const state = filtersReducer(undefined, {
    type: 'SET_TEXT_FILTER',
    text: 'blah',
  });
  expect(state.text).toBe('blah');
});

test('Should set startDate filter', () => {
  const state = filtersReducer(undefined, {
    type: 'SET_START_DATE',
    startDate: 1000,
  });
  expect(state.startDate).toBe(1000);
});

test('Should set endDate filter', () => {
  const state = filtersReducer(undefined, {
    type: 'SET_END_DATE',
    endDate: 5000,
  });
  expect(state.endDate).toBe(5000);
});
