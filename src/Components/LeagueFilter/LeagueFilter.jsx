import React from 'react';
import styles from './LeagueFilter.module.css';

const LeagueFilter = ({ leagues, selectedLeague, onChange }) => {
  return (
    <div className={styles['league-filter-container']}>
      <div className={styles['league-filter']}>
        <label className={styles['league-filter-label']} htmlFor="leagueFilter">
          Filtrar por liga:
        </label>
        <select
          id="leagueFilter"
          className={styles['league-filter-select']}
          value={selectedLeague}
          onChange={(e) => onChange(e.target.value)}
        >
          <option key="all" value="">
            Todas las ligas
          </option>
          {leagues.map((league, index) => (
            <option key={index} value={league.id}>
              {league.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default LeagueFilter;

