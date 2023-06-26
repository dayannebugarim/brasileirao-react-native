import React, { useState, useEffect, useContext } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import TeamCard from "../TeamCard";
import { LeagueIdContext } from "../../../App";
import { getTeamsByLeague } from "../../services/api";
import { styles } from "./styles";

export default function TeamsContainer({ navigation }) {
  const { leagueId } = useContext(LeagueIdContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    getTeamsByLeague(leagueId)
      .then((response) => setData(response.data.response))
      .catch((error) => console.log(error));
  }, [leagueId]);

  return (
    <>
      <View style={styles.teamsContainer}>
        <View style={styles.teamsHeaderContainer}>
          <View style={styles.teamsHeaderTitleContainer}>
            <Image
              source={require("../../../assets/icons/white-soccer-ball-icon.png")}
              style={styles.teamsHeaderIcon}
            />
            <Text style={styles.teamsHeaderTitle}>Times</Text>
          </View>
        </View>
        <ScrollView horizontal style={styles.cardsContainer}>
          {data.map((d) => (
            <TeamCard
              key={d.team.id}
              data={d}
              onPress={() =>
                navigation.navigate("Team", {
                  data: d,
                })
              }
            />
          ))}
        </ScrollView>
      </View>
    </>
  );
}
