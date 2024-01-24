import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Monz</Text>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#052281",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "BeVietnamPro_500Medium",
    fontSize: 48,
    color: "#fff",
  },
});
