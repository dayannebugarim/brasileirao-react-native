import { useState } from "react";
import { View, TouchableOpacity, Image, Text, ScrollView } from "react-native";
import DividerWithText from "../../components/DividerWithText";
import PlayerCard from "../../components/PlayerCard";
import TeamStats from "../../components/TeamStats";
import { styles } from "./styles";

export default function TeamScreen({ data, route, navigation }) {
  const { leagueId } = route.params;

  const [playersData, setPlayersData] = useState([]);
  const [playerId, setPlayerId] = useState("");
  const [openDetails, setOpenDetails] = useState(false);

  // useEffect(() => {
  //   getPlayersByTeam(data.team.id, leagueId)
  //     .then((response) => setPlayersData(response.data.response))
  //     .catch((error) => console.log(error));
  // }, [data.team.id, leagueId]);
  // console.log(data);

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
                  uri: "https://media-1.api-sports.io/football/teams/120.png",
                }}
                style={styles.teamLogo}
              />
            </View>
            <Text numberOfLines={1} style={styles.teamName}>
              Vasco da Gama A
            </Text>
            <Text style={styles.teamFoundation}>1892</Text>
          </View>
          <View style={styles.leagueContainer}>
            <Image
              source={{
                uri: "https://media-1.api-sports.io/football/leagues/71.png",
              }}
              style={styles.leagueLogo}
            />
            <Text style={styles.leagueName}>Série A</Text>
          </View>
          <View style={styles.teamContainer}>
            <DividerWithText text="Time" />
            <ScrollView horizontal style={styles.playersContainer}>
              <PlayerCard onPress={() => navigation.navigate("Player")} />
              <PlayerCard onPress={() => navigation.navigate("Player")} />
              <PlayerCard onPress={() => navigation.navigate("Player")} />
              <PlayerCard onPress={() => navigation.navigate("Player")} />
              <PlayerCard onPress={() => navigation.navigate("Player")} />
              <PlayerCard onPress={() => navigation.navigate("Player")} />
            </ScrollView>
          </View>
          <View style={styles.statsContainer}>
            <TeamStats teamId="1" leagueId={leagueId} />
          </View>
        </View>
      </View>
    </>
  );
}
