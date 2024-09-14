import React, { useContext } from 'react';
import TodoForm from '../components/Todos/TodoForm';
import TodoItem from '../components/Todos/TodoItem';
import { TodoContext } from '../context/TodoContext';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Todos = () => {
  const { todos } = useContext(TodoContext);
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div style={styles.container}>
      <button onClick={handleLogout} style={styles.logoutButton}>
        Logout
      </button>

      <div style={styles.contentWrapper}>
        <div style={styles.imageContainer}>
          <img src="images/op.jpg" alt="Side" style={styles.image} />
        </div>
        <div style={styles.mainContent}>
          <div style={styles.formContainer}>
            <TodoForm />
          </div>
          <div style={styles.todosContainer}>
            {todos.length === 0 ? (
              <p>No todos yet!</p>
            ) : (
              todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    minHeight: '100vh',
  },
  logoutButton: {
    alignSelf: 'flex-end',
    padding: '10px 20px',
    backgroundColor: '#E74C3C',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  imageContainer: {
    flexShrink: 0,
    maxWidth: '300px',
    width: '100%',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
  },
  mainContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    maxWidth: '600px',
    width: '100%',
  },
  formContainer: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  todosContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxHeight: '500px',
    overflowY: 'auto',
  },
};

//  responsiveness
const mediaQueries = {
  '@media (max-width: 768px)': {
    contentWrapper: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    imageContainer: {
      maxWidth: '100%',
      marginBottom: '20px',
    },
    mainContent: {
      maxWidth: '100%',
    },
  },
};

export default Todos;
