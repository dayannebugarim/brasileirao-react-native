import React, { useEffect, useState, useContext } from "react";
import { View, Text, Image } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { getLiveFixtures, getNextFixtures } from "../../services/api";
import { styles } from "./styles";
import { eventType } from "../../utils/enums";
import { LeagueIdContext } from "../../../App";

export default function Banner() {
  const { leagueId, setLeagueId } = useContext(LeagueIdContext);
  const [data, setData] = useState([]);
  const [fixtureStatus, setFixtureStatus] = useState("");
  const [homeGoalsInfo, setHomeGoalsInfo] = useState([]);
  const [awayGoalsInfo, setAwayGoalsInfo] = useState([]);

  useEffect(() => {
    getLiveFixtures(leagueId)
      .then((response) => {
        if (response.data.response.length !== 0) {
          setAllData(response.data.response[0]);
        } else {
          getNextFixtures("1", leagueId)
            .then((response) => setAllData(response.data.response[0]))
            .catch((error) => console.log(error));
        }
      })
      .catch((error) => console.log(error));

    const setAllData = (data) => {
      setData([data]);
      setFixtureStatus(data.fixture.status.short);
      setHomeGoalsInfo(goalsInfo(data.teams.home.name, data));
      setAwayGoalsInfo(goalsInfo(data.teams.away.name, data));
    };
  }, [leagueId]);

  const goalsInfo = (team, data) => {
    return data.events?.filter(
      (e) => e.type === "Goal" && e.team.name === team
    );
  };

  const formatDate = (fixtureDate) => {
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
      {data.map((d, key) => (
        <View key={key} style={styles.bannerContainer}>
          <View style={styles.bannerHeader}>
            <Picker
              mode="dropdown"
              selectedValue={leagueId}
              onValueChange={(itemValue) => setLeagueId(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Série A" value="71" />
              <Picker.Item label="Série B" value="72" />
              <Picker.Item label="Série C" value="75" />
              <Picker.Item label="Série D" value="76" />
              <Picker.Item label="Copa Do Brasil" value="73" />
            </Picker>
          </View>
          <View style={styles.bannerBody}>
            <View style={styles.teamsContainer}>
              <View style={styles.teamContainer}>
                <View style={styles.teamInfoContainer}>
                  <Text style={styles.teamName} numberOfLines={1}>
                    {d.teams.home.name}
                  </Text>
                  <View style={styles.teamLogoContainer}>
                    <Image
                      source={{
                        uri: `${d.teams.home.logo}`,
                      }}
                      style={styles.teamLogo}
                    />
                  </View>
                </View>
                <View style={styles.eventContainer}>
                  {fixtureStatus !== "NS" &&
                    homeGoalsInfo.map((e, key) => (
                      <View key={key} style={styles.eventInfoContainer}>
                        <Image
                          source={require("../../../assets/icons/green-soccer-ball-icon.png")}
                          style={styles.eventIcon}
                        />
                        <Text style={styles.playerName} numberOfLines={1}>
                          {e.player.name}
                        </Text>
                      </View>
                    ))}
                </View>
              </View>
              <View style={styles.scoreValuesContainer}>
                <Text style={styles.scoreValues}>
                  {fixtureStatus !== "NS"
                    ? `${d.goals.home} - ${d.goals.away}`
                    : "VS"}
                </Text>
                {fixtureStatus !== "NS" && (
                  <Text style={styles.eventType}>
                    {eventType[d.fixture.status.short]}
                  </Text>
                )}
              </View>
              <View style={styles.teamContainer}>
                <View style={styles.teamInfoContainer}>
                  <Text style={styles.teamName} numberOfLines={1}>
                    {d.teams.away.name}
                  </Text>
                  <View style={styles.teamLogoContainer}>
                    <Image
                      source={{
                        uri: `${d.teams.away.logo}`,
                      }}
                      style={styles.teamLogo}
                    />
                  </View>
                </View>
                <View style={styles.eventContainer}>
                  {fixtureStatus !== "NS" &&
                    awayGoalsInfo.map((e, key) => (
                      <View key={key} style={styles.eventInfoContainer}>
                        <Image
                          source={require("../../../assets/icons/green-soccer-ball-icon.png")}
                          style={styles.eventIcon}
                        />
                        <Text style={styles.playerName} numberOfLines={1}>
                          {e.player.name}
                        </Text>
                      </View>
                    ))}
                </View>
              </View>
            </View>
          </View>
          <View style={styles.bannerFooter}>
            <View style={styles.footerContainer}>
              <Image
                source={require("../../../assets/icons/green-clock-icon.png")}
                style={styles.eventIcon}
              />
              <Text style={styles.footerSpan}>
                {formatDate(d.fixture.date)} - {formatTime(d.fixture.date)}
              </Text>
            </View>
            <View style={styles.footerContainer}>
              <Image
                source={require("../../../assets/icons/green-stadium-icon.png")}
                style={styles.eventIcon}
              />
              <Text style={styles.footerSpan}>
                {d.fixture.venue.name || "-"},{" "}
                {d.fixture.venue.city.split(",")[0] || "-"}
              </Text>
            </View>
            <View style={styles.footerContainer}>
              <Image
                source={require("../../../assets/icons/green-whistle-icon.png")}
                style={styles.eventIcon}
              />
              <Text style={styles.footerSpan}>{d.fixture.referee || "-"}</Text>
            </View>
          </View>
        </View>
      ))}

      {/* <View style={styles.bannerContainer}>
        <View style={styles.bannerHeader}>
          <Picker
            mode="dropdown"
            selectedValue={leagueId}
            onValueChange={(itemValue) => setLeagueId(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Série A" value="71" />
            <Picker.Item label="Série B" value="72" />
            <Picker.Item label="Série C" value="75" />
            <Picker.Item label="Série D" value="76" />
            <Picker.Item label="Copa Do Brasil" value="73" />
          </Picker>
        </View>
        <View style={styles.bannerBody}>
          <View style={styles.teamsContainer}>
            <View style={styles.teamContainer}>
              <View style={styles.teamInfoContainer}>
                <Text style={styles.teamName} numberOfLines={1}>
                  Vasco Da Gama aaaa
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
              <View style={styles.eventContainer}>
                <View style={styles.eventInfoContainer}>
                  <Image
                    source={require("../../../assets/icons/green-soccer-ball-icon.png")}
                    style={styles.eventIcon}
                  />
                  <Text style={styles.playerName} numberOfLines={1}>
                    Gabigol
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.scoreValuesContainer}>
              <Text style={styles.scoreValues}>VS</Text>
              <Text style={styles.scoreValues}>1 - 2</Text>
              <Text style={styles.eventType}>First Half</Text>
            </View>
            <View style={styles.teamContainer}>
              <View style={styles.teamInfoContainer}>
                <Text style={styles.teamName} numberOfLines={1}>
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
              <View style={styles.eventContainer}>
                <View style={styles.eventInfoContainer}>
                  <Image
                    source={require("../../../assets/icons/green-soccer-ball-icon.png")}
                    style={styles.eventIcon}
                  />
                  <Text style={styles.playerName} numberOfLines={1}>
                    Gabigol
                  </Text>
                </View>
                <View style={styles.eventInfoContainer}>
                  <Image
                    source={require("../../../assets/icons/green-soccer-ball-icon.png")}
                    style={styles.eventIcon}
                  />
                  <Text style={styles.playerName} numberOfLines={1}>
                    Gabigol André
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.bannerFooter}>
          <View style={styles.footerContainer}>
            <Image
              source={require("../../../assets/icons/green-clock-icon.png")}
              style={styles.eventIcon}
            />
            <Text style={styles.footerSpan}>14/02/2023 - 16:00h</Text>
          </View>
          <View style={styles.footerContainer}>
            <Image
              source={require("../../../assets/icons/green-stadium-icon.png")}
              style={styles.eventIcon}
            />
            <Text style={styles.footerSpan}>Estádio Tal - São Paulo</Text>
          </View>
          <View style={styles.footerContainer}>
            <Image
              source={require("../../../assets/icons/green-whistle-icon.png")}
              style={styles.eventIcon}
            />
            <Text style={styles.footerSpan}>Fulano de Tal</Text>
          </View>
        </View>
      </View> */}
    </>
  );
}
