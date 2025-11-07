import { View, StyleSheet, Button } from "react-native";

export function FlexDemo() {
  return (
    <View style={mystyles.container}>
      <View style={mystyles.box1}>
        <Button title="btn1" />
        <Button title="btn2" />
        <Button title="btn3" />
        <Button title="btn4" />
        <Button title="btn5" />
      </View>
      <View style={mystyles.box2}>
        <Button title="btn1" />
        <Button title="btn2" />
        <Button title="btn3" />
        <Button title="btn4" />
        <Button title="btn5" />
        <Button title="btn6" />
        <Button title="btn7" />
        <Button title="btn8" />
        <Button title="btn9" />
        <Button title="btn10" />
        <Button title="btn11" />
        <Button title="btn12" />
      </View>
      <View style={mystyles.box3}>
        <Button title="btn1" />
        <Button title="btn2" />
        <Button title="btn3" />
      </View>
    </View>
  );
}

let mystyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
  },
  box1: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "powderblue",
  },
  box2: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
   // alignItems: "center", // does not works with flexWrap
    alignContent: "center", // works with flexWrap
    backgroundColor: "steelblue",
    //columnGap:5,
       // rowGap:5
    gap:5,
  },
  box3: {
    flex: 1,
    backgroundColor: "cadetblue",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    gap:10,
  },
});
