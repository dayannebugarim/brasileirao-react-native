import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { backgroundColor: "#17232c", height: "100%" },
  teamDetailsContainer: {
    paddingVertical: 32,
    paddingHorizontal: 12,
    alignItems: "center",
    borderBottomWidth: 0,
  },
  teamHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 8,
  },
  closeButton: {
    padding: 6,
    borderWidth: 0,
    backgroundColor: "transparent",
  },
  teamLogoContainer: {
    backgroundColor: "#2b383e",
    alignItems: "center",
    padding: 12,
    borderRadius: 50,
  },
  teamLogo: {
    width: 54,
    height: 54,
  },
  teamName: {
    flexWrap: "wrap",
    color: "#30c3a2",
    fontWeight: 500,
    fontSize: 24,
    maxWidth: 250,
  },
  teamFoundation: {
    color: "#818e95",
  },
  leagueContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginBottom: 50,
  },
  leagueLogo: {
    width: 18,
    height: 18,
  },
  leagueName: {
    fontSize: 14,
    color: "#818e95",
  },
  teamContainer: {
    gap: 10,
    maxHeight: 124,
    flexDirection: "column",
    marginBottom: 28,
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    color: "#818e95",
  },
  playersContainer: {
    height: 86,
    // borderBottomWidth: 1,
    // borderBottomColor: "red",
    // borderTopWidth: 1,
    // borderTopColor: "red",
  },
  statsContainer: {
    flexDirection: "column",
    gap: 24,
  },
});
