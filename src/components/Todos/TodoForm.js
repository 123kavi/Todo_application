import React, { useState, useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';

const TodoForm = () => {
  const { addTodo } = useContext(TodoContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(title, description);
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={styles.input}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        style={styles.input}
      />
      <button type="submit" style={styles.addButton}>Add Task</button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '20px',
    maxWidth: '500px',
    margin: '0 auto',
  },
  input: {
    marginBottom: '15px',
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#2A2A2A',
    color: '#fff',
    fontSize: '1.1rem',
  },
  addButton: {
    padding: '10px 15px',
    borderRadius: '5px',
    backgroundColor: '#800000',
    border: 'none',
    cursor: 'pointer',
    color: '#fff',
    fontSize: '1.1rem',
  },
};

export default TodoForm;
