import React, { useState } from "react";

const TodoHeader = ({todos, setTodos}) => {
    //create 2 useStates that will capture the user input (string) and apply a counter
    //to the todo object
    const [newTodo, setNewTodo] = useState("");
    const [counter, setCounter] = useState(0);


    //Remember we will nedd to do the folliwing
    //1. Validate the input
    //2. Create a newTodo object wirh the string and the counter
    //3. Append the object to the array

    const validateInput = () => {
        if (!newTodo || newTodo ==="" || newTodo === undefined){
            alert("Please add a task!")
        }
        else{
            //there is a string oin the text box and we are ready to move to step 2
            console.log("newTodo task validated")
            addTask();
        }
    }

    const addTask = () => {
    //this function will handle step 2 and 3
        
        const newTodoObj = {
            id: counter,
            todo: newTodo
        }

        console.log ("new todo:", newTodoObj)

    //step 3 - append the todo object to the todo array
        const appendedArray= [...todos, newTodoObj];
        setTodos(appendedArray);

        setCounter(counter + 1);
        setNewTodo("");

        console.log("current list of todos: ", appendedArray)
    }
    
    return (
        <>
         <div className="input-group input-group-lg container w-50 p-0 shadow">
              <input 
                type="text"
                className="new-todo form-control"
                placeholder="What needs to be done?"
                value={newTodo}
                onChange={event => setNewTodo(event.target.value)}    
            />
            <button 
                className="add-task input-group-text"
                onClick={validateInput}
                
                >Add task
            
            </button>
            </div>        
        </>
    )
}

export default TodoHeader;