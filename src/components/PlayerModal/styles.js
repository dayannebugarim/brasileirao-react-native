import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.15)",
    flex: 1,
    justifyContent: "flex-end",
  },
  playerDetailsContainer: {
    paddingVertical: 32,
    paddingHorizontal: 12,
    // alignItems: "center",
    backgroundColor: "#17232c",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderWidth: 1,
    borderColor: "#263540",
    borderBottomWidth: 0,
    // shadowOffset: { width: 0, height: -2 },
    // shadowColor: "rgba(0, 0, 0, 0.3)",
    // shadowOpacity: 1,
    // shadowRadius: 25,
    gap: 50,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  playerImg: {
    borderRadius: 50,
    backgroundColor: "#fff",
    width: 66,
    height: 66,
  },
  infoContainer: {
    width: "100%",
    flexDirection: "column",
  },
  playerName: {
    color: "#30c3a2",
    fontWeight: "500",
    fontSize: 28,
  },
  descriptionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    maxWidth: 150,
  },
  descriptionContainer: {
    alignItems: "flex-start",
    flexDirection: "column",
  },
  descriptionTitle: {
    fontWeight: "500",
    color: "#818e95",
  },
  descriptionValue: {
    color: "#818e95",
  },
  playerStatsContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    backgroundColor: "#2b383e",
    padding: 16,
    borderRadius: 6,
    gap: 10,
  },
  statsCell: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#384348",
  },
  statsTitle: {
    color: "#d4d4d4",
  },
  statsValue: {
    color: "#ffffff",
  },
});
