import React from "react"

const TodoBody = ( {todos} ) => {

    const deleteTodo = (idToDelete) => {
        const updatedTodos = todos.filter(todo => todo.id !== idToDelete);
        setTodos(updatedTodos);
      };
      
    
    return (
        <>
        <div className="bg-light">
            <ul className="todo-list container list-group list-group-flush w-50 p-3 text-start">
                {todos.map((todo) => (
                    <li key={todo.id} className="list-group-item fz">{todo.todo}
                    <button 
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => deleteTodo(todo.id)}
                    >
                        ✖
                    </button>
                    
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default TodoBody;