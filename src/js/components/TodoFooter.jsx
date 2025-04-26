import React from "react";

const TodoFooter = ({todos}) => {


    
    return (
        <>
            <footer className="footer container bg-light list-group list-group-flush w-50 p-3">
                {todos.length !== 1 ? `${todos.length} Items left` : `${todos.length} Items left`}                
            </footer>
        
        </>
    )
}

export default TodoFooter;