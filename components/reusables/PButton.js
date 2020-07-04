import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Color from "../constants/Colors";
import { createPortal } from "react-dom";

export default function PButton(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.buttonBox}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonBox: {
    //height: 50,
    //width: 100,
   paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: "#e0e0e0",
    borderRadius:25,
  },
  buttonText: {
    fontFamily: "senReg",
    color: Color.primary,
  },
});
