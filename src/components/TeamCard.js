import React from 'react';

const TeamCard = ({ img, name }) => {
  return(
    <div className="team-card">
      <h3>{name}</h3>
      <img src={img} alt="" />
    </div>
  );
};

export default TeamCard;