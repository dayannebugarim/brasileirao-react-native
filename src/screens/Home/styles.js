import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 30,
    paddingHorizontal: 6,
    fontFamily: "Roboto",
    color: "#fff",
    backgroundColor: "#17232C",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 16,
    color: "#fff",
    marginBottom: 12,
  },
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
