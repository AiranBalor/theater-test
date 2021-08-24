import React from 'react';
import './PieceCard.css';

function PieceCard({ cardInfo }) {
  return (
    <div className="piece-card">
      <div className="piece-card__cover">
        <h3 className="piece-card__title">{cardInfo.title}</h3>
      </div>
      <h3 className="piece-card__author">{cardInfo.author_firstName + " " + cardInfo.author_lastName}</h3>
      <p className="piece-card__sity">{cardInfo.city}</p>
      <p className="piece-card__year">{cardInfo.year}</p>
    </div>
  )
}

export default PieceCard
