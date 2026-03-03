import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddTask from "./AddTask";
import EditTask from "./EditTask";
import DisplayTask from "./DisplayTask";
import CompletedTask from "./CompletedTask";

function Todo() {
  const [todos, setTodos] = useState([
    { task: "simple task", id: uuidv4(), completed: false },
  ]);
  const [newTodos, setNewTodos] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editTask, setEditTask] = useState("");

  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  // AddTask

  function updateTask(event) {
    setNewTodos(event.target.value);
  }

  function addNewTodo() {
    setTodos((todo) => [...todo, { task: newTodos, id: uuidv4() }]);
    setNewTodos("");
  }

  // Display Task

  function toggleTodo(id) {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  function deleteTodo(id) {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }

  function editTodo(event) {
    setEditTask(event.target.value);
  }

  function startEditTodo(todo) {
    setEditingId(todo.id);
    setEditTask(todo.task);
  }

  function saveEditTodo(id) {
    if (!editTask.trim()) return;

    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, task: editTask } : todo,
      ),
    );

    setEditingId(null);
    setEditTask("");
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black flex items-center justify-center p-4 sm:p-8 overflow-hidden">
      {/* Responsive Glow Effects */}
      <div
        className="absolute w-64 h-64 sm:w-[500px] sm:h-[500px]
                    bg-purple-600 opacity-30 blur-[120px] rounded-full
                    top-0 left-0"
      ></div>

      <div
        className="absolute w-56 h-56 sm:w-[400px] sm:h-[400px]
                    bg-blue-600 opacity-30 blur-[120px] rounded-full
                    bottom-0 right-0"
      ></div>

      {/* Glass Card */}
      <div
        className="relative w-full max-w-xl
                    backdrop-blur-xl bg-white/10
                    border border-white/20
                    rounded-2xl sm:rounded-3xl
                    shadow-2xl
                    p-5 sm:p-8
                    text-white"
      >
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 tracking-wide">
          ✨ Futuristic Todo
        </h1>

        {/* Add Task */}
        <div className="mb-6">
          <AddTask
            newTodos={newTodos}
            updateTask={updateTask}
            addNewTodo={addNewTodo}
          />
        </div>

        {/* Active Tasks */}
        <ul className="space-y-3 sm:space-y-4">
          {activeTodos.map((todo) => (
            <li
              key={todo.id}
              className="backdrop-blur-md bg-white/5
                       border border-white/10
                       rounded-xl
                       p-4
                       transition
                       hover:bg-white/10
                       duration-300"
            >
              {editingId === todo.id ? (
                <EditTask
                  editTask={editTask}
                  editTodo={editTodo}
                  saveEditTodo={saveEditTodo}
                  todo={todo}
                />
              ) : (
                <DisplayTask
                  todo={todo}
                  toggleTodo={toggleTodo}
                  deleteTodo={deleteTodo}
                  startEditTodo={startEditTodo}
                />
              )}
            </li>
          ))}
        </ul>

        {/* Completed */}
        {completedTodos.length > 0 && (
          <div className="mt-8">
            <div className="border-t border-white/20 pt-6">
              <h4 className="text-sm sm:text-base font-semibold mb-4 text-purple-300">
                Completed Tasks
              </h4>

              <ul className="space-y-3">
                {completedTodos.map((todo) => (
                  <li
                    key={todo.id}
                    className="backdrop-blur-md bg-green-500/10
                             border border-green-400/20
                             rounded-xl
                             p-4"
                  >
                    <CompletedTask todo={todo} toggleTodo={toggleTodo} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Todo;
