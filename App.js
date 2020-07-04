import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { AppLoading } from "expo";

import * as Font from "expo-font";
import Color from "./components/constants/Colors";
import Header from "./components/Header";
import GameScreen from "./components/screens/GameScreen";
import NotifBar from "./components/NotifBar";
import StartGameScreen from "./components/screens/StartGameScreen";
import GameOverScreen from "./components/screens/GameOverScreen";
const fontLoader = () => {
  console.log("fontloader executed");

  return Font.loadAsync({
    "senReg": require("./assets/fonts/Sen-Regular.ttf"),
    "senBold": require("./assets/fonts/Sen-Bold.ttf"),
  });
};

export default function App() {
  const [userInput, setUserInput] = useState();
  const [attempts, setAttempts] = useState();
  const [dataLoaded, setDataLoaded] = useState(false);
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fontLoader}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  const inputHandler = (inputFromSGS) => {
    setUserInput(inputFromSGS);
  };
  const attemptHandler = (inputFromGS) => {
    setAttempts(inputFromGS);
  };
  const resetHandler = () => {
    setUserInput();
    setAttempts();
  };

  let displayScreen = <StartGameScreen outToApp={inputHandler} />;
  if (userInput) {
    if (attempts) {
      displayScreen = (
        <GameOverScreen attempts={attempts} onReset={resetHandler} />
      );
    } else
      displayScreen = (
        <GameScreen userInput={userInput} attemptFromGS={attemptHandler} />
      );
  }

  return (
    <TouchableWithoutFeedback
      style={styles.touchable}
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <NotifBar />
        <Header />
        {displayScreen}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
  },
});
