'use client';

import { useState } from 'react';
import Card from './Card';
import Button from './Button';
import Icon from './Icon';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Learn about MiniKit', completed: false },
    { id: 2, text: 'Build a Mini App', completed: true },
    { id: 3, text: 'Deploy to Base and go viral', completed: false },
  ]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    
    const newId = todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1;
    setTodos([...todos, { id: newId, text: newTodo, completed: false }]);
    setNewTodo('');
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <Card title="Get started">
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Add a new task..."
            className="flex-1 px-3 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#0052FF]"
          />
          <Button 
            variant="primary" 
            size="sm" 
            onClick={addTodo}
            icon={<Icon name="plus" size="sm" />}
          >
            Add
          </Button>
        </div>
        
        <ul className="space-y-2">
          {todos.map(todo => (
            <li key={todo.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={() => toggleTodo(todo.id)}
                  className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                    todo.completed 
                      ? 'bg-[#0052FF] border-[#0052FF]' 
                      : 'border-gray-500 bg-transparent'
                  }`}
                >
                  {todo.completed && <Icon name="check" size="sm" className="text-white" />}
                </button>
                <span className={`text-gray-300 ${todo.completed ? 'line-through opacity-70' : ''}`}>
                  {todo.text}
                </span>
              </div>
              <button
                type="button"
                onClick={() => deleteTodo(todo.id)}
                className="text-gray-500 hover:text-gray-300"
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
