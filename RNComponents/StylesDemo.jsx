//Stylesdemo.jsx
import { View,Text} from "react-native";
import { StyleSheet } from "react-native";
import { globalStyles } from "./.globalStyles";

export function StylesDemo()
{
    return(
        <View
        style={globalStyles.container}
        >

        <Text
        style={globalStyles.title}
        >React Native Styles</Text>
        <View
        style={[mystyles.container,mystyles.border_style,{borderRadius:5,borderColor:"gold"}]}
        >
            <Text style={{...mystyles.title,...mystyles.font_style}}>Styles Demo</Text>
        </View>
        </View>
    )
}

let mystyles=StyleSheet.create(
    {
        container:{
                    backgroundColor:"cadetblue",
                    padding:20,
                    color:"greenyellow",
                   
                },
        border_style:{
                borderColor:"black",
                borderWidth:2,
                borderStyle:"solid",
                backgroundColor:"steelblue"
        },
       title:{
        color:"greenyellow",
        fontWeight:"bold",
        fontSize:20
       }
       ,
       font_style:{
        color:"gold"
       }
})

 