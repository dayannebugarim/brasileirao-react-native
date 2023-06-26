import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#17232c",
    height: "100%",
    paddingVertical: 32,
    paddingHorizontal: 12,
    borderBottomWidth: 0,
    gap: 50,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  closeButton: { padding: 6, borderWidth: 0, backgroundColor: "transparent" },
  playerImg: {
    borderRadius: 50,
    backgroundColor: "#fff",
    width: 66,
    height: 66,
  },
  infoContainer: {
    flexDirection: "column",
    minWidth: 100,

    maxWidth: 250,
  },
  playerName: {
    color: "#30c3a2",
    fontWeight: "500",
    fontSize: 24,
  },
  descriptionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  descriptionContainer: {
    alignItems: "flex-start",
    minWidth: 80,
    maxWidth: 250,
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
