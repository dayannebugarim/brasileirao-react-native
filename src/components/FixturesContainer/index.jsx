import { View, Image, Text, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { styles } from "./styles";
import { useContext, useState, useEffect } from "react";
import { getNextFixtures, getFixturesByDate } from "../../services/api";
import FixturesCard from "../FixturesCard";
import { LeagueIdContext } from "../../../App";

export default function FixturesContainer() {
  const { leagueId } = useContext(LeagueIdContext);
  const [data, setData] = useState([]);
  const [shouldFetch, setShouldFetch] = useState(true);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (shouldFetch) {
      getNextFixtures("7", leagueId)
        .then((response) => {
          console.log(response);
          setData(response.data.response.slice(1));
          setShouldFetch(false);
        })
        .catch((error) => {
          console.log("1");
          console.log(error);
          console.log(error.message);
          console.log(error.response);
        });
    } else {
      getFixturesByDate(formatDateToFetch(date), leagueId)
        .then((response) => setData(response.data.response))
        .catch((error) => {
          console.log("2");
          console.log(error);
          console.log(error.message);
          console.log(error.response);
        });
    }
  }, [leagueId, date, shouldFetch]);

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

  const formatDateToFetch = (date) => {
    return new Date(date).toISOString().substring(0, 10);
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
            <Image
              source={require("../../../assets/icons/white-arrow-down-icon.png")}
              style={styles.buttonIcon}
            />
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
        {data.map((d, key) => (
          <FixturesCard key={key} data={d} />
        ))}
      </View>
    </>
  );
}
