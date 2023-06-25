import { styles } from "./styles";
import { useState } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  Modal,
  ScrollView,
} from "react-native";
import DividerWithText from "../DividerWithText";
import PlayerCard from "../PlayerCard";
import TeamStats from "../TeamStats";
import PlayerModal from "../PlayerModal";

export default function TeamModal({ open, setOpen, data, leagueId }) {
  const [playersData, setPlayersData] = useState([]);
  const [playerId, setPlayerId] = useState("");
  const [openDetails, setOpenDetails] = useState(false);

  // useEffect(() => {
  //   getPlayersByTeam(data.team.id, leagueId)
  //     .then((response) => setPlayersData(response.data.response))
  //     .catch((error) => console.log(error));
  // }, [data.team.id, leagueId]);
  // console.log(data);

  return (
    <>
      <View>
        <TouchableOpacity onPress={() => setOpen(true)}>
          <Text>Open Modal</Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={open}
          onRequestClose={() => setOpen(false)}
        >
          <View style={styles.background}>
            <View style={styles.container}>
              <View style={styles.teamDetailsContainer}>
                <View style={styles.teamHeader}>
                  <TouchableOpacity
                    onPress={() => setOpen(false)}
                    style={styles.closeButton}
                  >
                    <Image
                      source={require("../../../assets/icons/white-arrow-left-icon.png")}
                    />
                  </TouchableOpacity>
                  <View style={styles.teamLogoContainer}>
                    <Image
                      source={{
                        uri: "https://media-1.api-sports.io/football/teams/120.png",
                      }}
                      style={styles.teamLogo}
                    />
                  </View>
                  <Text style={styles.teamName}>Botafogo</Text>
                  <Text style={styles.teamFoundation}>1892</Text>
                </View>
                <View style={styles.leagueContainer}>
                  <Image
                    source={{
                      uri: "https://media-1.api-sports.io/football/leagues/71.png",
                    }}
                    style={styles.leagueLogo}
                  />
                  <Text style={styles.leagueName}>Série A</Text>
                </View>
                <View style={styles.teamContainer}>
                  <DividerWithText text="Time" />
                  <ScrollView horizontal style={styles.playersContainer}>
                    <PlayerCard
                      setPlayerId={setPlayerId}
                      setOpenDetails={setOpenDetails}
                    />
                    <PlayerCard
                      setPlayerId={setPlayerId}
                      setOpenDetails={setOpenDetails}
                    />
                    <PlayerCard
                      setPlayerId={setPlayerId}
                      setOpenDetails={setOpenDetails}
                    />
                    <PlayerCard
                      setPlayerId={setPlayerId}
                      setOpenDetails={setOpenDetails}
                    />
                    <PlayerCard
                      setPlayerId={setPlayerId}
                      setOpenDetails={setOpenDetails}
                    />
                    <PlayerCard
                      setPlayerId={setPlayerId}
                      setOpenDetails={setOpenDetails}
                    />
                  </ScrollView>
                </View>
                <View style={styles.statsContainer}>
                  <TeamStats teamId="1" leagueId={leagueId} />
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>

      {openDetails && (
        <PlayerModal
          open={openDetails}
          setOpen={setOpenDetails}
          playerId="1"
          teamId="1"
        />
      )}
    </>
  );
}
