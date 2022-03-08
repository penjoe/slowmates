import React from 'react';

const TeamCard = ({ img, name, twitter }) => {
  return(
    <div className="team-card">
      <a href={twitter}>
        <h3>{name}</h3>
      </a>
      <img src={img} alt="" />
    </div>
  );
};

export default TeamCard;