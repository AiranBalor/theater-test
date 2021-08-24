import React from 'react';
import AuthorsColumn from './AuthorsColumn';
import PieceGallery from './PieceGallery';
import './PieceInfo.css';

function PieceInfo({ filteredData, sortedAuthors }) {

  return (
    <div className="piece-info">
      <PieceGallery filteredData={filteredData}></PieceGallery>
      <AuthorsColumn sortedAuthors={sortedAuthors}></AuthorsColumn>
    </div>
  );
}

export default PieceInfo
