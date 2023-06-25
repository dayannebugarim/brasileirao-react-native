import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, StatusBar } from "react-native";
import Banner from "./src/components/Banner/index";
import TeamsCard from "./src/components/TeamsCard";
import FixturesCard from "./src/components/FixturesCard";
// import FixturesCard from "./components/fixturesCard";
// import TeamsCard from "./components/teamsCard";
// import GlobalStyles from "./styles/global";

const App = () => {
  const [leagueId, setLeagueId] = useState("71");
  console.log(leagueId);

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor="#17232C" barStyle="light-content" />
      <Text style={styles.title}>Brasileirão</Text>
      <Banner leagueId={leagueId} setLeagueId={setLeagueId} />
      <TeamsCard leagueId={leagueId} />
      <FixturesCard />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 30,
    paddingHorizontal: 6,
    fontFamily: "Roboto",
    color: "#fff",
    backgroundColor: "#17232C",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 16,
    color: "#fff",
  },
});

export default App;
