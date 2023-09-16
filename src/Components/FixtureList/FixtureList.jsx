import React from 'react';

const FixtureList = ({ fixtures, onFixtureClick }) => {
  return (
    <div>
      <h2>Partidos del día</h2>
      <ul>
        {fixtures.map((fixture) => (
          <li key={fixture.fixture.id}>
            <button onClick={() => onFixtureClick(fixture.fixture.id)}>
              {fixture.teams.home.name} vs {fixture.teams.away.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FixtureList;

