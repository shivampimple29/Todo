import './DisplayTask.css';
import CompletedTask from './CompletedTask';

function DisplayTask({todo,deleteTodo,startEditTodo,toggleTodo}) {
  return (
    <div>
        <input type="checkbox" checked={todo.completed} onChange={()=>toggleTodo(todo.id)}/>
      <span>{todo.task}</span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      <button onClick={() => startEditTodo(todo)}>Edit</button>
    </div>
  );
}

export default DisplayTask;
