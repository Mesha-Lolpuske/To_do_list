import { useState } from "react";
const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput("");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-400 via-cyan-300 to-sky-400">
      <div className="bg-white/90 backdrop-blur-sm shadow-lg rounded-3xl p-16">
        <h1 className="text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
          Todo List ✨
        </h1>
        <div className="mb-4 flex">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Add a new todo"
            className="flex-grow px-3 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-teal-400 "
          />
          <button 
          onClick={addTodo}
          className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-4 py-2 rounded-r-lg hover:opacity-90 transition-opacity cursor-pointer">
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {
            todos.map((todo) => (
              <li key={todo.id} className="flex items-center p-3 rounded-lg bg-teal-50 border border-teal-100">
                <input type="checkbox"  checked={todo.completed} onChange={()=> setTodos(
                  todos.map((t) => (t.id === todo.id ? { ...t, completed: !t.completed } : t))
                )} 
                className="mr-2 h-5 w-5 text-teal-600 rounded"
                />
                <span className={`flex-grow ${todo.completed ? "line-through text-gray-800" : "text-teal-700"}`}>{todo.text}</span>
                <button
                onClick={() => setTodos(todos.filter((t) => t.id !== todo.id))}
                className="ml-2 border-none p-2 rounded-lg bg-gradient-to-r from-rose-400 to-pink-400 text-white hover:opacity-90 transition-opacity cursor-pointer"
                >Delete</button>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default App;
