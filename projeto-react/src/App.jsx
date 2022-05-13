import React, { useEffect, useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import axios from 'axios';

import Header from './components/Header';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import TaskDetails from './components/TaskDetails';

import './App.css';

const App = () => {

  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: "Estudar",
      completed: false
    },
    {
      id: '2',
      title: "Ler livros",
      completed: true
    }
  ]);

  useEffect(()=>{
    const fetchTasks = async () => {
      const {data} = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10')
      setTasks(data)
    }
    fetchTasks();
  }, []) //quando deixamos o colchetes vazio, será executado 1 vez só, se colocarmos um estado, é chamado sempre que o estado atualiza.

  const handleTaskClick = (taskId)=>{
    const newTasks = tasks.map(task => {
      if(task.id === taskId) return {...task, completed: !task.completed}
      return task;
    })

    setTasks(newTasks)
  }

  const handleTaskAddition = (taskTitle)=>{
    const newTasks = [...tasks,
      {
        title: taskTitle,
        id: uuidv4(), //gera id aleatório
        completed: false
      }
    ]
    setTasks(newTasks);
  
  }

  const handleTextDeletion = (taskId) => {
    const newTask = tasks.filter(task => task.id !== taskId)

    setTasks(newTask)
  }

  const HomePage = () => {
    return(
      <>
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks tasks={tasks} 
          handleTaskClick={handleTaskClick} 
          handleTextDeletion={handleTextDeletion}
        />
    </> 
    )
  }

  return(
    <Router>
      <div className='container'>
        <Header/>
        <Routes>
          <Route path="/" element = {<HomePage/>}/>
          <Route path='/:taskTitle' element={<TaskDetails/>}/>
        </Routes> 
      </div>
    </Router>
  ) 
}

export default App;