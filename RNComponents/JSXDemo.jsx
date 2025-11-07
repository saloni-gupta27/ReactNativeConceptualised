//jsx=>js+UI(html/RN_UI)
import { View,Text,Button } from "react-native"

export function JSXdemo()
{
   let name="sachin"
   let btn=<Button title="click"/>
   let menuitems=[<Button title="Home"/>,<Button title="Aboutus"/>,<Button title="Contactus"/>]


    function sayHello()
    {
     return "Hello"
    }
    return(
        <View>
         <Text
         style={{backgroundColor:"cadetblue",fontSize:20,color:"greenyellow"}}
         >Jsx demo</Text>
         <Text>JS+UI</Text>
         <Text>{2+2}</Text>
         <Text>{sayHello()}</Text>
         <Text>{name}</Text>
         {btn}
         {menuitems}
        </View>
    )

}

//Returned ui should be enclosed with <View><View>/<></>
//To intepolate any valid JS expression "{}" can be used
//we can use jsx as a valid literal
//array of jsx can be iterated automatically.
//style attributes should be mention in camelCase.
//eg: background-color=>backgroundColor,color=>color