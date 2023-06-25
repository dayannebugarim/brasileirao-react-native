import { View, Text } from "react-native";
import { styles } from "./styles";

export default function DividerWithText({ text }) {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
}
