import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function PlayerCard({ data, setPlayerId, setOpenDetails }) {
  function setPlayerDetails() {
    setPlayerId("1");
    setOpenDetails(true);
    console.log("clicked");
  }

  return (
    <>
      <TouchableOpacity
        style={styles.playerContainer}
        onPress={() => setPlayerDetails()}
      >
        <Image
          style={styles.playerImg}
          source={{
            uri: "https://media-2.api-sports.io/football/players/10351.png",
          }}
        />
        <Text style={styles.playerName}>David Duarte</Text>
      </TouchableOpacity>
    </>
  );
}
