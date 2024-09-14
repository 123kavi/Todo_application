import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      toast.success('Login successful!');
      navigate('/todos');
    } else {
      toast.error('Invalid username or password');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftPanel}>
        <div style={styles.illustration}>
          <img src="/images/kl.avif" alt="Todo App Illustration" style={styles.image} />
          <p style={styles.text}>Add your todos</p>
          <p style={styles.subText}>Manage your tasks efficiently</p>
        </div>
      </div>
      <div style={styles.rightPanel}>
        <h1 style={styles.header}>Welcome to TaskLover</h1>
        <div style={styles.formWrapper}>
          <form onSubmit={handleLogin} style={styles.form}>
            <input
              type="text"
              placeholder="Username or Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={styles.input}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
            <button type="submit" style={styles.button}>Sign In</button>
          </form>
        </div>
        <p style={styles.forgotPassword}>Forgot password?</p>
        <button style={styles.googleButton}>Sign in with Google</button>
        <p>New to TaskLover? <a href="/register" style={styles.createAccount}>Create Account</a></p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  leftPanel: {
    flex: 1,
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  illustration: {
    textAlign: 'center',
  },
  image: {
    width: '100%',
    maxWidth: '500px', 
    height: 'auto',
  },
  text: {
    fontSize: '24px',
    margin: '20px 0 10px 0',
  },
  subText: {
    fontSize: '14px',
    color: '#666',
  },
  rightPanel: {
    flex: 1,
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  formWrapper: {
    width: '100%',
    maxWidth: '400px', 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: '24px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '12px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
  button: {
    padding: '12px',
    backgroundColor: '#5f6368',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
    margin: '20px 0',
  },
  forgotPassword: {
    textAlign: 'right',
    color: '#5f6368',
    cursor: 'pointer',
    fontSize: '14px',
  },
  googleButton: {
    padding: '12px',
    backgroundColor: '#4285F4',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
    marginTop: '20px',
  },
  createAccount: {
    color: '#5f6368',
    textDecoration: 'none',
  },
  '@media (max-width: 768px)': {
    container: {
      flexDirection: 'column',
    },
    leftPanel: {
      height: 'auto',
      padding: '10px',
    },
    rightPanel: {
      padding: '10px',
    },
  },
  '@media (max-width: 480px)': {
    image: {
      maxWidth: '300px', 
    },
    text: {
      fontSize: '20px',
    },
    subText: {
      fontSize: '12px',
    },
    header: {
      fontSize: '20px',
    },
    input: {
      padding: '10px',
      fontSize: '12px',
    },
    button: {
      padding: '10px',
      fontSize: '12px',
    },
    googleButton: {
      padding: '10px',
      fontSize: '12px',
    },
  },
};

export default Login;
