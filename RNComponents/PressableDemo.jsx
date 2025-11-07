import { useState } from "react";
import { View, Text, Pressable } from "react-native";
export function PressableDemo() {
  //create a useState variable isPressed to track if the button is pressed or not
  const [isPressed, setisPressed] = useState(false);
  //create a useState variable isHover to track if the button is hovered or not
  const [isHover, setisHover] = useState(false);

  return (
    <Pressable
      onPressIn={() => {
        setisPressed(true);
      }}
      onPress={() => {
        console.log("Pressed");
      }}
      onLongPress={() => {
        console.log("onLongPress");
      }}
      onPressOut={() => {
        setisPressed(false);
      }}
      delayLongPress={1000}
      onHoverIn={() => {
        setisHover(true);
        console.log("Hover In");
      }}
      onHoverOut={() => {
        setisHover(false);
        console.log("Hover Out");
      }}
      style={{
        backgroundColor: isPressed ? "aqua" : "cadetblue",
        paddingHorizontal: isHover ? 30 : 20,
        paddingVertical: 10,
        borderRadius: 5,
      }}
    >
      <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
        <Text style={{ fontSize: 20, color: "white" }}>Pressable</Text>
      </View>
    </Pressable>
  );
}
