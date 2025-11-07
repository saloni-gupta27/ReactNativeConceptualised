import { useEffect, useState } from "react"
import { Text,View } from "react-native"
import { Button } from "react-native"

export function UseEffectDemo()
{
    const[counter,setcounter]=useState(0)
    const[msg,setmsg]=useState("Hello")
    useEffect(()=>{console.log("UE1:Executed after each rendering")})
    useEffect(()=>{console.log("UE2:Executed after initial rendering")},[])
    useEffect(()=>{console.log("UE3:Executed after counter/msg change")},[counter,msg])
    /*console.log("statement1")
    console.log("Statement2")*/
    function display()
    {
        console.log("rendering..")
    }
    return(
        <View>
          <Text>UseEffect demo</Text>
          {display()}
          <Text style={{fontSize:20}}>{counter}</Text>
          <Button title="inc" onPress={()=>{setcounter(counter+1)}}/>
          <Text>{msg}</Text>
          <Button title="changemsg" onPress={()=>{setmsg(msg+"!")}}/>
        </View>
    )

  

}

//It is hook used to handle sideeffects
//useEffect execute sideeffects after rendering
//useEffect(callback,dep)
 