import React from "react";
import Task from "./Task";

const Tasks = ({tasks, handleTaskClick, handleTextDeletion}) => {
    
    return (    
        <>
            {tasks.map((task) => {
               return <Task task = {task} handleTaskClick={handleTaskClick} handleTextDeletion={handleTextDeletion}/>
            })}
        </>
    )
}

export default Tasks;