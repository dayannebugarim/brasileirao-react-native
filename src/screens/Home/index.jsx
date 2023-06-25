import React, { useState } from "react";
import { View, Text, ScrollView, StatusBar, Image } from "react-native";
import Banner from "../../components/Banner";
import TeamCard from "../../components/TeamCard";
import FixturesCard from "../../components/FixturesCard";
import { styles } from "./styles";

export default function HomeScreen({ navigation }) {
  const [leagueId, setLeagueId] = useState("71");
  console.log(leagueId);

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor="#17232C" barStyle="light-content" />
      <Text style={styles.title}>Brasileirão</Text>
      <Banner leagueId={leagueId} setLeagueId={setLeagueId} />
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
          <TeamCard
            onPress={() => navigation.navigate("Team", { leagueId: leagueId })}
          />
          <TeamCard
            onPress={() => navigation.navigate("Team", { leagueId: leagueId })}
          />
          <TeamCard
            onPress={() => navigation.navigate("Team", { leagueId: leagueId })}
          />
          <TeamCard
            onPress={() => navigation.navigate("Team", { leagueId: leagueId })}
          />
          <TeamCard
            onPress={() => navigation.navigate("Team", { leagueId: leagueId })}
          />
        </ScrollView>
      </View>
      <FixturesCard />
    </ScrollView>
  );
}
