import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  statsContainer: {
    flexDirection: "column",
    backgroundColor: "#2B383E",
    padding: 12,
    borderRadius: 6,
    // borderBottomWidth: 1,
    // borderBottomColor: "red",
    // borderTopWidth: 1,
    // borderTopColor: "red",
  },
  barContainer: {
    flexDirection: "row",
    height: 8,
    backgroundColor: "gray",
    borderRadius: 50,
    overflow: "hidden",
  },
  winsBar: {
    backgroundColor: "#30c3a2",
  },
  drawsBar: {
    backgroundColor: "antiquewhite",
  },
  lossesBar: {
    backgroundColor: "#ee6280",
  },
  statsInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  infoContainerWithBorder: {
    flexDirection: "column",
    alignItems: "center",
    paddingRight: 8,
    borderRightWidth: 1,
    borderRightColor: "#384348",
  },
  infoContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  infoTitle: {
    color: "#d4d4d4",
  },
  infoValue: {
    color: "#d4d4d4",
  },
});
