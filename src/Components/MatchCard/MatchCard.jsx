import React from "react";
import { Link } from "react-router-dom";
import styles from "./MatchCard.module.css";

const MatchCard = ({ fixture }) => {
  const { teams, league } = fixture;
  const team1Name = teams.home.name;
  const team2Name = teams.away.name;
  const team1Logo = teams.home.logo;
  const team2Logo = teams.away.logo;

  return (
    <div className={styles.matchCard}>
      <div className={styles.leagueInfo}>
        <img
          src={league.logo}
          alt={league.name}
          className={styles.leagueLogo}
        />
        <p>{league.name}</p>
      </div>
      <div className={styles.teamLogos}>
        <img src={team1Logo} alt={team1Name} className={styles.teamLogo} />
        <p>
          {team1Name} vs {team2Name}
        </p>
        <img src={team2Logo} alt={team2Name} className={styles.teamLogo} />
      </div>
      <p>Fecha y hora: {fixture.fixture.date}</p>
      <p>{fixture.fixture.id}</p>
      <Link to={`/predictions/${fixture.fixture.id}`}>Ver Predicción</Link>
    </div>
  );
};

export default MatchCard;
