import React from 'react';

import RoadmapCard from './RoadmapCard.js';
import { IMAGES } from '../assets';

const Roadmap = () => {
  
  const text1 = 'The Waterfall marks the beginning of the Slowmates Universe.  In this world, we’ll find the near term activations planned for Slowmates, including the launch of $SLOW.  You’ll notice that we can journey to World 2 shortly after unlocking $SLOW.';
  const text2 = 'stuff about the grasslands zone';
  const text3 = 'Coming soon...';

  return(
    <div className="roadmap">
      <h1>Welcome to Slowmates Island</h1>
      <p>Slowmates Island is a land of NFT adventure with lots of discovery to be made. The Slowmates Island map features nine distinct worlds, each with different roadmap activations that will be unlocked as we go through our journey. As you can see in the map, two worlds Waterfall and Grasslands have already been unlocked. What mysteries lie behind the remaining seven worlds?</p>
      <img src={IMAGES.worldmap2} alt="" />
      <RoadmapCard img={IMAGES.waterfallZone} zoneName={'World One - Waterfall'} text={text1} />
      <RoadmapCard img={IMAGES.grasslandsZone} zoneName={'World Two - Grasslands'} text={text2} />
      <RoadmapCard img={IMAGES.volcanoZone} zoneName={'World Three - Volcano'} text={text3} />
    </div>
  );
};

export default Roadmap;