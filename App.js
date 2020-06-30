import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import Color from "./components/constants/Colors";

import Header from "./components/Header";
import GameScreen from "./components/screens/GameScreen";
import NotifBar from "./components/NotifBar";
import StartGameScreen from "./components/screens/StartGameScreen";
import GameOverScreen from "./components/screens/GameOverScreen";

export default function App() {
  const [userInput, setUserInput] = useState();
  const [attempts, setAttempts] = useState(1);

  const inputHandler = (inputFromSGS) => {
    setUserInput(inputFromSGS);
  };
  const attemptsHandler = (inputFromGS) => {
    setAttempts(inputFromGS);
    console.log(inputFromGS);
    
  };

  let displayScreen = <StartGameScreen outToApp={inputHandler} />;
  if (userInput) {
    if (attempts) {
      displayScreen = (
        <GameOverScreen
          attempts={attempts}
          resetGame={() => {
            setUserInput();
          }}
        />
      );
    } else {
      displayScreen = (
        <GameScreen userInput={userInput} outToAppFromGS={attemptsHandler} />
      );
    }
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
