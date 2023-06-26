import React from "react";
import { Text, ScrollView, StatusBar } from "react-native";
import Banner from "../../components/Banner";
import { styles } from "./styles";
import TeamsContainer from "../../components/TeamsContainer";
import FixturesContainer from "../../components/FixturesContainer";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor="#17232C" barStyle="light-content" />
      <Text style={styles.title}>Brasileirão</Text>
      <Banner />
      <TeamsContainer navigation={navigation} />
      <FixturesContainer />
    </ScrollView>
  );
}
