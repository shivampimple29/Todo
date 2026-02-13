import "./EditTask.css";

function EditTask({editTask,editTodo,saveEditTodo,todo}) {
  return (
    <div className="EditTask">
      <input type="text" value={editTask} onChange={editTodo} />
      <button onClick={()=>saveEditTodo(todo.id)}>Save</button>
    </div>
  );
}

export default EditTask;
