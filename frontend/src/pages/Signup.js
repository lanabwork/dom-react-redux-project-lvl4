import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Container, Button, Col, Form, Row, Card, Image, FloatingLabel } from 'react-bootstrap';
import { signup } from 'api/auth';
import { useAuth } from 'context/auth';
import { toast } from 'react-toastify';

const Signup = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  let SignupSchema = yup.object().shape({
    username: yup.string()
      .required('Обязательное поле')
      .min(3, 'От 3 до 20 символов')
      .max(20, 'От 3 до 20 символов'),
    password: yup.string()
      .required('Обязательное поле')
      .min(6, 'Не менее 6 символов'),
    confirmPassword: yup.string()
      .required('Обязательное поле')
      .oneOf([yup.ref('password'), null], 'Пароли должны совпадать'),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
    isSubmitting: false,
    validationSchema: SignupSchema,
    onSubmit: (values, { setSubmitting }) => {
      signup(values)
        .then((res) => {
          const token = res?.data?.token;
          const username = res?.data?.username;
          if (token && username) {
            setUser(token, username);
            navigate('/');
          }
          if (res.status === 409) {
            toast.error('Такой пользователь уже существует');
          }
        })
        .catch(() => {
          toast.error('Ошибка при обработке запроса');
        })
        .finally(() => {
          setSubmitting(false);
        });
    },
  });

  return (
    <Container fluid className='h-100 login'>
      <Row className="justify-content-center h-100">
        <Col className='col-12' md={8} xxl={6}>
          <Card className='shadow-sm'>
            <Card.Body className='row p-5'>
              <Col className='col-12 d-flex align-items-center justify-content-center' md={6}>
                <Image src={require('../assets/images/signup.jpg')} roundedCircle />
              </Col>
              <Form
                noValidate
                onSubmit={formik.handleSubmit}
                className='col-12 col-md-6 mt-3 mt-mb-0'
              >
                <h1 className='text-center mb-4'>Регистрация</h1>
                <FloatingLabel
                  controlId="username"
                  label="Имя пользователя"
                  className="mb-3"
                >
                  <Form.Control
                    name="username"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    placeholder="Имя пользователя"
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
                <FloatingLabel controlId="password" label="Подтвердите пароль" className="mb-4">
                  <Form.Control
                    name="confirmPassword"
                    type="password"
                    placeholder="Подтвердите пароль"
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                    isInvalid={!!formik.errors.confirmPassword}
                  />
                  <Form.Control.Feedback type='invalid'>{formik.errors.confirmPassword}</Form.Control.Feedback>
                </FloatingLabel>
                <Button
                  variant="outline-primary"
                  className='w-100 mb-3'
                  type="submit"
                  disabled={!!formik.errors.username || !!formik.errors.password || formik.isSubmitting}
                >
                  Зарегистрироваться
                </Button>
              </Form>
            </Card.Body>
            <Card.Footer className="p-4">
              <div className='text-center'>
                <span>Есть аккаунт? </span>
                <Link to='/login'>Авторизация</Link>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
