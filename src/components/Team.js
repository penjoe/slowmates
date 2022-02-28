import React from 'react';

import TeamCard from './TeamCard.js';
import { IMAGES } from '../assets';

const Team = () => {
  return(
    <div className="team-wrap">
      <h2>Meet the Slowmates Team</h2>
      <div className="team">
        <TeamCard img={IMAGES.team1} name={'person one'}/>
        <TeamCard img={IMAGES.team2} name={'person two'}/>
        <TeamCard img={IMAGES.team3} name={'person three'}/>
      </div>
    </div>
  );
};

export default Team;