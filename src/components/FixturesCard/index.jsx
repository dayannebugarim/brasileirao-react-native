import { View, Image, Text, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { styles } from "./styles";
import { useState } from "react";

export default function FixturesCard() {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

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
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.headerTitleContainer}>
            <Image
              source={require("../../../assets/icons/white-calendar-icon.png")}
              style={styles.headerIcon}
            />
            <Text style={styles.headerTitle}>Próximas partidas</Text>
          </View>
          <TouchableOpacity
            style={styles.datePickerButton}
            onPress={showDatepicker}
          >
            <Text style={styles.datePickerText}>{formatDate(date)}</Text>
          </TouchableOpacity>
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
          />
        )}
      </View>
      <View style={styles.cardsContainer}>
        <View style={styles.fixtureContainer}>
          <View style={styles.dateContainer}>
            <Text style={styles.fixtureDate}>{formatDate(date)} - </Text>
            <Text style={styles.fixtureTime}>{formatTime(date)}</Text>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.leagueContainer}>
              <Image
                source={{
                  uri: "https://media-1.api-sports.io/football/leagues/75.png",
                }}
                style={styles.leagueLogo}
              />
              <Text style={styles.leagueName}>Série A</Text>
            </View>
            <View style={styles.teamsContainer}>
              <View style={styles.teamContainer}>
                <Text numberOfLines={1} style={styles.teamName}>
                  Flamengo
                </Text>
                <View style={styles.teamLogoContainer}>
                  <Image
                    source={{
                      uri: "https://media-1.api-sports.io/football/teams/120.png",
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
                      uri: "https://media-1.api-sports.io/football/teams/120.png",
                    }}
                    style={styles.teamLogo}
                  />
                </View>
                <Text numberOfLines={1} style={styles.teamName}>
                  Vasco Da Gama
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.fixtureContainer}>
          <View style={styles.dateContainer}>
            <Text style={styles.fixtureDate}>{formatDate(date)} - </Text>
            <Text style={styles.fixtureTime}>{formatTime(date)}</Text>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.leagueContainer}>
              <Image
                source={{
                  uri: "https://media-1.api-sports.io/football/leagues/75.png",
                }}
                style={styles.leagueLogo}
              />
              <Text style={styles.leagueName}>Série A</Text>
            </View>
            <View style={styles.teamsContainer}>
              <View style={styles.teamContainer}>
                <Text numberOfLines={1} style={styles.teamName}>
                  Internacional
                </Text>
                <View style={styles.teamLogoContainer}>
                  <Image
                    source={{
                      uri: "https://media-1.api-sports.io/football/teams/120.png",
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
                      uri: "https://media-1.api-sports.io/football/teams/120.png",
                    }}
                    style={styles.teamLogo}
                  />
                </View>
                <Text numberOfLines={1} style={styles.teamName}>
                  Botafogo
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
