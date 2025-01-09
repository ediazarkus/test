function Task({ task, toggleTask, deleteTask }) {
    return (
      <li
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px',
          margin: '5px 0',
          border: '1px solid #ccc',
          borderRadius: '5px',
          backgroundColor: task.completed ? '#d4edda' : '#f8d7da',
        }}
      >
        <span
          onClick={() => toggleTask(task.id)}
          style={{
            textDecoration: task.completed ? 'line-through' : 'none',
            cursor: 'pointer',
          }}
        >
          {task.text}
        </span>
        <button
          onClick={() => deleteTask(task.id)}
          style={{
            backgroundColor: 'red',
            color: 'white',
            border: 'none',
            padding: '5px 10px',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Delete
        </button>
      </li>
    );
  }
  
  export default Task;
  