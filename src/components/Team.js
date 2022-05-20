/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import TeamCard from './TeamCard.js';
import { IMAGES } from '../assets';

const Team = () => {
  return(
    <div className="team-wrap">
      <a id='team' />
      <h2>Meet the Slowmates Team</h2>
      <div className="team">
        <TeamCard img={IMAGES.masterginge} twitter={'https://twitter.com/Masterginge27'} name={'@Masterginge'}/>
        <TeamCard img={IMAGES.steelneil} twitter={'https://twitter.com/Steelneil_'} name={'@SteelNeil.NFT'}/>
        <TeamCard img={IMAGES.nichNotNick} twitter={'https://twitter.com/RetroRecordss'} name={'@nich.eth'}/>
        <TeamCard img={IMAGES.karan} twitter={'https://twitter.com/KaranKbKb'} name={'@KaranKbKb'}/>
      </div>
    </div>
  );
};

export default Team;