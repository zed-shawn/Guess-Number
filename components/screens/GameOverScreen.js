import React from "react";
import { View, StyleSheet, Text, Button, Image } from "react-native";
import Card from "../reusables/Card";
import Color from "../constants/Colors";
import PButton from "../reusables/PButton";

export default GameOverScreen = (props) => {
  return (
    <View style={styles.root}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/success.png")}
          resizeMode="cover"
        />
      </View>
      <Card style={styles.textBox}>
        <Text style={styles.text}>The computer guessed your number in</Text>
        <Text style={styles.textVal}>{props.attempts}</Text>
        <Text style={styles.text}>attempts</Text>
        <View stlye={styles.button}>
          <PButton onPress={props.onReset}>Restart Game!</PButton>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'space-evenly',
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
    textAlign: "center",
  },
  textVal: {
    color: Color.primary,
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    marginTop: 40,
  },
  imageContainer: {
    width: 300,
    height: 300,
    //   alignItems:'center',
    borderRadius: 150,
    borderWidth: 2,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
