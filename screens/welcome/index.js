import { StyleSheet } from "react-native";
import React from "react";
import { View, Image, Text, ScrollView, SafeAreaView } from "react-native";
import { styles } from "./styles";

const WelcomeScreen = () => {
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.group} />
        <View style={styles.group}>
          <Image style={styles.logo} source={require("./desktop-wallpaper-blonde-girl-fitness-dumbbell-athletic-young-woman-sport-girls.jpg")} resizeMode="cover" />
          <Text style={[styles.text, _styles.dyYPKqOX]}>{"Create User   "}</Text>
        </View>
        <Text style={_styles2.WFeDVIyv}>{"Orjin Fitness Group\n          "}</Text>
      </ScrollView>
    </SafeAreaView>;
};

export default WelcomeScreen;

const _styles = StyleSheet.create({
  dyYPKqOX: {
    color: "#000000"
  }
});

const _styles2 = StyleSheet.create({
  WFeDVIyv: {
    position: "relative",
    width: 128,
    height: 50,
    color: "#000000"
  }
});