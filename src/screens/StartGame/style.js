import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    paddingTop: 50,
    backgroundColor: "#161920",
  },
  subtitle: {
    color: "black",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: 20,
  },
  cleanButton: {
    width: 100,
    backgroundColor: "grey",
    borderRadius: 10,
  },
  confirmStyle: {
    width: 100,
    backgroundColor: "green",
    borderRadius: 10,
  },
});

export default styles;