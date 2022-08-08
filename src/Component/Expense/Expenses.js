import React, { useState } from 'react';

import ExpenseFilter from './ExpenseFilter';

import './Expenses.css';

import ExpenseItem from './ExpenseItem';

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
        {
           filterExpense.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                // location={expense.location}
                date={expense.date}
            />
        ))}
               
        </div>
    );
}

export default Expenses;