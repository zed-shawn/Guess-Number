import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Alert, Keyboard } from "react-native";
import HeadingText from "../reusables/textStyles/Headings";
import RegularText from "../reusables/textStyles/Regular";
import PButton from "../reusables/PButton";

import Card from "../reusables/Card";
import Color from "../constants/Colors";
import Input from "../reusables/Input";
import Value from "../reusables/Value";

export default function StartGameScreen(props) {
  const [enteredText, setEnteredText] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [value, setValue] = useState();

  const inputHandler = (inputText) => {
    setEnteredText(inputText.replace(/[^0-9]/g, ""));
    //console.log(enteredText);
  };
  const resetHandler = () => {
    setEnteredText("");
    setConfirmed(false);
  };

  const startHandler = () => {
    if (enteredText === NaN || enteredText <= 0 || enteredText > 99) {
      Alert.alert("Invalid Number", "Please enter a number between 1 & 99", [
        { text: "Cool!", style: "default", onPress: resetHandler },
      ]);
      return;
    }

    Keyboard.dismiss();
    setConfirmed(true);
    setValue(parseInt(enteredText));
    setEnteredText("");
  };
  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.confirmedOutputCard}>
        <Text style={styles.confirmedText}>Entered Number</Text>
        <Value> {value} </Value>
        <View style={styles.confirmedText}>
          <PButton
            //color={Color.accent}
            onPress={() => props.outToApp(value)}
          >
            START GAME!
          </PButton>
        </View>
      </Card>
    );
    //setTimeout(resetHandler, 9500);
  }

  return (
    <View style={styles.root}>
      <View style={styles.root}>
        <HeadingText style={styles.text}>GUESS A NUMBER</HeadingText>
      </View>
      <Card style={styles.inputView}>
        <View>
          <View style={styles.textBoxView}>
            <Input
              style={styles.textInput}
              placeholder="Enter Number"
              keyboardType="numeric"
              maxLength={2}
              blurOnSubmit
              onChangeText={inputHandler}
              value={enteredText}
            />
          </View>
          <View style={styles.button}>
            <View style={styles.indiButton}>
              <Button
                title="Reset"
                color={Color.accent}
                onPress={resetHandler}
              />
            </View>
            <View style={styles.indiButton}>
              <Button
                title="Confirm"
                color={Color.primary}
                onPress={startHandler}
              />
            </View>
          </View>
        </View>
      </Card>
      {confirmedOutput}
    </View>
  );
}

const styles = StyleSheet.create({
  touchable: {
    flex: 1,
  },
  root: {
    marginTop: 50,
    flexDirection: "column",
    alignItems: "center",
  },
  text: {
    fontSize: 65,
    color: Color.primary,
  },
  inputView: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 120,
  },
  textBoxView: {
    flexDirection: "row",
    //alignItems: "stretch",
    justifyContent: "center",
  },
  textInput: {
    width: 80,
    textAlign: "center",
  },
  button: {
    flexDirection: "row",
    width: "55%",
    justifyContent: "space-around",
    marginTop: 20,
  },
  indiButton: {
    width: 100,
  },
  confirmedOutputCard: {
    marginTop: 50,
    alignItems: "center",
    borderBottomWidth: 3,
    borderBottomColor: Color.accent,
    borderLeftWidth: 3,
    borderLeftColor: Color.accent,
  },
  confirmedText: {
    color: Color.accent,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 5,
  },
});
