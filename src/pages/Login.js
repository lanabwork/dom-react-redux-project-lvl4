import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Button } from 'react-bootstrap';
 
const Login = () => {
   const LoginSchema = Yup.object().shape({
   login: Yup.string().required('Required'),
   password: Yup.string().required('Required'),
 });
  
  return (
    <div className='login'>
      <div className='login__box'>
        <h1 className='h1'>Login</h1>
        <Formik
          initialValues = {{ login: '', password: '' }}
          validationSchema = { LoginSchema }
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
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
              <Form.Group className="mb-3" controlId="login">
                <Form.Control
                  type="text"
                  name="login"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.login}
                  placeholder="Enter login"
                />
                <Form.Text className="text-muted">
                {errors.login && touched.login && errors.login}
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Control
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter password"
                />
                <Form.Text className="text-muted">
                {errors.password && touched.password && errors.password}
                </Form.Text>
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