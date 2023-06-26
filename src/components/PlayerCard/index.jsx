import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function PlayerCard({ data, onPress }) {
  return (
    <>
      <TouchableOpacity style={styles.playerContainer} onPress={onPress}>
        <Image
          style={styles.playerImg}
          source={{
            uri: `${data.player.photo}`,
          }}
        />
        <Text numberOfLines={2} style={styles.playerName}>
          {data.player.name}
        </Text>
      </TouchableOpacity>
    </>
  );
}
