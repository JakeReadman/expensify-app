import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from '../components/ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
  <div className='content-container list-body'>
    {props.expenses.length === 0 ? (
      <div className='list-header'>No Expenses to Show</div>
    ) : (
      <div className='list-header'>
        <div className='show-for-mobile'>Expenses</div>
        <div className='show-for-desktop'>Expense</div>
        <div className='show-for-desktop'>Amount</div>
      </div>
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
