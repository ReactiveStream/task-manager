import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const TaskManager = () =>{
    const[selectedtask,setselectedtask] = useState(null);
    const [tasks, setTasks] = useState([]);
    
    const handleAddTask = (newTask) => {
        setTasks([...tasks, newTask]);
      };
 
      const handleUpdateTask = (updatedTask) => {
        const updatedTasks = tasks.map((task) => (task.taskid === updatedTask.taskid ? updatedTask : task));
        setTasks(updatedTasks);
      };

    const handleselectedtask = (task) => {
        setselectedtask(task);
    }

    const deletetask= (deletetask) => {
       const updatedTasks = tasks.filter((task) => task.taskid !== deletetask.taskid);
        setTasks(updatedTasks);
    } 

    return (
        <>
        <TaskForm tasks={tasks}
        selectedTask={selectedtask}
        onAddTask={handleAddTask}
        onUpdateTask={handleUpdateTask}
        deletetaskcall={deletetask}>

        </TaskForm>
        <TaskList tasks={tasks} onTaskSelect={handleselectedtask} >
  
        </TaskList>
       </>
    );
};

export default TaskManager;