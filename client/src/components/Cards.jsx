import React from 'react';
import './Cards.css';
import Card from './Card.jsx';
import classNames from 'classnames';


export default function Cards({cities}) {
  return (
    <div className='cards'>
      {cities.map(c => { 
        let style = classNames({
          styleOne: c.id === 1,
          styleTwo: c.id === 2,
          styleThree: c.id === 3,
          styleFour: c.id === 4
        })
        return <Card
        key={c.id}
        max={c.max}
        min={c.min}
        name={c.name}
        style={style} 
        /> })
      }
    </div>
  );
}