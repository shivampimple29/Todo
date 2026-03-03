function EditTask({ editTask, editTodo, saveEditTodo, todo }) {
  return (
    <div className="flex items-center gap-3">
      {/* Glass Input */}
      <input
        type="text"
        value={editTask}
        onChange={editTodo}
        className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 
                   rounded-xl px-4 py-2 text-white placeholder-white/60
                   focus:outline-none focus:ring-2 focus:ring-purple-400
                   transition duration-300"
        placeholder="Edit your task..."
      />

      {/* Neon Save Button */}
      <button
        onClick={() => saveEditTodo(todo.id)}
        className="px-5 py-2 rounded-xl font-medium
                   bg-gradient-to-r from-blue-500 to-indigo-500
                     hover:from-blue-600 hover:to-indigo-600
                     shadow-lg shadow-blue-500/30
                     transition duration-300 hover:scale-105"
      >
        Save
      </button>
    </div>
  );
}

export default EditTask;
