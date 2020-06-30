import React from "react";
import { View, StyleSheet } from "react-native";

import Color from "../constants/Colors";

export default function Card(props) {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Color.background,
    elevation: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
