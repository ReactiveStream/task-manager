import React, { useState } from 'react';
import './styles.css';
import TaskList from './TaskList';

const TaskForm = ({tasks,selectedTask,onAddTask,onUpdateTask,deletetaskcall}) => {

    const [title,setTitle] = useState('');
    const [description,setDescription] =useState('');
    const [taskid,settaskid] =useState('');
    const [completed, setCompleted] = useState(selectedTask ? selectedTask.completed : false);


    const handleSubmit = (event) => {
        event.preventDefault();
        if (selectedTask) {
          const updatedTask = {
            ...selectedTask,
            title,
            description,
           taskid
          };
          onUpdateTask(updatedTask);
        } else {
          const newTask = {
            id: tasks.length + 1,
            title,
            description,
            taskid
          };
          onAddTask(newTask);
        }
      };


      const deletetask = () => {
        const newTask = {
           ...selectedTask,
            taskid
          };
        deletetaskcall(newTask);
      }

    return (
        <div>
        <form onSubmit={handleSubmit} className="task-form">
            <label>
            TaskId:
            <input type="text" value={taskid} onChange={(e) => settaskid(e.target.value)} />
        </label>
        <label>
            Title:
            <input type="text" value={title}  onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
            Description:
           <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
         <button type="submit">{selectedTask ? 'Update Task' : 'Add Task'}</button>
         <br></br>
         <button type="button" disabled={selectedTask ? true: false} onClick={deletetask} >Delete</button>
        </form>
         </div>

    );

};


export default TaskForm;