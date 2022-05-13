import React from 'react';
import "./Task.css";
import {CgClose, CgInfo} from 'react-icons/cg'
import {useNavigate} from 'react-router-dom'

const Task = ({task, handleTaskClick, handleTextDeletion}) => {

    const navigate = useNavigate();

    const handleTaskDetailsClick = () => {
      navigate(`/${task.title}`)
    }
    return (

      <div className="task-container" style = {task.completed ? {borderLeft: '6px solid aqua'} : {}}>
        
        <div className="task-title" onClick = {()=>handleTaskClick(task.id)}>
          {task.title}
        </div>

        <div className="button-container">
          <button className='remove-task-button' onClick={()=>handleTextDeletion(task.id)}>
            <CgClose/>
          </button>
          <button className='see-task-details-button' onClick={handleTaskDetailsClick}>
            <CgInfo/>
          </button>
        </div>
      </div>

        
    );
}
 
export default Task;