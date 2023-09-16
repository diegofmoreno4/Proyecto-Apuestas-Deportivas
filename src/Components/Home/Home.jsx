import React, { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "../DatePicker/DatePicker";
import MatchCardList from "../MatchCardList/MatchCardList";
import LeagueFilter from "../LeagueFilter/LeagueFilter";
import styles from "./Home.module.css";

function Home() {
  const storedDate = localStorage.getItem("selectedDate") || "";
  const [date, setDate] = useState(storedDate);
  const [originalFixtures, setOriginalFixtures] = useState([]);
  const [leagues, setLeagues] = useState([]);
  const [selectedLeague, setSelectedLeague] = useState("");
  const [filteredFixtures, setFilteredFixtures] = useState([]);

  useEffect(() => {
    const fetchFixtures = async () => {
      try {
        const response = await axios.get(
          `https://v3.football.api-sports.io/fixtures?date=${date}&timezone=UTC`,
          {
            headers: {
              "x-rapidapi-host": "v3.football.api-sports.io",
              "x-rapidapi-key": "d4be141c41c61aae7be3a5348e1da5ce",
            },
          }
        );

        const uniqueLeagues = Array.from(
          new Set(response.data.response.map((fixture) => fixture.league))
        );

        setLeagues(uniqueLeagues);

        setOriginalFixtures(response.data.response);
      } catch (error) {
        console.error("Error al cargar los partidos", error);
      }
    };

    if (date) {
      localStorage.setItem("selectedDate", date);

      fetchFixtures();
    }
  }, [date]);

  useEffect(() => {
    const filterFixturesByLeague = () => {
      if (selectedLeague === "") {
        return originalFixtures;
      } else {
        return originalFixtures.filter(
          (fixture) => fixture.league === selectedLeague
        );
      }
    };

    const filteredFixturesResult = filterFixturesByLeague();

    setFilteredFixtures(filteredFixturesResult);
  }, [selectedLeague, originalFixtures]);

  return (
    <div className={styles.home}>
      <h1>Apuestas deportivas Proyecto</h1>
      <DatePicker onDateChange={setDate} />
      <LeagueFilter
        leagues={leagues}
        selectedLeague={selectedLeague}
        onChange={setSelectedLeague}
      />
      <MatchCardList fixtures={filteredFixtures} />
    </div>
  );
}

export default Home;

