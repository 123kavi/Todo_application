import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Typography, Box, Grid } from '@mui/material';
import { AuthContext } from '../../context/AuthContext';
import bgImage from '../images/kl.avif'; // Your image path

const Register = () => {
  const { register } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      name: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
      name: Yup.string().required('Name is required'),
    }),
    onSubmit: (values) => {
      const success = register(values.email, values.password, values.name);
      if (success) {
        toast.success('Registration successful! Please log in.');
        navigate('/login');
      } else {
        toast.error('Email already exists');
      }
    },
  });

  return (
    <Grid container component="main" style={styles.container}>
    
      <Grid item xs={false} sm={4} md={6} style={styles.leftSide}>
        <Box style={styles.imageBox}>
          <img src={bgImage} alt="Illustration" style={styles.image} />
          <Typography variant="h5" style={styles.leftText}>
            Welcome to TaskLover!
          </Typography>
          <Typography style={styles.leftSubText}>
      Add Your Task! Register with us
          </Typography>
        </Box>
      </Grid>


      <Grid item xs={12} sm={8} md={6} style={styles.rightSide}>
        <Box style={styles.formBox}>
          <Typography variant="h4" style={styles.formTitle}>
            Register
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              id="name"
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              style={styles.inputField}
            />
            <TextField
              fullWidth
              margin="normal"
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              style={styles.inputField}
            />
            <TextField
              fullWidth
              margin="normal"
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              style={styles.inputField}
            />
            <Button
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
              style={styles.submitButton}
            >
              Register
            </Button>
          </form>
          <Typography style={styles.bottomText}>
            Already have an account? <a href="/login" style={styles.link}>Log in</a>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
  },
  leftSide: {
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  imageBox: {
    textAlign: 'center',
  },
  image: {
    width: '80%',
    maxWidth: '400px',
    height: 'auto',
    marginBottom: '20px',
  },
  leftText: {
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  leftSubText: {
    color: '#666',
    fontSize: '14px',
    maxWidth: '300px',
    margin: '0 auto',
  },
  rightSide: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '20px',
  },
  formBox: {
    width: '80%',
    maxWidth: '400px',
    padding: '40px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  },
  formTitle: {
    textAlign: 'center',
    marginBottom: '20px',
    fontWeight: '600',
  },
  inputField: {
    marginBottom: '20px',
  },
  submitButton: {
    marginTop: '20px',
    padding: '10px 0',
    fontWeight: 'bold',
  },
  bottomText: {
    textAlign: 'center',
    marginTop: '20px',
  },
  link: {
    color: '#3f51b5',
    textDecoration: 'none',
  },
  // Responsive  for smaller screens
  '@media (max-width: 768px)': {
    container: {
      flexDirection: 'column',
    },
    leftSide: {
      height: 'auto',
    },
    rightSide: {
      padding: '10px',
    },
    image: {
      maxWidth: '300px',
    },
  },
  '@media (max-width: 480px)': {
    image: {
      maxWidth: '200px',
    },
    leftText: {
      fontSize: '20px',
    },
    leftSubText: {
      fontSize: '12px',
    },
    formTitle: {
      fontSize: '20px',
    },
    inputField: {
      marginBottom: '10px',
    },
    submitButton: {
      padding: '10px',
      fontSize: '12px',
    },
  },
};

export default Register;
