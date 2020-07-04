import React from "react";
import { StyleSheet, Text } from "react-native";

export default function HeadingText(props) { return(
  <Text style={{ ...styles.heading, ...props.style }}>{props.children}</Text>)
}

const styles = StyleSheet.create({
  heading: {
    fontFamily: "senBold",
        fontSize: 65,

  },
});
