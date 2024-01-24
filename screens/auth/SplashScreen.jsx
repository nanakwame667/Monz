import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const [showText, setShowText] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);

      setTimeout(() => {
        navigation.navigate("SplashScreen");
      }, 3000);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [navigation]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>Monz</Text>
      </View>
      {showText && <Text style={styles.subText}>Please wait .....</Text>}
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
  innerContainer: {},
  text: {
    fontFamily: "BeVietnamPro_500Medium",
    fontSize: 48,
    color: "#fff",
  },
  subText: {
    fontFamily: "BeVietnamPro_400Regular",
    fontSize: 20,
    color: "#fff",
  },
});
