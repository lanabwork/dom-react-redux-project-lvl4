import React from 'react';

const SvgIcon = ({icon, width, height}) => (
  <svg
    viewBox={icon.viewBox}
    className={`icon icon-${icon.id}`}
    width={width}
    height={height}
  >
    <use xlinkHref={`#${icon.id}`} />
  </svg>
);

export default SvgIcon;