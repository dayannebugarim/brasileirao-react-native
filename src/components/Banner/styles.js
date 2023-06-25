import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  bannerContainer: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#30C3A2",
    padding: 15,
    borderRadius: 6,
    flexDirection: "column",
    gap: 10,
    color: "#17232C",
  },
  bannerHeader: { alignItems: "center", justifyContent: "center" },
  leagueContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  picker: {
    width: 200,
  },
  leagueLogo: {
    maxWidth: 16,
  },
  leagueName: {},
  bannerBody: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  teamsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 15,
  },
  eventContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginHorizontal: 20,
    gap: 5,
  },
  eventInfoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 5,
  },
  playerName: {
    color: "#2B383E",
    fontSize: 11,
  },
  eventIcon: {
    width: 16,
    height: 16,
  },
  teamContainer: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    gap: 10,
  },
  teamInfoContainer: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  teamName: {
    fontWeight: "500",
    textAlign: "center",
  },
  teamLogoContainer: {
    backgroundColor: "white",
    borderRadius: 50,
    padding: 12,
    display: "flex",
  },
  teamLogo: {
    width: 48,
    height: 48,
  },
  scoreValuesContainer: {
    display: "flex",
    flex: 0.7,
    alignItems: "center",
    marginTop: 28,
    justifyContent: "flex-end",
    flexDirection: "column",
    gap: 5,
  },
  scoreValues: {
    fontSize: 28,
    fontWeight: "600",
  },
  eventType: {
    fontSize: 12,
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 50,
    color: "#fff",
    backgroundColor: "#17232C",
  },
  bannerFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#2FAC90",
    gap: 5,
  },
  footerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  footerIcon: {
    width: 16,
    height: 16,
  },
  footerSpan: {
    color: "#226254",
    fontSize: 12,
  },
});
