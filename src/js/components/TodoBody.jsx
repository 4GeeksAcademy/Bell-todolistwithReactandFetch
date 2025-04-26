import { Button } from "bootstrap"
import React from "react"

const TodoBody = ( {todos, setTodos} ) => {

    //we need two functions:

    //a function to render the todos array
    const renderTodos = todos.map(todo => {
        return(
            <li className="todo-item list-group-item d-flex shadow bg-body" key={todo.id}>
                <span className="fs-5 flex-grow-1 text-start">{todo.todo} </span> 
                <button
                    className="delete-task btn-close fs-5 mt-2"
                    onClick={() => deleteTodo(todo.id)}>
                        
                </button>
            </li>
        )
    })

    //a function to delete a selected todo element

    const deleteTodo = (id) => {
        const updatedTodos = todos.filter((todoItem) => todoItem.id !== id) 
            setTodos(updatedTodos);
        }

    
    return (
        <>
        <div className="list">
            <ul className="todo-list container bg-light list-group list-group-flush w-50 p-0">
                {todos.length !== 0 ? renderTodos: "No task. Add a task!"}
            </ul>
        </div>
        </>
    )
}

export default TodoBody;