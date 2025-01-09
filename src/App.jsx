import { useState } from 'react';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map((task) => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', textAlign: 'center' }}>
      <h1>To-Do List test</h1>
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} addTask={addTask} />
    </div>
  );
}

export default App;
