import { TouchableHighlight, TouchableOpacity } from "react-native"
import { View,Text } from "react-native"

export function TouchablesDemo() {
    return (
        <View>
        <TouchableOpacity
          style={{backgroundColor:"cadetblue",
            paddingHorizontal:20,
            paddingVertical:10,
            borderRadius:5
          }}
            onPress={() => { console.log("Touchable opacity Clicked!!") }}

            activeOpacity={0.5}
        >
            <View>
                <Text>Touchable Opacity</Text>
            </View>
        </TouchableOpacity>
    
         <TouchableHighlight
          style={{backgroundColor:"cadetblue",
            paddingHorizontal:20,
            paddingVertical:10,
            borderRadius:5
          }}
            onPress={() => { console.log("Touchable Highlight Clicked!!") }}

            activeOpacity={0.7}
            underlayColor={"aqua"}
        >
            <View>
                <Text>Touchable Highlight</Text>
            </View>
        </TouchableHighlight>
    </View>
    )
}