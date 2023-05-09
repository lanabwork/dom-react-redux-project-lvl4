import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Container, Button, Col, Form, Row, Card, Image, FloatingLabel, Alert } from 'react-bootstrap';
import { login } from '../api/auth';
import { useAuth } from '../context/auth';

const Login = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  let LoginSchema = yup.object().shape({
    username: yup.string().required('Обязательное поле'),
    password: yup.string().required('Обязательное поле'),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      isError: false,
    },
    isSubmitting: false,
    validationSchema: LoginSchema,
    onSubmit: (values, { setSubmitting }) => {
      login(values)
        .then(({ token, username }) => {
          setUser(token, username);
          navigate('/');
        })
        .catch(() => {
          values.isError = true;
        })
        .finally(() => {
          setSubmitting(false);
        });
    },
  });

  const closeAlert = () => {
    formik.values.isError = false;
  };

  return (
    <Container fluid className='h-100 login'>
      {!!formik.values.isError &&
        <Alert
          variant='danger'
          onClose={() => closeAlert()}
          dismissible
          className='position-fixed top-0 end-0'
        >
          Не правильно введен логин/пароль
        </Alert>
      }
      <Row className="justify-content-center h-100">
        <Col className='col-12' md={8} xxl={6}>
          <Card className='shadow-sm'>
            <Card.Body className='row p-5'>
              <Col className='col-12 d-flex align-items-center justify-content-center' md={6}>
                <Image src={require('../assets/images/login.jpeg')} roundedCircle />
              </Col>
              <Form
                noValidate
                onSubmit={formik.handleSubmit}
                className='col-12 col-md-6 mt-3 mt-mb-0'
              >
                <h1 className='text-center mb-4'>Войти</h1>
                <FloatingLabel
                  controlId="username"
                  label="Ваш ник"
                  className="mb-3"
                >
                  <Form.Control
                    name="username"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    placeholder="Ваш ник"
                    isInvalid={!!formik.errors.username}
                  />
                  <Form.Control.Feedback type='invalid'>{formik.errors.username}</Form.Control.Feedback>
                </FloatingLabel>
                <FloatingLabel controlId="password" label="Пароль" className="mb-4">
                  <Form.Control
                    name="password"
                    type="password"
                    placeholder="Пароль"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    isInvalid={!!formik.errors.password}
                  />
                  <Form.Control.Feedback type='invalid'>{formik.errors.password}</Form.Control.Feedback>
                </FloatingLabel>
                <Button
                  variant="outline-primary"
                  className='w-100 mb-3'
                  type="submit"
                  disabled={!!formik.errors.username || !!formik.errors.password || formik.isSubmitting}
                >
                  Войти
                </Button>
              </Form>
            </Card.Body>
            <Card.Footer className="p-4">
              <div className='text-center'>
                <span>Нет аккаунта? </span>
                <Link to='/signup'>Регистрация</Link>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
