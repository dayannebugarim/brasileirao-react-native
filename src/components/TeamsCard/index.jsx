import { styles } from "./styles";
import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";

export default function TeamsCard() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerTitleContainer}>
          <Image
            source={require("../../../assets/icons/white-soccer-ball-icon.png")}
            style={styles.headerIcon}
          />
          <Text style={styles.headerTitle}>Times</Text>
        </View>
      </View>
      <ScrollView horizontal style={styles.cardsContainer}>
        <TouchableOpacity style={styles.cardContainer}>
          <View style={styles.teamLogoContainer}>
            <Image
              source={{
                uri: "https://media-1.api-sports.io/football/teams/120.png",
              }}
              style={styles.teamLogo}
            />
          </View>
          <Text numberOfLines={1} style={styles.teamName}>Flamengo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardContainer}>
          <View style={styles.teamLogoContainer}>
            <Image
              source={{
                uri: "https://media-1.api-sports.io/football/teams/120.png",
              }}
              style={styles.teamLogo}
            />
          </View>
          <Text numberOfLines={1} style={styles.teamName}>Flamengo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardContainer}>
          <View style={styles.teamLogoContainer}>
            <Image
              source={{
                uri: "https://media-1.api-sports.io/football/teams/120.png",
              }}
              style={styles.teamLogo}
            />
          </View>
          <Text numberOfLines={1} style={styles.teamName}>Flamengo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardContainer}>
          <View style={styles.teamLogoContainer}>
            <Image
              source={{
                uri: "https://media-1.api-sports.io/football/teams/120.png",
              }}
              style={styles.teamLogo}
            />
          </View>
          <Text numberOfLines={1} style={styles.teamName}>Flamengo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardContainer}>
          <View style={styles.teamLogoContainer}>
            <Image
              source={{
                uri: "https://media-1.api-sports.io/football/teams/120.png",
              }}
              style={styles.teamLogo}
            />
          </View>
          <Text numberOfLines={1} style={styles.teamName}>Flamengo</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
