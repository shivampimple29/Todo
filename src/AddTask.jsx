function AddTask({ newTodos, updateTask, addNewTodo }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
      <input
        type="text"
        placeholder="Add a futuristic task..."
        value={newTodos}
        onChange={updateTask}
        className="flex-1 bg-white/10 backdrop-blur-md
                   border border-white/20
                   rounded-xl px-4 py-3
                   text-white placeholder-white/60
                   focus:outline-none focus:ring-2
                   focus:ring-purple-400
                   transition duration-300"
      />

      <button
        onClick={addNewTodo}
        className="px-6 py-3 rounded-xl font-semibold
                   bg-gradient-to-r from-blue-500 to-indigo-500
                     hover:from-blue-600 hover:to-indigo-600
                     shadow-lg shadow-blue-500/30
                     transition duration-300 hover:scale-105"
      >
        Add
      </button>
    </div>
  );
}
export default AddTask;
