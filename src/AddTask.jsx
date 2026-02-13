import "./AddTask.css";

function AddTask({newTodos, updateTask, addNewTodo}) {
  return (
    <div className="AddTask">
      <input
        type="text"
        placeholder="Add a task"
        value={newTodos}
        onChange={updateTask}
      />
      <button onClick={addNewTodo}>Add</button>
    </div>
  );
}

export default AddTask;
