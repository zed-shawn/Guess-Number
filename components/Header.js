import React from "react";
import { StyleSheet, View, Text } from "react-native";

import RegularText from "./reusables/textStyles/Regular";

import Color from "./constants/Colors";

export default function Header() {
  return (
    <View style={styles.header}>
      <RegularText style={styles.text}> Guess A Number</RegularText>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "flex-start",
    //padding:24,
    height: 30,
    backgroundColor: Color.primary,
    justifyContent: "center",
  },
  text: {
    color: Color.background,
    fontSize: 28,
    //fontWeight: "bold",
  },
});
