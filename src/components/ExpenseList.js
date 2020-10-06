import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from '../components/ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
  <div>
    {props.expenses.length === 0 ? (
      <p>No Expenses to Show</p>
    ) : (
      <p>Expenses:</p>
    )}
    {props.expenses.map((expense) => (
      <ExpenseListItem key={expense.id} {...expense} />
    ))}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps)(ExpenseList);
