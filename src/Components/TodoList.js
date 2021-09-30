import React from 'react'
import { Todo } from './Todo'

export const TodoList = ({todolists,handleToggle,handleFilter}) => {
    return (
        <div>
            {
                todolists.map((todo)=>{
                    return(<Todo todo ={todo} handleToggle={handleToggle} />)
                })
            }
            <button style={{margin:'50px'}} onClick={handleFilter}>clear completed</button>
        </div>
    )
}

