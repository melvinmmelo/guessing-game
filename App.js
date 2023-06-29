import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';

import { LinearGradient } from 'expo-linear-gradient';
import { useCallback, useEffect, useState } from 'react';
import GameSceen from './screens/GameSceen';
import Colors from './constants/colors';
import GameOver from './screens/GameOver';

import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from 'expo-status-bar'

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [userNumber, setUserNumber ] = useState()
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState([]);



  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });


  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  function pickNumber (pN) {
    setUserNumber(pN)
    setGameIsOver(false)
  }

  function gameOverHandler(numberOfRounds){
    setGameIsOver(true)
    setGuessRounds(numberOfRounds);
  }

  function startNewGameHandler(){
    setUserNumber(null)
    setGuessRounds(0);
  }

  function setGuessRoundsHandler() {
    setGuessRounds(guessRounds + 1);
  }

  let screen = <StartGameScreen onPickNumber={pickNumber} />;

  if (userNumber) {
    screen = (
      <GameSceen
        userNumber={userNumber}
        onGameOver={gameOverHandler}
        setGuessRounds={setGuessRoundsHandler}
      />
    );
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOver
        roundsNumber={guessRounds}
        userNumber={userNumber}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <>
      <StatusBar style='light' />
      <LinearGradient
        // Background Linear Gradient
        colors={[Colors.primary700, Colors.accent500]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require("./assets/background.png")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen} onLayout={onLayoutRootView}>
            {screen}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },

  backgroundImage: {
    opacity: 0.15
  }
});
