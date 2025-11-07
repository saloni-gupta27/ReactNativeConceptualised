import { useState } from "react";
import { View, Text, Pressable } from "react-native";
export function MyBtn({on_Press, text, defaultBg, activeBg}) {
  //create a useState variable isPressed to track if the button is pressed or not
  const [isPressed, setisPressed] = useState(false);

  return (
    <Pressable 
    onPressIn={()=>{setisPressed(true)}}
    onPress={on_Press}
    onPressOut={()=>{setisPressed(false)}}
    delayLongPress={1000}
      style={{
        backgroundColor: isPressed ? activeBg : defaultBg,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
      }}
    >
      <View>
        <Text>{text}</Text>
      </View>
    </Pressable>
  );
}
