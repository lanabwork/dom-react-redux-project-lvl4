import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NotFoundImage from '../assets/images/404.svg';
import { useTranslation, Trans } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className='text-center'>
      <Image src={NotFoundImage} fluid className='h-25' />
      <h1 className="h4 text-muted">{t('NotFoundPage.header')}</h1>
      <p className="text-muted">
        <Trans className="text-muted" i18nKey="NotFoundPage.linkMainPage"> <Link to="/" /></Trans>
      </p>
    </div>
  )
};

export default NotFound;
