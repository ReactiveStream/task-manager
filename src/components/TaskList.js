import React, { useState } from 'react';

const TaskList = ({tasks,onTaskSelect}) => {

    return(
          <div>
            <h2>Tasks:</h2>
            <ul>
              {tasks.map((task)=>(
                <li key={task.id} onClick={()=> onTaskSelect(task)}>
                  <h3>{task.taskid}</h3>
                  <p>{task.title}</p>
                  <p>{task.description}</p>
                </li>
              )

              )}
            </ul>
          </div>

    )

}

export default  TaskList;