/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import TeamCard from "./TeamCard.js";
import { IMAGES } from "../assets";

const Team = () => {
  return (
    <div className="team-wrap">
      <a id="team" />
      <h1>Meet the Slowmates Team</h1>
      <div className="team">
        <TeamCard
          img={IMAGES.team3}
          placement={1}
          twitter={"https://twitter.com/CODENAME883"}
          name={"@Codename"}
          role={"Co-Founder"}
        />
        <TeamCard
          img={IMAGES.team2}
          placement={2}
          twitter={"https://twitter.com/darwinite24"}
          name={"@Darwinite"}
          role={'Co-Founder'}
        />
        <TeamCard
          img={IMAGES.steelneil}
          placement={3}
          twitter={"https://twitter.com/Steelneil_"}
          name={"@SteelNeil.NFT"}
          role={'Marketing'}
        />
        <TeamCard
          img={IMAGES.masterginge}
          placement={4}
          twitter={"https://twitter.com/Masterginge27"}
          name={"@masterginge"}
          role={'Community Manager'}
        />
        <TeamCard
          img={IMAGES.karan}
          placement={5}
          twitter={"https://twitter.com/KaranKbKb"}
          name={"@KaranKbKb"}
          role={'Intern'}
        />
      </div>
    </div>
  );
};

export default Team;
