import { useState, useEffect } from "react";
import { styles } from "./styles";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { getPlayerByTeam } from "../../services/api";
import { playerPosition } from "../../utils/enums";

export default function PlayerScreen({ navigation, route }) {
  const { playerId, teamId, leagueId } = route.params;
  const [data, setData] = useState([]);

  useEffect(() => {
    getPlayerByTeam(playerId, teamId, leagueId)
      .then((response) => setData(response.data.response[0]))
      .catch((error) => console.log(error));
  }, [playerId, teamId, leagueId]);

  return (
    <>
      {data?.player && (
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => navigation.goBack()}
            >
              <Image
                source={require("../../../assets/icons/white-arrow-left-icon.png")}
              />
            </TouchableOpacity>
            <Image
              style={styles.playerImg}
              source={{
                uri: `${data.player.photo}`,
              }}
            />
            <View style={styles.infoContainer}>
              <Text numberOfLines={1} style={styles.playerName}>
                {data.player.name}
              </Text>
              <View style={styles.descriptionsContainer}>
                <View style={styles.descriptionContainer}>
                  <Text style={styles.descriptionTitle}>Idade</Text>
                  <Text style={styles.descriptionValue}>{data.player.age}</Text>
                </View>
                <View style={styles.descriptionContainer}>
                  <Text style={styles.descriptionTitle}>Posição</Text>
                  <Text style={styles.descriptionValue}>
                    {playerPosition[data.statistics[0].games.position]}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.playerStatsContainer}>
            <View style={styles.statsCell}>
              <Text style={styles.statsTitle}>Aparições</Text>
              <Text style={styles.statsValue}>
                {data.statistics[0].games.appearences || "0"}
              </Text>
            </View>
            <View style={styles.statsCell}>
              <Text style={styles.statsTitle}>Gols</Text>
              <Text style={styles.statsValue}>
                {data.statistics[0].goals.total || "0"}
              </Text>
            </View>
            <View style={styles.statsCell}>
              <Text style={styles.statsTitle}>Assistências</Text>
              <Text style={styles.statsValue}>
                {data.statistics[0].goals.assists || "0"}
              </Text>
            </View>
            <View style={styles.statsCell}>
              <Text style={styles.statsTitle}>Cartões Amarelos</Text>
              <Text style={styles.statsValue}>
                {data.statistics[0].cards.yellow || "0"}
              </Text>
            </View>
          </View>
        </View>
      )}
    </>
  );
}
