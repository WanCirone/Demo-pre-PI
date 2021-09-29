import React from 'react';
import './Card.css';

export default function Card ({min, max, name, style}) {
    return (
      <div className={style} >
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
          <div className="row">
            <div className="temp">
              <p>Min</p>
              <p>{min}°</p>
            </div>
            <div className="temp">
              <p>Max</p>
              <p>{max}°</p>
            </div>
          </div>
        </div>
      </div>
    );
};
