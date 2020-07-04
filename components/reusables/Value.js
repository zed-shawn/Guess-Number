import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Color from "../constants/Colors";

export default function Value(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.valueText}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    //marginTop: 20,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: Color.primary,
    paddingVertical: 5,
    paddingHorizontal:10,
  },
  valueText: {
    color: Color.primary,
    fontWeight: "bold",
    fontSize: 30,
  },
});
