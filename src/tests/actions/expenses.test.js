import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should set up remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc',
  });
});

test('Should set up edit expense action object', () => {
  const action = editExpense('abc123', { note: 'new note value' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'abc123',
    updates: { note: 'new note value' },
  });
});

test('Should set up add expensse action object with provided values', () => {
  const expenseData = {
    description: 'rent',
    note: 'pay',
    amount: 10000,
    createdAt: 1000,
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: { ...expenseData, id: expect.any(String) },
  });
});

test('Should set up add expensse action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
    },
  });
});
