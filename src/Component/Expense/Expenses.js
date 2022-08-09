import React, { useState } from 'react';

import ExpenseFilter from './ExpenseFilter';
import ExpenseChart from './ExpensesChart';

import './Expenses.css';

// import ExpenseItem from './ExpenseItem';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
         const [filteredYear, setFilteredYear]=useState('2020');
         
         const filterChangedHandler =(selectedYear) =>{
              setFilteredYear(selectedYear);          
         }
         const filterExpense=props.item.filter(expense=>{
                return expense.date.getFullYear().toString()===filteredYear

         })
         
         
        return (
        <div className='expenses'>
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangedHandler}/> 
        <ExpenseChart expenses={filterExpense}/>
          <ExpensesList item={filterExpense}/>
          
               
        </div>
    );
}

export default Expenses;