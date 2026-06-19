import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ComponenteCalcular from "./src/Componentes/ComponenteCalcular";

export default function App() {
  return (
    <View style={styles.container}>
      <ComponenteCalcular />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
