import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/images/Pixel1.png")}
    >
      <Text style={styles.welcometext}>FavourQuest</Text>
      <View style={styles.loginButton}>
        <Text style={styles.welcomeText}>Login</Text>
      </View>
      <View style={styles.registerButton}>
        <Text style={styles.welcomeText}>Register</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, justifyContent: "flex-end" },
  welcometext: {
    fontFamily: "Minecraft-Bold",
    textShadowColor: "black",
    textShadowRadius: "10",
    textAlign: "center",
    paddingBottom: 300,
    color: "white",
    fontSize: 40,
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  welcomeText: {
    textAlign: "center",
    paddingTop: 18,
    fontFamily: "Minecraft-Regular",
    fontSize: "30%",
  },
});

export default WelcomeScreen;
