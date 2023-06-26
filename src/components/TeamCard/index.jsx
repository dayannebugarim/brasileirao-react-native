import { styles } from "./styles";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function TeamCard({ data, onPress }) {
  return (
    <>
      <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
        <View style={styles.teamLogoContainer}>
          <Image
            source={{
              uri: `${data.team.logo}`,
            }}
            style={styles.teamLogo}
          />
        </View>
        <Text numberOfLines={1} style={styles.teamName}>
          {data.team.name}
        </Text>
      </TouchableOpacity>
    </>
  );
}
