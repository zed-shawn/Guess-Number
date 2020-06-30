import React, { useState } from "react";
import { Text, View, StyleSheet, Button, Alert } from "react-native";

import Color from "../constants/Colors";
import Card from "../reusables/Card";
import Value from "../reusables/Value";

let min = 1;
let max = 100;
const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const RandNum = Math.floor(Math.random() * (max - min)) + min;
  if (RandNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return RandNum;
  }
};

export default function GameScreen(props) {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userInput)
  );

  const lowerHandler = (currentGuess) => {
    if (currentGuess > props.userInput) {
      max = currentGuess;
      setCurrentGuess(generateRandomBetween(min, max, currentGuess));
    } else
      Alert.alert("Bruh", "Why you do this", [
        { text: "Cool!", style: "cancel" },
      ]);
    attemptCounter();
  };
  const higherHandler = (currentGuess) => {
    if (currentGuess < props.userInput) {
      min = currentGuess;
      setCurrentGuess(generateRandomBetween(min, max, currentGuess));
    } else
      Alert.alert("Bruh", "Why you do this", [
        { text: "Cool!", style: "cancel" },
      ]);
    attemptCounter();
  };

  let attempts = 0;
  const attemptCounter = () => {
    attempts = attempts + 1;
  };

  if (currentGuess === props.userInput) {
    console.log(currentGuess);
    {()=>props.outToAppFromGS(2)}
  }

  return (
    <View style={styles.root}>
      <Card>
        <View style={styles.textBox}>
          <Text style={styles.text}>Opponent's Guess</Text>
        </View>
        <View style={styles.valueBox}>
          <Value>{currentGuess}</Value>
        </View>
        <View style={styles.buttons}>
          <Button
            title="LOWER"
            onPress={() => lowerHandler(currentGuess)}
            color={Color.accent}
          />
          <Button
            title="HIGHER"
            onPress={() => higherHandler(currentGuess)}
            color={Color.accent}
          />
        </View>
        <View style={styles.textBox}>
          <Text style={styles.text}>Attempts: {attempts}</Text>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
  },
  textBox: {
    alignItems: "center",
    marginTop: 40,
  },
  text: {
    color: Color.accent,
    fontSize: 40,
    fontWeight: "bold",
  },
  valueBox: {
    alignItems: "center",
    marginTop: 80,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 80,
    width: "100%",
  },
});
