import { Text, StyleSheet } from "react-native"
import Colors from "../../constants/colors";

function InstructionText({children}) {
  return (
    <Text style={styles.myTextStyle}>
      {children}
    </Text>
  )
}

export default InstructionText

const styles = StyleSheet.create({
  myTextStyle: {
    fontFamily: 'open-sans',
    color: Colors.accent500,
    fontSize: 16,
  },
});