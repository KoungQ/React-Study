import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';

import './Expenses.css';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseItem expense={props.items[0]}></ExpenseItem>
        <ExpenseItem expense={props.items[1]}></ExpenseItem>
        <ExpenseItem expense={props.items[2]}></ExpenseItem>
        <ExpenseItem expense={props.items[3]}></ExpenseItem>
      </Card>
    </div>
  );
}

export default Expenses;
