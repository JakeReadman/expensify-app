import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Should set default expenses reducer state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('Should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('Should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: -1,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test('Should add expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: {
      id: '4',
      description: 'pizza',
      note: '',
      amount: 900,
      createdAt: 5000,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, action.expense]);
});

test('Should edit expense', () => {
  const amount = 520;
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(520);
});

test('Should not edit any expense if no matching id', () => {
  const amount = 520;
  const action = {
    type: 'EDIT_EXPENSE',
    id: -1,
    updates: {
      amount,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
