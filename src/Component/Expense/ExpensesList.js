import React from 'react'

import './ExpensesList.css'
import ExpenseItem from './ExpenseItem';

const ExpensesList=(props)=>{
       if(props.item.length === 0){
        return <h2 className='expenses-list__fallback'>Found no expense!!!</h2>
       }
    //    else if (props.item.length === 1){
    //     return(
    //         <ul className='expense-list'>
            
    //             const content = { props.item.map(expense => (
    //                     <ExpenseItem
    //                         key={expense.id}
    //                         title={expense.title}
    //                         amount={expense.amount}
    //                         // location={expense.location}
    //                         date={expense.date}
    //                     />
    //                 ))
    //             }
    //              content = [...content,<p2>hi </p2>]
    //         </ul>
    //      )
    //    } 
    else {
        return (
            <ul className='expense-list'>
                  { props.item.map(expense => (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            // location={expense.location}
                            date={expense.date}
                        />
                    ))
                 }
             </ul>
        )
       }
}
export default ExpensesList;