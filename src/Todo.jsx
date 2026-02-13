import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddTask from "./AddTask";
import EditTask from "./EditTask";
import DisplayTask from "./DisplayTask";
import CompletedTask from "./CompletedTask";
import "./Todo.css";

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
    <div className="container">
      <AddTask
        newTodos={newTodos}
        updateTask={updateTask}
        addNewTodo={addNewTodo}
      />
      <hr />
      <div>
        <ul>
          {activeTodos.map((todo) => (
            <li key={todo.id}>
              {editingId === todo.id ? (
                <EditTask
                  editTask={editTask}
                  editTodo={editTodo}
                  saveEditTodo={saveEditTodo}
                />
              ) : (
                <DisplayTask
                  todo={todo}
                  toggleTodo={toggleTodo}
                  deleteTodo={deleteTodo}
                  editTask={startEditTodo}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
      <div>
        {completedTodos.length > 0 && (
          <div>
            <hr />
            <h4>Completed Tasks</h4>

            <ul>
              {completedTodos.map((todo) => (
                <li key={todo.id}>
                  <CompletedTask 
                  todo={todo} 
                  toggleTodo={toggleTodo} 
                  
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Todo;
