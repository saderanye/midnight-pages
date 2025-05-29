import React, { useState } from 'react';

function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Brush Teeth', completed: false },
    { id: 2, name: 'Floss', completed: false },
    { id: 3, name: 'Wear Retainer', completed: false },
  ]);

  return (
    <div>
      <h2>Today’s Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input type="checkbox" checked={task.completed} />
            {task.name}
          </li>
        ))}
      </ul>
    </div>
  );
}




export default TaskList;
