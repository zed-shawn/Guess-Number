import React from "react";
import { View, StyleSheet } from "react-native";

export default function NotifBar() {
  return <View style={styles.notifBar}></View>;
}

const styles = StyleSheet.create({
  notifBar: {
    height: 24,
    backgroundColor: "#fff",
  },
});
