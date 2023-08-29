import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  Container, Button, Col, Form, Row, Card, Image, FloatingLabel,
} from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { login } from '../api/auth';
import { useAuth } from '../context/auth';

const Login = function Login() {
  const { t } = useTranslation();
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const LoginSchema = yup.object().shape({
    username: yup.string().required(t('validationMessage.required')),
    password: yup.string().required(t('validationMessage.required')),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
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
          toast.error(t('loginForm.error'));
        })
        .finally(() => {
          setSubmitting(false);
        });
    },
  });

  return (
    <Container fluid className="h-100 login">
      <Row className="justify-content-center h-100">
        <Col className="col-12" md={8} xxl={6}>
          <Card className="shadow-sm">
            <Card.Body className="row p-5">
              <Col className="col-12 d-flex align-items-center justify-content-center" md={6}>
                {/* eslint-disable-next-line global-require */}
                <Image src={require('../assets/images/login.jpeg')} roundedCircle />
              </Col>
              <Form
                noValidate
                onSubmit={formik.handleSubmit}
                className="col-12 col-md-6 mt-3 mt-mb-0"
              >
                <h1 className="text-center mb-4">{t('loginPage.header')}</h1>
                <FloatingLabel
                  controlId="username"
                  label={t('loginForm.username')}
                  className="mb-3"
                >
                  <Form.Control
                    name="username"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    placeholder={t('loginForm.username')}
                    isInvalid={!!formik.errors.username}
                  />
                  <Form.Control.Feedback type="invalid">{formik.errors.username}</Form.Control.Feedback>
                </FloatingLabel>
                <FloatingLabel controlId="password" label={t('loginForm.password')} className="mb-4">
                  <Form.Control
                    name="password"
                    type="password"
                    placeholder={t('loginForm.password')}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    isInvalid={!!formik.errors.password}
                  />
                  <Form.Control.Feedback type="invalid">{formik.errors.password}</Form.Control.Feedback>
                </FloatingLabel>
                <Button
                  variant="outline-primary"
                  className="w-100 mb-3"
                  type="submit"
                  disabled={
                    !!formik.errors.username || !!formik.errors.password || formik.isSubmitting
                  }
                >
                  {t('loginForm.submitButton')}
                </Button>
              </Form>
            </Card.Body>
            <Card.Footer className="p-4">
              <div className="text-center">
                <span>
                  {t('loginPage.footer')}
                  {' '}
                </span>
                <Link to="/signup">{t('loginPage.signUpLink')}</Link>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
