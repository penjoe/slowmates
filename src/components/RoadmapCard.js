import React from 'react';

const RoadmapCard = ({ zoneName, img, text }) => {
  return(
    <div className="roadmap-card">
      <h2>{zoneName}</h2>
      <p>{text}</p>
      <img src={img} alt={zoneName} />
    </div>
  );
};

export default RoadmapCard;