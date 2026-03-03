function DisplayTask({ todo, deleteTodo, startEditTodo, toggleTodo }) {
  return (
    <div className="flex items-center justify-between gap-4">
      {/* Left Side */}
      <div className="flex items-center gap-4 flex-1">
        {/* Checkbox */}
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="w-5 h-5 accent-purple-500 cursor-pointer"
        />

        {/* Task Text */}
        <span
          className={`text-lg transition-all duration-300 ${
            todo.completed ? "line-through text-gray-400" : "text-white"
          }`}
        >
          {todo.task}
        </span>
      </div>

      {/* Right Side Buttons */}
      <div className="flex gap-3">
        {/* Edit */}
        <button
          onClick={() => startEditTodo(todo)}
          className="px-4 py-1.5 rounded-lg text-sm font-medium
                     bg-gradient-to-r from-blue-500 to-indigo-500
                     hover:from-blue-600 hover:to-indigo-600
                     shadow-lg shadow-blue-500/30
                     transition duration-300 hover:scale-105"
        >
          Edit
        </button>

        {/* Delete */}
        <button
          onClick={() => deleteTodo(todo.id)}
          className="px-4 py-1.5 rounded-lg text-sm font-medium
                     bg-gradient-to-r from-rose-500 to-rose-700
                     hover:from-red-600 hover:to-red-700
                     shadow-lg shadow-red-500/30
                     transition duration-300 hover:scale-105"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default DisplayTask;
