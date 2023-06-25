import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function PlayerCard({ data, onPress }) {
  return (
    <>
      <TouchableOpacity style={styles.playerContainer} onPress={onPress}>
        <Image
          style={styles.playerImg}
          source={{
            uri: "https://media-2.api-sports.io/football/players/10351.png",
          }}
        />
        <Text numberOfLines={2} style={styles.playerName}>
          David Duarte Dos Sa
        </Text>
      </TouchableOpacity>
    </>
  );
}
