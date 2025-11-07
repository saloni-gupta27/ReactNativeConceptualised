import { useState } from "react";
import { View, Text, Button } from "react-native";

export function Counter({route}) {
  const [counter, setCounter] = useState(0);

  const {min,max}=route.params;
  console.log(min,max);
  //function to increment counter
  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  //function to decrement counter
  const decrementCounter = () => {
    setCounter(counter - 1);
  };
  //function to reset counter
  const resetCounter = () => {
    setCounter(0);
  };
  return (
    <View>
      <View>
        <Button title="remove" onPress={decrementCounter} color="tomato" />
        <Text>{counter}</Text>
        <Button title="add" onPress={incrementCounter} color="green" />
      </View>
      <View>
        <Button title="Reset" onPress={resetCounter} color={"blue"} />
      </View>
    </View>
  );
}
