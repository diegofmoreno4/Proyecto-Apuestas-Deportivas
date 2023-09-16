// Predictions.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styles from "./Predictions.module.css";

const Predictions = () => {
  const { id } = useParams(); 
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://v3.football.api-sports.io/predictions?fixture=${id}`,
          {
            headers: {
              "x-rapidapi-host": "v3.football.api-sports.io",
              "x-rapidapi-key": "d4be141c41c61aae7be3a5348e1da5ce",
            },
          }
        );

        if (response.data.response && response.data.response.length > 0) {
          const { teams, league, predictions } = response.data.response[0];
          const homeTeam = teams.home;
          const awayTeam = teams.away;
          const leagueName = league.name;
          const leagueLogo = league.logo;
          const { advice } = predictions;

          setPrediction({ homeTeam, awayTeam, leagueName, leagueLogo, advice });
        } else {
          setPrediction(null);
        }
      } catch (error) {
        console.error("Error al cargar la predicción", error);
        setPrediction(null);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  return (
    <div className={styles.predictions}>
      <h1>Predicciones para el partido {id}</h1>
      {prediction ? (
        <div className={styles.predictionDetails}>
          <div className={styles.league}>
            <h2>Liga: {prediction.leagueName}</h2>
            <img src={prediction.leagueLogo} alt={prediction.leagueName} />
          </div>
          <div className={styles.teams}>
            <div className={styles.team1}>
              <h2>Equipo Local: {prediction.homeTeam.name}</h2>
              <img src={prediction.homeTeam.logo} alt={prediction.homeTeam.name} />
            </div>
           <p>VS</p>
            <div className={styles.team2}>
              <h2>Equipo Visitante: {prediction.awayTeam.name}</h2>
              <img src={prediction.awayTeam.logo} alt={prediction.awayTeam.name} />
            </div>
          </div>
          <div className={styles.advice}>
            <h2>Apuesta confiable: {prediction.advice}</h2>
          </div>
        </div>
      ) : (
        <p>Cargando predicciones...</p>
      )}
    </div>
  );
};

export default Predictions;
