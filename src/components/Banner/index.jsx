import React, { useEffect, useState, useRef } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
// import { getLiveFixtures, getNextFixtures } from "../../services/api";
import { styles } from "./styles";
// import SoccerBallIcon from "../../../assets/icons/soccer-ball.svg";
// import ClockIcon from "../../../assets/icons/clock.svg";
// import StadiumIcon from "../../../assets/icons/stadium.svg";
// import WhistleIcon from "../../../assets/icons/whistle.svg";
// import { eventType } from "../../utils/enums";

export default function Banner({ leagueId, setLeagueId }) {
  return (
    <>
      <View style={styles.bannerContainer}>
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
              {/* <Text style={styles.scoreValues}>VS</Text> */}
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
      </View>
    </>
  );
}
