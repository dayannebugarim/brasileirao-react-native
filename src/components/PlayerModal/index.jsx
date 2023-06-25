import { styles } from "./styles";
import { View, TouchableOpacity, Image, Text, Modal } from "react-native";

export default function PlayerModal({
  open,
  setOpen,
  playerId,
  teamId,
  leagueId,
}) {
  console.log("player modal!");
  return (
    <>
      <Modal visible={open} animationType="slide" transparent={true}>
        <View style={styles.container}>
          <View style={styles.playerDetailsContainer}>
            <View style={styles.headerContainer}>
              <TouchableOpacity onPress={() => setOpen(false)}>
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
                <Text style={styles.playerName}>David Duarte</Text>
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
        </View>
      </Modal>
    </>
  );
}
