import React, { useState } from "react";
import { Text, View, StyleSheet, Button, Alert } from "react-native";

import Color from "../constants/Colors";
import Card from "../reusables/Card";
import Value from "../reusables/Value";

export default function GameOverScreen(props) {
  return (
    <View>
      <Card>
        <View style={styles.container}>
          <Text>The computer guessed your number in</Text>
          <Value>{props.attempts}</Value>
          <Text>attempts</Text>
        </View>
        <Button title="Start Again" onPress={() => props.resetGame} />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
});
