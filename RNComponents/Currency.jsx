// create a react-native component called Currency returning a view with a text input to enter the usd amount to be converted to inr
import { useEffect, useState } from "react";
import { View, Text, TextInput } from "react-native";

export function Currency() {
    const [inr, setInr] = useState(0);
    const [usd, setUsd] = useState(0);
    
    //function to convert usd to inr (1 usd = 82 inr) and render usd amount on change on textinput
    // const convertCurrency = (amount) => {
    //     setUsd(amount);
    //     const convertedAmount = parseFloat(amount) * 82;
    //     setInr(convertedAmount);
    // };
    useEffect(()=>{
        console.log("Currency Component rendered/updated")
        setInr(usd*82)
    },[usd])
     
   let convertCurrency=(amount)=>{
    let temp=parseInt(amount)
    setUsd(temp)//Async//collect
    console.log('usd value set')
    
    }

    return (
        <View>            
        <Text style={{ fontSize: 20, margin: 10 }}>Currency Converter</Text>
        <TextInput
            placeholder="Enter USD amount"
            keyboardType="numeric"
            onChangeText={(text)=>convertCurrency(text)}
            style={{
            borderWidth: 1,
            borderColor: "gray",
            padding: 10,
            margin: 10,
            }}
        />       
        <Text style={{ margin: 10, fontSize: 20 }}>
            INR Amount: {!inr ? '0' :inr.toFixed(2)}
        </Text>
        </View>
    );

}



// import { useState } from "react";
// import { View,Text, TextInput } from "react-native";

// export function Currency()
// {
//  const[inr,setinr]=useState(0)
//  //const[usd,setusd]=useState(0)

//  console.log("Currency is rendering..")

// /*
// let inr_to_usd=(text)=>{
// let temp=parseInt(text)
// setinr(temp)//Async//collect
// //setusd(inr*84)//Async//collect
// //[setinr(1)]
// }*/

//  return(
//     <View>
//         <Text>Currency Convertor</Text>
//         <TextInput 
//         placeholder="Enter INR"
//         onChangeText={setinr}
//         />
//         <Text>USD:{inr*84}</Text>
//     </View>
//  )
// }
    
