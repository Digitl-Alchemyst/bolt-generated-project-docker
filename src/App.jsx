import React, { useState, useEffect } from 'react';

    function App() {
      const [todos, setTodos] = useState([]);
      const [input, setInput] = useState('');
      const username = localStorage.getItem('username') || 'User';
      const todoKey = `todos_${username}`;

      useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(todoKey)) || [];
        setTodos(storedTodos);
      }, []);

      useEffect(() => {
        localStorage.setItem(todoKey, JSON.stringify(todos));
      }, [todos]);

      const handleAddTodo = () => {
        if (input.trim()) {
          setTodos([...todos, input]);
          setInput('');
        }
      };

      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
          <h1 className="text-4xl font-bold neon-text mb-8">Todo App</h1>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new todo..."
            className="p-2 border rounded-lg text-black bg-white neon-text"
          />
          <button onClick={handleAddTodo} className="mt-4 px-4 py-2 bg-neon-blue text-white rounded-lg hover:bg-neon-green">
            Add Todo
          </button>
          <ul className="mt-8">
            {todos.map((todo, index) => (
              <li key={index} className="p-2 border-b border-gray-700 neon-text">{todo}</li>
            ))}
          </ul>
        </div>
      );
    }

    export default App;
