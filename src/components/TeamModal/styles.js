import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    backgroundColor: "rgba(0, 0, 0, 0.15)",
    flex: 1,
    justifyContent: "flex-end",
  },
  container: {},
  teamDetailsContainer: {
    paddingVertical: 32,
    paddingHorizontal: 12,
    alignItems: "center",
    backgroundColor: "#17232c",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderWidth: 1,
    borderColor: "#263540",
    borderBottomWidth: 0,
    shadowOffset: { width: 0, height: -2 },
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOpacity: 1,
    shadowRadius: 25,
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
    color: "#30c3a2",
    fontWeight: 500,
    fontSize: 28,
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
