import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  Container, Button, Col, Form, Row, Card, Image, FloatingLabel,
} from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { signup } from '../api/auth';
import { useAuth } from '../context/auth';

const Signup = function Signup() {
  const { t } = useTranslation();
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const SignupSchema = yup.object().shape({
    username: yup.string()
      .required(t('validationMessage.required'))
      .min(3, t('validationMessage.minMax', { min: 3, max: 20 }))
      .max(20, t('validationMessage.minMax', { min: 3, max: 20 })),
    password: yup.string()
      .required(t('validationMessage.required'))
      .min(6, t('validationMessage.min', { count: 6 })),
    confirmPassword: yup.string()
      .required(t('validationMessage.confirmPassword'))
      .oneOf([yup.ref('password'), null], t('validationMessage.confirmPassword')),
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
            toast.error(t('signUpForm.errors.usernameNotUnique'));
          }
        })
        .catch(() => {
          toast.error(t('signUpForm.errors.unknownError'));
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
                <Image src={require('../assets/images/signup.jpg')} roundedCircle />
              </Col>
              <Form
                noValidate
                onSubmit={formik.handleSubmit}
                className="col-12 col-md-6 mt-3 mt-mb-0"
              >
                <h1 className="text-center mb-4">{t('signUpPage.header')}</h1>
                <FloatingLabel
                  controlId="username"
                  label={t('signUpForm.username')}
                  className="mb-3"
                >
                  <Form.Control
                    name="username"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    placeholder={t('signUpForm.username')}
                    isInvalid={!!formik.errors.username}
                  />
                  <Form.Control.Feedback type="invalid">{formik.errors.username}</Form.Control.Feedback>
                </FloatingLabel>
                <FloatingLabel controlId="password" label={t('signUpForm.password')} className="mb-4">
                  <Form.Control
                    name="password"
                    type="password"
                    placeholder={t('signUpForm.password')}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    isInvalid={!!formik.errors.password}
                  />
                  <Form.Control.Feedback type="invalid">{formik.errors.password}</Form.Control.Feedback>
                </FloatingLabel>
                <FloatingLabel controlId="confirmPassword" label={t('signUpForm.confirmPassword')} className="mb-4">
                  <Form.Control
                    name="confirmPassword"
                    type="password"
                    placeholder={t('signUpForm.confirmPassword')}
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                    isInvalid={!!formik.errors.confirmPassword}
                  />
                  <Form.Control.Feedback type="invalid">{formik.errors.confirmPassword}</Form.Control.Feedback>
                </FloatingLabel>
                <Button
                  variant="outline-primary"
                  className="w-100 mb-3"
                  type="submit"
                >
                  {t('signUpForm.submitButton')}
                </Button>
              </Form>
            </Card.Body>
            <Card.Footer className="p-4">
              <div className="text-center">
                <span>
                  {t('signUpPage.footer')}
                  {' '}
                </span>
                <Link to="/login">{t('signUpPage.loginLink')}</Link>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
