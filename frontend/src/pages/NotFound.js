import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NotFoundImage from '../assets/images/404.svg';

const NotFound = () => (
  <div className='text-center'>
    <Image src={NotFoundImage} fluid className='h-25' />
    <h1 className="h4 text-muted">Страница не найдена</h1>
    <p className="text-muted">Но вы можете перейти <Link to='/'>на главную страницу</Link></p>
  </div>
);

export default NotFound;
