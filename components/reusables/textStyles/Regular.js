import React from "react";
import { StyleSheet, Text } from "react-native";

export default function RegularText(props) {return(
  <Text style={{ ...styles.regular, ...props.style }}>{props.children}</Text>)
}

const styles = StyleSheet.create({
  regular: {
    fontFamily: "senReg",
  },
});
