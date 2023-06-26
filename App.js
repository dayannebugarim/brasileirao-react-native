import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/Home";
import TeamScreen from "./src/screens/Team";
import PlayerScreen from "./src/screens/Player";

export const LeagueIdContext = React.createContext({
  leagueId: "71",
  setLeagueId: () => {},
});

const App = () => {
  const [leagueId, setLeagueId] = useState("71");
  const Stack = createNativeStackNavigator();

  return (
    <LeagueIdContext.Provider value={{ leagueId, setLeagueId }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Team"
            component={TeamScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Player"
            component={PlayerScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </LeagueIdContext.Provider>
  );
};

export default App;
