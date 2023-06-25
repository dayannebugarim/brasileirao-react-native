import { styles } from "./styles";
import { View, TouchableOpacity, Image, Text } from "react-native";

export default function PlayerScreen({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => navigation.goBack()}
          >
            <Image
              source={require("../../../assets/icons/white-arrow-left-icon.png")}
            />
          </TouchableOpacity>
          <Image
            style={styles.playerImg}
            source={{
              uri: "https://media-2.api-sports.io/football/players/10351.png",
            }}
          />
          <View style={styles.infoContainer}>
            <Text numberOfLines={1} style={styles.playerName}>
              David Duarte Dos Santos
            </Text>
            <View style={styles.descriptionsContainer}>
              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionTitle}>Idade</Text>
                <Text style={styles.descriptionValue}>28</Text>
              </View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionTitle}>Posição</Text>
                <Text style={styles.descriptionValue}>Defesa</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.playerStatsContainer}>
          <View style={styles.statsCell}>
            <Text style={styles.statsTitle}>Aparições</Text>
            <Text style={styles.statsValue}>3</Text>
          </View>
          <View style={styles.statsCell}>
            <Text style={styles.statsTitle}>Gols</Text>
            <Text style={styles.statsValue}>1</Text>
          </View>
          <View style={styles.statsCell}>
            <Text style={styles.statsTitle}>Assistências</Text>
            <Text style={styles.statsValue}>0</Text>
          </View>
          <View style={styles.statsCell}>
            <Text style={styles.statsTitle}>Cartões Amarelos</Text>
            <Text style={styles.statsValue}>0</Text>
          </View>
        </View>
      </View>
    </>
  );
}
