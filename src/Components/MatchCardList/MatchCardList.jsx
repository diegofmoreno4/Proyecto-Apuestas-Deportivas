import React from "react";
import MatchCard from "../MatchCard/MatchCard";
import styles from "./MatchCardList.module.css";

const MatchCardList = ({ fixtures }) => {
  return (
    <div className={styles.matchcardlist}>
      {fixtures.map((fixture) => (
        <MatchCard key={fixture.fixture.id} fixture={fixture} />
      ))}
    </div>
  );
};

export default MatchCardList;
