import { View, Image, Text } from "react-native";
import { styles } from "./styles";

export default function FixturesCard({ data }) {
  const formatDate = (fixtureDate) => {
    const today = new Date();
    if (new Date(fixtureDate) === today) {
      return "Hoje";
    }
    return new Date(fixtureDate).toLocaleDateString("pt-BR");
  };

  const formatTime = (fixtureDate) => {
    return new Date(fixtureDate)
      .toLocaleTimeString("pt-BR")
      .slice(0, 5)
      .replace(":", "h");
  };

  return (
    <>
      <View style={styles.fixtureContainer}>
        <View style={styles.dateContainer}>
          <Text style={styles.fixtureDate}>
            {formatDate(data.fixture.date)} -{" "}
          </Text>
          <Text style={styles.fixtureTime}>
            {formatTime(data.fixture.date)}
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.leagueContainer}>
            <Image
              source={{
                uri: `${data.league.logo}`,
              }}
              style={styles.leagueLogo}
            />
            <Text style={styles.leagueName}>{data.league.name}</Text>
          </View>
          <View style={styles.teamsContainer}>
            <View style={styles.teamContainer}>
              <Text numberOfLines={1} style={styles.teamName}>
                {data.teams.away.name}
              </Text>
              <View style={styles.teamLogoContainer}>
                <Image
                  source={{
                    uri: `${data.teams.away.logo}`,
                  }}
                  style={styles.teamLogo}
                />
              </View>
            </View>
            <Text style={styles.vsText}>VS</Text>
            <View style={styles.teamContainer}>
              <View style={styles.teamLogoContainer}>
                <Image
                  source={{
                    uri: `${data.teams.home.logo}`,
                  }}
                  style={styles.teamLogo}
                />
              </View>
              <Text numberOfLines={1} style={styles.teamName}>
                {data.teams.home.name}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
