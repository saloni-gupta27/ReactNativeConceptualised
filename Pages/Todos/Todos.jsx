import axios from 'axios';
import { useEffect, useState } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { ActivityIndicator, FlatList } from 'react-native';

export function Todos() {
    const [todos, setTodos ] = useState([])
    const[isposting,setposting]=useState(false) 
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((response)=>{
            setTodos(response.data)
        }).catch((error)=>{
            console.log("Error fetching todos:", error)
        })
    },[])

    let postdata=()=>{
        let data={course:"REact Native",
            date:"17-10-2025",
            msg:"Welcome to the course"
        }
        setposting(true)
        axios.post("https://trainingdata-13117.firebaseio.com/courses.json",data).
        then((res)=>{console.log(res.status)}).
        catch((err)=>{alert("Pls try again!!")}).
        finally(()=>{setposting(false)})
    }
    return (
        <View style={{flex:1}}>
            <Text style={{fontSize:30, fontWeight:'600'}}>Todos Component</Text>
            <TouchableOpacity
            style={{padding:10,flexDirection:"row",justifyContent:"center",alignItems:"center",backgroundColor:"steelblue"}}
            onPress={postdata}
            disabled={isposting}
            >
            {isposting && <ActivityIndicator size={"large"} color={"white"}/>}
             <Text>Post Data</Text>
            </TouchableOpacity>
            <FlatList data={todos} renderItem={({item})=><Text>{item.title}</Text>} keyExtractor={(item)=>item.id.toString()}/>
        </View>
    );
}