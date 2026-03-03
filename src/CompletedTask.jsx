function CompletedTask({ todo, toggleTodo }) {
  return (
    <div className="flex items-center gap-4">
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="w-5 h-5 accent-green-400 cursor-pointer"
      />

      {/* Completed Text */}
      <span className="text-lg line-through text-gray-400 transition-all duration-300">
        {todo.task}
      </span>
    </div>
  );
}

export default CompletedTask;
