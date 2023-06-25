import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { borderRadius: 6, backgroundColor: "#17232c", marginTop: 14 },
  cardsContainer: {},
  cardContainer: {
    width: 86,
    height: 86,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2b383e",
    marginHorizontal: 6,
    borderRadius: 6,
  },
  headerContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  headerTitle: { color: "#ffffff" },
  headerIcon: {
    width: 18,
    height: 18,
  },
  teamLogoContainer: {
    backgroundColor: "white",
    borderRadius: 50,
    padding: 12,
    display: "flex",
  },
  teamLogo: {
    width: 24,
    height: 24,
  },
  teamName: { color: "#ffffff" },
});
