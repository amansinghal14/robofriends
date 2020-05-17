import React from 'react';
import './Card.css';

const Card = (props) => {
  const { id, name, email } = props;
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${id}?size=200x200`} alt='robot' />
      <div>
        <h2>{name}</h2>
        <h3>{email}</h3>
      </div>
    </div>
  );
}

export default Card;