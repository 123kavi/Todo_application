import React, { createContext, useState, useContext, useEffect } from 'react';
import { AuthContext } from './AuthContext';

// Creating the Todo Context
export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [todos, setTodos] = useState([]);

  // Fetch todos for the logged-in user from localStorage
  useEffect(() => {
    if (user) {
      const savedTodos = JSON.parse(localStorage.getItem(user.username + '_todos')) || [];
      setTodos(savedTodos);
    }
  }, [user]);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    if (user) {
      localStorage.setItem(user.username + '_todos', JSON.stringify(todos));
    }
  }, [todos, user]);

  // Add a new todo
  const addTodo = (title, description) => {
    const newTodo = { id: Date.now(), title, description, completed: false };
    setTodos([...todos, newTodo]);
  };

  // Update a todo
  const updateTodo = (id, updatedTitle, updatedDescription) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: updatedTitle, description: updatedDescription } : todo
      )
    );
  };

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Toggle the completed status of a todo
  const toggleCompletion = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleCompletion }}>
      {children}
    </TodoContext.Provider>
  );
};
