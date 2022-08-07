import React from "react";
import Card from "../UI/Card";
// import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseDetails=(props)=>{
    return (
     <Card className="expense-item">
        {/* <ExpenseDate date={props.date}/> */}
        <div className="expense-item__description">
         <h2>{props.title}</h2>
        {/* <h2> {props.location}</h2>          */}
        </div>
         <div className="expense-item__price"> {props.amount}</div>
            
     </Card>
     
    )
}
export default ExpenseDetails;