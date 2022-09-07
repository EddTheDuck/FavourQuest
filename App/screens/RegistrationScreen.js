import React from "react";
import {
  Text,
  TextInput,
  ImageBackground,
  StyleSheet,
  View,
  SafeAreaView,
  Pressable,
} from "react-native";

import colors from "../config/colors";

function RegistrationScreen(props) {
  const [fontsLoaded] = useFonts({
    "Minecraft-Bold": require("../assets/fonts/minecraft-font/Minecraft-Bold.otf"),
    "Minecraft-Regular": require("../assets/fonts/minecraft-font/Minecraft-Regular.otf"),
    "Minecraft-Italic": require("../assets/fonts/minecraft-font/Minecraft-Italic.otf"),
    "Minecraft-BoldItalic": require("../assets/fonts/minecraft-font/Minecraft-BoldItalic.otf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const backbutton = () => {
    console.log("Back Button Pressed");
  };
  return (
    <ImageBackground
      source={require("../assets/images/Pixel1.png")}
      style={styles.background}
    >
      <SafeAreaView>
        <Pressable onPress={backbutton} style={styles.BackButtonBorder}>
          <Text style={styles.BackArrow}>⇤</Text>
        </Pressable>
      </SafeAreaView>
      <Text style={styles.RegisterText}>Register</Text>
      <Text style={styles.RegisterSubText}>
        Enter your details below to begin your quest!
      </Text>
      <View style={styles.ViewForm}>
        <TextInput
          style={styles.TextInput}
          placeholder="First Name"
        ></TextInput>
        <TextInput style={styles.TextInput} placeholder="Surname"></TextInput>
        <TextInput style={styles.TextInput} placeholder="Username"></TextInput>
        <TextInput style={styles.TextInput} placeholder="Email"></TextInput>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          secureTextEntry={true}
        ></TextInput>
      </View>
      <View style={styles.Submit}>
        <Text style={styles.SubmitText}>Submit</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  BackArrow: {
    color: colors.white,
    fontSize: 50,
    textAlign: "center",
    margin: -7,
  },
  BackButtonBorder: {
    margin: 25,
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
  },
  Submit: {
    height: 80,
    backgroundColor: colors.primary,
    margin: 25,
  },
  SubmitText: {
    paddingTop: 18,
    color: colors.white,
    fontSize: 35,
    textAlign: "center",
    fontFamily: "Minecraft-Regular",
  },

  background: { flex: 1 },

  ViewForm: {
    paddingTop: "10%",
  },

  TextInput: {
    color: colors.black,
    textAlign: "center",
    height: 40,
    margin: 25,
    borderWidth: 2,
    backgroundColor: colors.white,
    borderColor: colors.primary,
    fontFamily: "Minecraft-Regular",
  },
  RegisterText: {
    textShadowColor: colors.black,
    textShadowRadius: "10",
    textAlign: "center",
    color: colors.white,
    fontSize: 40,
    fontFamily: "Minecraft-Bold",
  },
  RegisterSubText: {
    textAlign: "center",
    paddingTop: 15,
    fontFamily: "Minecraft-Regular",
    fontSize: "15%",
    color: colors.black,
    textShadowColor: colors.white,
    textShadowRadius: "10",
  },
});

export default RegistrationScreen;
