import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate(); // ✅ React Router navigation

  const toggleMode = () => setIsSignup((prev) => !prev);

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    name: isSignup
      ? Yup.string().required('Name is required')
      : Yup.string().notRequired(),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm, setErrors }) => {
    const endpoint = isSignup
      ? 'https://ischool.eduengine.co.ke/api/signup'
      : 'https://ischool.eduengine.co.ke/api/login';

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (res.ok) {
        //alert(data.message || 'Success');
 if (data.token) {
  localStorage.setItem('token', data.token);

  if (data.user && data.user.name) {
    localStorage.setItem('user', JSON.stringify({ name: data.user.name }));
  } else {
    console.warn('No user name found in response');
  }

  navigate('/requests');
}
        resetForm();
      } else {
        setErrors({ email: data.error || 'Login/Signup failed' });
      }
    } catch (err) {
      setErrors({ email: 'Server error. Try again later.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={containerStyle}>
      <h2>{isSignup ? 'Sign Up' : 'Log In'}</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ isSubmitting }) => (
          <Form>
            {isSignup && (
              <div style={fieldWrapper}>
                <Field name="name" placeholder="Your Name" style={inputStyle} />
                <ErrorMessage name="name" component="div" style={errorStyle} />
              </div>
            )}

            <div style={fieldWrapper}>
              <Field name="email" type="email" placeholder="Email Address" style={inputStyle} />
              <ErrorMessage name="email" component="div" style={errorStyle} />
            </div>

            <div style={fieldWrapper}>
              <Field name="password" type="password" placeholder="Password" style={inputStyle} />
              <ErrorMessage name="password" component="div" style={errorStyle} />
            </div>

            <button type="submit" style={buttonStyle} disabled={isSubmitting}>
              {isSignup ? 'Sign Up' : 'Log In'}
            </button>
          </Form>
        )}
      </Formik>

      <p style={{ textAlign: 'center', marginTop: '10px' }}>
        {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
        <span onClick={toggleMode} style={{ color: '#007bff', cursor: 'pointer' }}>
          {isSignup ? 'Log In' : 'Sign Up'}
        </span>
      </p>
    </div>
  );
};

const containerStyle = {
  maxWidth: '400px',
  margin: '50px auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '10px',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '5px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  width: '100%',
  padding: '10px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
};

const errorStyle = {
  color: 'red',
  fontSize: '0.9em',
  marginBottom: '10px',
};

const fieldWrapper = {
  marginBottom: '15px',
};

export default AuthPage;
