import React , { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails"

// import Card from "../UI/Card";

const ExpenseItem=(props)=> {

  // const[newTitle, setNewTitle]= useState("");
  
  const [amount, newAmount]=useState(props.amount);

  // const changeHandler =() =>{
  //   setNewTitle(newTitle);
  // }
  
  
  const clickHandler = () =>{
    newAmount('$ 100')
        // let ele=document.querySelector('.expense-item');
    // ele.parentNode.removeChild(ele);
  }
  return ( 
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <ExpenseDetails title ={props.title}/>
      <ExpenseDetails amount= {amount}/>  
      {/* <input type="text" onChange={changeHandler} /> */}
      <button onClick={clickHandler}>Amount Change</button>    
    </div>
    
  );
  }
export default ExpenseItem;
