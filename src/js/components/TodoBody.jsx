import { Button } from "bootstrap"
import React, { useEffect } from "react"

const TodoBody = ( {todos, setTodos} ) => {
    //create a useEffect to Fetch data from the TODO API
    //First display it on the console
    useEffect(() => {
        fetchData();
    }, [])

        function fetchData(){
            fetch('https://playground.4geeks.com/todo/users/Bell')
                .then(response => {
                    if (!response.ok) {
                        throw new Error(response.status)
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data.todos);
                    setTodos(data.todos); 
                })

                .catch(error => {
                    console.log('Looks like there is a problem: ', error)
                })

        }

    //we need two functions:

    //a function to render the todos array
    const renderTodos = todos.map(todo => {
        return(
            <li className="todo-item list-group-item d-flex shadow bg-body" key={todo.id}>
                <span className="fs-5 flex-grow-1 text-start">{todo.label} </span> 
                <button
                    className="delete-task btn-close fs-5 mt-2"
                    onClick={() => deleteTodo(todo.id)}>
                        
                </button>
            </li>
        )
    })

    //a function to delete a selected todo element

    const deleteTodo = async (id) => {

        

        const updatedTodos = todos.filter((todoItem) => todoItem.id !== id) 
            setTodos(updatedTodos);

            //using async await
            const response = await fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
                method: 'DELETE'
                });

                if (response.ok){
                    console.log('Deletion succesful!');
                }
                else {
                    console.log('Error: ', response.status, response.statusText);
                    return {
                        error: {
                            status: response.status,
                            statusText: response.statusText
                        }
                    }
                }
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