import React from 'react';
import './PieceGallery.css';
import PieceCard from './PieceCard';

function PieceGallery({ filteredData }) {
  return (
    <section className="piece-gallery">
      {
        filteredData.map((card) => {
          return (
            <PieceCard cardInfo={card} key={card._id}></PieceCard>
          )
        })
      }
    </section>
  )
}

export default PieceGallery
