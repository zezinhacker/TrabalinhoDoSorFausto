import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/header";

export default function App({ navigation }) {
  return (
    <View>
    <Header title="Home" />
    <View style={styles.container}>
      <View>
        <Text>Seja bem vindo!</Text>
      </View>
    </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginTop: 200,
    // fontFamily: "georgia",
  },
});