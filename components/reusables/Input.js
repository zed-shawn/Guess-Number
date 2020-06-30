import React from "react";
import { TextInput, StyleSheet } from "react-native";

import Color from "../constants/Colors";

export default function Input(props) {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
}

const styles = StyleSheet.create({
  input: {
    borderBottomColor: Color.accent,
    borderBottomWidth: 1,
  },
});
