import './Completedtask.css';

function CompletedTask({todo,toggleTodo}){
    return(
        <div className="Completed">
             <input type="checkbox" checked={todo.completed} onChange={()=>toggleTodo(todo.id)}/>
      <span>{todo.task}</span>
        </div>
    )
}

export default CompletedTask;