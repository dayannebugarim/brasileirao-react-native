import { styles } from "./styles";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function TeamCard({ data, leagueId, onPress }) {
  return (
    <>
      <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
        <View style={styles.teamLogoContainer}>
          <Image
            source={{
              uri: "https://media-1.api-sports.io/football/teams/120.png",
            }}
            style={styles.teamLogo}
          />
        </View>
        <Text numberOfLines={1} style={styles.teamName}>
          Flamengo
        </Text>
      </TouchableOpacity>
    </>
  );
}
