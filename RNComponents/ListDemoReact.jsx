import { Text, View ,Button, TouchableHighlight} from "react-native";

export function ListDemoReact()
{
    let users=["virat","rohit","rahul","dhoni","sachin"]
    
    let userlist=users.map((user,index)=>
        <TouchableHighlight style={{backgroundColor:index%2==0?"steelblue":"powderblue",margin:5, height:30, width:50,justifyContent:'center', alignItems:'center' }} activeOpacity={0.7} underlayColor="lightgrey" key={index+Math.random()} onPress={()=>console.log('pressed')}>
    <Text> {user} </Text>
    
</TouchableHighlight>
)
    console.log(userlist)
    console.log(users)

    return(
        <View
        style={{
            flex:1,
            justifyContent:"center",
            alignItems:"center"}}
        >
            <Text>List demo</Text>
            {userlist}
        </View>
    )
}