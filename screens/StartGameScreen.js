import React, { useState } from 'react'
import PrimaryButton from '../components/ui/PrimaryButton'

import { View, TextInput, StyleSheet, Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView }  from 'react-native'
import Colors from '../constants/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';


function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const { width, height } = useWindowDimensions()

  function numberInputHandler(en) {
    setEnteredNumber(en);
  }

  function resetHandler() {
    setEnteredNumber("");
  }

  function confirmHandler() {
    const chosenNo = parseInt(enteredNumber);

    if (isNaN(chosenNo) || chosenNo <= 0 || chosenNo >= 99) {
      Alert.alert("Number is invalid", "Number should between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetHandler },
      ]);
      return;
    }

    onPickNumber(chosenNo)
  }

  const marginTopDistance = height < 380 ? 30 : 100;


  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Title>Guess my Number</Title>
          <Card>
            <InstructionText>Enter a number to be guess.</InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              value={enteredNumber}
              onChangeText={numberInputHandler}
            />
            <View style={styles.buttonsCon}>
              <View style={styles.buttonCon}>
                <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonCon}>
                <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartGameScreen


const styles = StyleSheet.create({
  screen:{
    flex: 1
  },
  rootContainer: {
    flex: 1,
    alignItems: 'center'
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsCon: {
    flexDirection: "row",
  },
  buttonCon: {
    flex: 1,
  },
});