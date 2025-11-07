import { Button, StyleSheet, View } from "react-native";
import { BMI } from "./BMI";
import { Counter } from "./Counter";
import { Currency } from "./Currency";
import { FlexDemo } from "./FlexDemo";
import { ImageDemo } from "./ImageDemo";
import { JSXdemo } from "./JSXDemo";
import { MyBtn } from "./MyBtn";
import { PressableDemo } from "./PressableDemo";
import { StylesDemo } from "./StylesDemo";
import { TouchablesDemo } from "./TouchablesDemo";
import { ListDemoReact } from "./ListDemoReact";
import { FlatlistDemo } from "./FlatListDemo";
import { UseEffectDemo } from "./UseEffectDemo";

export function Learn({navigation}) {
  return (
    <View style={styles.container}>

      {/* <Counter/>
      <Currency/>
      <BMI/>
      <JSXdemo/>  
      <ImageDemo/> 
      <PressableDemo/>
      <MyBtn text="MyBtn" on_Press={()=>console.log("pressed")} defaultBg="steelblue" activeBg="powderblue" />
        <TouchablesDemo/> 
        <StylesDemo/>
        <FlexDemo/> 
        <ListDemoReact/> 
        <FlatlistDemo/> 
        <UseEffectDemo/> */}
          <Button title={"Login"} onPress={()=>{navigation.navigate("Login")}}/>
            <Button title={"BMI"}  onPress={()=>{navigation.navigate("Bmi")}}/>
            <Button title={"Counter"}  onPress={()=>{navigation.navigate("Counter",{min:0,max:10})}}/>
      
        
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      
    },
  });
  