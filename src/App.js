import React, { useState } from "react";

import Card from "./Component/UI/Card";

import Expenses from "./Component/Expense/Expenses";

import NewExpense from "./Component/NewExpense/NewExpense";

const Dummy_Expenses = [
  {
    id: "e1",
    title: "New TV",      
    amount: 799.12,
    date: new Date(2020, 7, 14),
    location: "Dehradun",
  },

  { id: "e2", 
    title: "Toilet Paper",
    amount: 94.49, 
    date: new Date(2021, 2, 12) },

  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },

  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App= ()=> {

  const[expenses, setExpenses]=useState(Dummy_Expenses)
  
  const addExpenseHandler=(expense)=>{
    const updatedExpense= [expense,...Dummy_Expenses]
    
    setExpenses(updatedExpense)

    }
  
 
  return (
    <Card>
         <NewExpense onAddExpense={addExpenseHandler}/>
         <Expenses item={expenses}/>  
                  
    </Card>
  );
}
export default App;
