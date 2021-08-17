import { useState } from "react";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([{ id: 0, text: "Learn React" }]);

  function handleDelete(id) {
    setTodos(todos.filter((item) => item.id !== id));
  }
  return (
    <div>
      <h1>My Todos</h1>
      {todos.map((todo) => (
        <Todo text={todo.text} onDelete={handleDelete} id={todo.id} />
      ))}
    </div>
  );
}

export default App;
