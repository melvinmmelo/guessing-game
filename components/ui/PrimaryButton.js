
import { View, Text, Pressable, StyleSheet } from "react-native";

import Colors from '../../constants/colors'


function PrimaryButton({ children, onPress }) {


  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable style={({pressed}) => pressed ? [styles.pressed, styles.buttonInnerContainer] : styles.buttonInnerContainer} onPress={onPress} android_ripple={{ color: Colors.primary600 }}>
        {/* onPress={pressHandler()} - this format will execute the fuction */}
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden'
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8, // padding to the top and bottom
    paddingHorizontal: 16, // left and right
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,

  }
});