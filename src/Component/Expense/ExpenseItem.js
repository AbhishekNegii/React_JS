import React from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails"

// import Card from "../UI/Card";

const ExpenseItem=(props)=> { 
  const eventHandler = () =>{
    let ele=document.querySelector('.expense-item');
    ele.parentNode.removeChild(ele);
  }
  return ( 
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <ExpenseDetails title ={props.title}/>
      <ExpenseDetails amount= {props.amount}/>  
      <button onClick={eventHandler}>Delete</button>    
    </div>
    
  );
  }
export default ExpenseItem;
