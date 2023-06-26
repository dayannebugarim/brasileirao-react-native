import { useState, useEffect, useContext } from "react";
import { View, TouchableOpacity, Image, Text, ScrollView } from "react-native";
import DividerWithText from "../../components/DividerWithText";
import PlayerCard from "../../components/PlayerCard";
import TeamStats from "../../components/TeamStats";
import { styles } from "./styles";
import { LeagueIdContext } from "../../../App";
import { getPlayersByTeam } from "../../services/api";
import { leagueName } from "../../utils/enums";

export default function TeamScreen({ route, navigation }) {
  const { data } = route.params;
  const { leagueId } = useContext(LeagueIdContext);

  const [playersData, setPlayersData] = useState([]);

  useEffect(() => {
    getPlayersByTeam(data.team.id, leagueId)
      .then((response) => setPlayersData(response.data.response))
      .catch((error) => console.log(error));
  }, [data.team.id, leagueId]);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.teamDetailsContainer}>
          <View style={styles.teamHeader}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.closeButton}
            >
              <Image
                source={require("../../../assets/icons/white-arrow-left-icon.png")}
              />
            </TouchableOpacity>
            <View style={styles.teamLogoContainer}>
              <Image
                source={{
                  uri: `${data.team.logo}`,
                }}
                style={styles.teamLogo}
              />
            </View>
            <Text numberOfLines={1} style={styles.teamName}>
              {data.team.name}
            </Text>
            <Text style={styles.teamFoundation}>{data.team.founded}</Text>
          </View>
          <View style={styles.leagueContainer}>
            <Image
              source={{
                uri: `https://media-3.api-sports.io/football/leagues/${leagueId}.png`,
              }}
              style={styles.leagueLogo}
            />
            <Text style={styles.leagueName}>{leagueName[leagueId]}</Text>
          </View>
          <View style={styles.teamContainer}>
            <DividerWithText text="Time" />
            <ScrollView horizontal style={styles.playersContainer}>
              {playersData.map((p, index) => (
                <PlayerCard
                  key={p.player.id}
                  data={playersData[index]}
                  onPress={() =>
                    navigation.navigate("Player", {
                      playerId: p.player.id,
                      teamId: data.team.id,
                      leagueId: leagueId,
                    })
                  }
                />
              ))}
            </ScrollView>
          </View>
          <View style={styles.statsContainer}>
            <TeamStats teamId={data.team.id} leagueId={leagueId} />
          </View>
        </View>
      </View>
    </>
  );
}
