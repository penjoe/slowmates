import React from 'react';

const TeamCard = ({ img, name, twitter, placement, role }) => {
  return(
    <div className={`team-card team-card-${placement}`}>
      <img src={img} alt="" />
      <a href={twitter}>
        <h3>{name}</h3>
      </a>
      <p>{role}</p>
    </div>
  );
};

export default TeamCard;