import React, { useState, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  Alert,
  ScrollView,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import RegularText from "../reusables/textStyles/Regular";

import Color from "../constants/Colors";
import Card from "../reusables/Card";
import Value from "../reusables/Value";
import PButton from "../reusables/PButton";

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
const guessList = (length, itemData) => {
  return (
    <Card style={styles.guessesCard}>
      <RegularText style={styles.listText}>#{length-itemData.index}</RegularText>
      <RegularText style={styles.listText}>{itemData.item}</RegularText>
    </Card>
  );
};

export default function GameScreen(props) {
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const initialGuess = generateRandomBetween(1, 100, props.userInput);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuess, setPastGuess] = useState([initialGuess.toString()]);
  const [attempts, setAttempts] = useState(1);

  const nextHandler = (direction) => {
    if (
      (currentGuess > props.userInput && direction === "greater") ||
      (currentGuess < props.userInput && direction === "lower")
    ) {
      Alert.alert("Bruh", "Why you do this", [
        { text: "Cool!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }
    const nextGuess = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextGuess);
    setPastGuess((curPastGuess) => [nextGuess.toString(), ...curPastGuess]);

    setAttempts(attempts + 1);
  };

  if (currentGuess === props.userInput) {
    /*Alert.alert("Game Over", "Your number was guessed", [
      { text: "Start Again", style: "default", onPress: props.onReset },
    ]);*/
    setTimeout(() => props.attemptFromGS(attempts), 500);
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
          <PButton onPress={nextHandler.bind(this, "lower")}>
            <Ionicons name="ios-arrow-down" size={40} color={Color.accent} />
          </PButton>

          <PButton onPress={nextHandler.bind(this, "greater")}>
            <Ionicons name="ios-arrow-up" size={40} color={Color.accent} />
          </PButton>
        </View>
        <View style={styles.textBox}>
          <Text style={styles.text}>Attempts: {attempts} </Text>
        </View>
      </Card>
      <View style={styles.listRoot}>
        {/* <ScrollView contentContainerStyle={styles.listScroll}>
          {pastGuess.map((guess,index) => guessList(guess, pastGuess.length-index))}
        </ScrollView> */}
        <FlatList
          contentContainerStyle={styles.listScroll}
          data={pastGuess}
          keyExtractor={(item) => item}
          renderItem={guessList.bind(this, pastGuess.length)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
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
  guessesCard: {
    flexDirection: "row",
    marginVertical: 5,
    borderBottomColor: Color.accent,
    borderLeftColor: Color.accent,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    elevation: 2,
    justifyContent: "space-around",
    width: "100%",
  },
  listRoot: {
    width: "40%",
    alignItems: "center",
    flex: 1,
  },
  listText: {
    color: Color.primary,
  },
  listScroll: {
    flexGrow: 1,
    justifyContent: "flex-end",
  },
});
