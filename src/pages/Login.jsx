import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Button, Alert } from 'react-bootstrap';
import { auth } from '@/api/auth.js';
import { useAuth } from '@/context/auth.js';
 
const Login = () => {
  let navigate = useNavigate();

  const { setAccessToken } = useAuth();

   const LoginSchema = Yup.object().shape({
    username: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
   });
  
  return (
    <div className='login'>
      <div className='login__box'>
        <h1 className='h1'>Login</h1>
        <Formik
          initialValues = {{ username: '', password: '', isIncorrectData: false }}
          validationSchema = { LoginSchema }
          onSubmit={async (values, { setSubmitting }) => {
            const data = await auth(values);
            if (data) {
              localStorage.setItem('token', data.token);
              setAccessToken(data.token);
              setSubmitting(false);
              navigate('/');
            } else {
              values.isIncorrectData = true;
            }
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form onSubmit={handleSubmit}>
              {values.isIncorrectData && <Alert variant='danger'>
                Не правильно введен логин/пароль
              </Alert>}
              <Form.Group className="mb-3" controlId="username">
                <Form.Control
                  type="text"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  placeholder="Enter username"
                  isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Control
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter password"
                  isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>
              <Button variant="primary" type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
   </div>
  )};
 
 export default Login;