import { StyleSheet, View, Text } from "react-native"
import Colors from "../../constants/colors";

function Card({children}) {
  return (
    <View style={styles.inputCon}>
      {children}
    </View>
  );
}

export default Card

const styles = StyleSheet.create({
  inputCon: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4, // borderShadow in web dev // android property only
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
})