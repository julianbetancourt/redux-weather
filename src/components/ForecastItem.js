import React from 'react';

const ForecastItem = ({day, icon, temp}) => {
  return (
    <li className="coming-weather__item">
      <span className="coming-weather__item__date">{day}</span>
      <i className={`wi ${icon}`}></i>
      <span className="coming-weather__item__temp">{temp}º</span>
    </li>
  );
}

export default ForecastItem;
