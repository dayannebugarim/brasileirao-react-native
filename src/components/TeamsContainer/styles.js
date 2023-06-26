import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  teamsContainer: {
    borderRadius: 6,
    backgroundColor: "#17232c",
    marginTop: 14,
  },
  teamsHeaderContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  teamsHeaderTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  teamsHeaderTitle: { color: "#ffffff" },
  teamsHeaderIcon: {
    width: 18,
    height: 18,
  },
});
