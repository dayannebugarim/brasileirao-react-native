import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import { getTeamStatsByLeague } from "../../services/api";
import { styles } from "./styles";

export default function TeamStats({ teamId, leagueId }) {
  const [data, setData] = useState([]);
  const [wins, setWins] = useState("0%");
  const [draws, setDraws] = useState("0%");
  const [loses, setLoses] = useState("0%");

  useEffect(() => {
    getTeamStatsByLeague(leagueId, teamId)
      .then((response) => setAllData(response.data.response))
      .catch((error) => console.log(error));

    const setAllData = (d) => {
      setData(d);
      setWins(percentage(d.fixtures.wins.total, d));
      setDraws(percentage(d.fixtures.draws.total, d));
      setLoses(percentage(d.fixtures.loses.total, d));
    };
  }, [teamId, leagueId]);

  const percentage = (value, d) => {
    const total = d.fixtures.played.total;

    return `${(value / total) * 100}%`;
  };

  console.log("team stats!");
  return (
    <>
      {data?.fixtures && (
        <View style={styles.statsContainer}>
          <View style={styles.barContainer}>
            <View style={[styles.winsBar, { width: wins }]} />
            <View style={[styles.drawsBar, { width: draws }]} />
            <View style={[styles.lossesBar, { width: loses }]} />
          </View>
          <View style={styles.statsInfoContainer}>
            <View style={styles.infoContainerWithBorder}>
              <Text style={styles.infoTitle}>Partidas</Text>
              <Text style={styles.infoValue}>{data.fixtures.played.total}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.infoTitle}>Vitórias</Text>
              <Text style={styles.infoValue}>{data.fixtures.wins.total}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.infoTitle}>Empates</Text>
              <Text style={styles.infoValue}>{data.fixtures.draws.total}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.infoTitle}>Derrotas</Text>
              <Text style={styles.infoValue}>{data.fixtures.loses.total}</Text>
            </View>
          </View>
        </View>
      )}
    </>
  );
}
