import React, { useState } from "react";

import './NewExpense.css'

import ExpenseForm from "./ExpenseForm";


const NewExpense = (props) => {
    const [isEditing,setEditItem]=useState(false)
    const saveExpenseDataHandler =(enteredExpenseData) =>{
      const expenseData= {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setEditItem(false)
    // console.log(expenseData)
    }
    const startEditingHandler= () =>{
        setEditItem(true)

    }
    const stopEditingHandler=()=>{
        setEditItem(false)
    }
    
    return (
        <div className="new-expense">
           
           {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>} 
           {isEditing && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
        </div>
    );

}

export default NewExpense;