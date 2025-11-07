//write a React Native component that returns a view and calculates BMI from height in cm and weight in kg
import {View, Text, TextInput} from "react-native"
import { useState } from "react"

//write a function to calculate BMI
export function BMI()
{
 const[height,setheight]=useState(0)
 const[weight,setweight]=useState(0)
 const[bmi,setbmi]=useState(0)

//  console.log("BMI is rendering..")

 let calculate_bmi=()=>{
    let h=height/100
    let bmi_value=(weight/(h*h))
    setbmi(bmi_value)
 }

 return(
    <View>
        <Text style={{fontSize:20,margin:10}}>BMI Calculator</Text>
        <TextInput placeholder="Enter Height in cm" keyboardType="numeric" onChangeText={(text)=>setheight(text)} style={{borderWidth:1,borderColor:"gray",padding:10,margin:10}}/>
        <TextInput placeholder="Enter Weight in kg" keyboardType="numeric" onChangeText={(text)=>setweight(text)} style={{borderWidth:1,borderColor:"gray",padding:10,margin:10}}/>
        <Text onPress={calculate_bmi} style={{backgroundColor:"blue",color:"white",textAlign:"center",padding:10,margin:10}}>Calculate BMI</Text>
        <Text style={{margin:10,fontSize:20}}>BMI Value: {bmi.toFixed(2)}</Text>
    </View>
 )
}