import React, { useState } from "react";
import TodoHeader from "./TodoHeader";
import TodoBody from "./TodoBody";
import TodoFooter from "./TodoFooter";

const Todo = () => {
    //the todos array state will be housed here for the children componets
    const [todos, setTodos] = useState([]);

    return (
        <>
            <h1 className="title">TO DO LIST!</h1>
            <div>
            <TodoHeader 
                todos={todos} 
                setTodos={setTodos} 
            />
            </div>
            <TodoBody 
                todos={todos} 
                setTodos={setTodos}
            />
            <TodoFooter 
                todos={todos}
            />
        
        </>
    )
}

export default Todo;