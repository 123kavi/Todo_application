import React, { useContext, useState } from 'react';
import { TodoContext } from '../../context/TodoContext';

const TodoItem = ({ todo }) => {
  const { deleteTodo, toggleCompletion, updateTodo } = useContext(TodoContext);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(todo.title);
  const [updatedDescription, setUpdatedDescription] = useState(todo.description);

  const handleUpdate = () => {
    updateTodo(todo.id, updatedTitle, updatedDescription);
    setIsEditing(false);
  };

  return (
    <div style={styles.todoItem}>
      {isEditing ? (
        <>
          <input 
            type="text" 
            value={updatedTitle} 
            onChange={(e) => setUpdatedTitle(e.target.value)} 
            style={styles.input}
          />
          <input 
            type="text" 
            value={updatedDescription} 
            onChange={(e) => setUpdatedDescription(e.target.value)} 
            style={styles.input}
          />
          <button onClick={handleUpdate} style={styles.saveButton}>Save</button>
        </>
      ) : (
        <>
          <h3 style={{ ...styles.title, textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.title}
          </h3>
          <p style={styles.description}>{todo.description}</p>
        </>
      )}
      <div style={styles.buttonsContainer}>
        <button onClick={() => toggleCompletion(todo.id)} style={styles.completeButton}>
          {todo.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={() => deleteTodo(todo.id)} style={styles.deleteButton}>Delete</button>
        <button onClick={() => setIsEditing(!isEditing)} style={styles.editButton}>Edit</button>
      </div>
    </div>
  );
};

const styles = {
  todoItem: {
    backgroundColor: '#282828',
    padding: '15px',
    borderRadius: '10px',
    border: '2px solid #444',
    marginBottom: '15px',
    color: '#fff',
    maxWidth: '100%', 
    boxSizing: 'border-box',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
  description: {
    fontSize: '1rem',
    marginBottom: '15px',
  },
  input: {
    padding: '8px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#2A2A2A',
    color: '#fff',
    width: '100%',
  },
  completeButton: {
    backgroundColor: '#2ECC71',
    color: '#fff',
    border: 'none',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px',
  },
  deleteButton: {
    backgroundColor: '#E74C3C',
    color: '#fff',
    border: 'none',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px',
  },
  editButton: {
    backgroundColor: '#3498DB',
    color: '#fff',
    border: 'none',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  saveButton: {
    backgroundColor: '#F1C40F',
    color: '#fff',
    border: 'none',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  buttonsContainer: {
    marginTop: '10px',
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',
    flexWrap: 'wrap',
  },
};

export default TodoItem;
