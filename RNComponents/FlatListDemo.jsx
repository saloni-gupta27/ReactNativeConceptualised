import { FlatList, View, Text, Button, StyleSheet } from "react-native";

export function FlatlistDemo() {
  let users = [
    "virat",
    "rohit",
    "rahul",
    "dhoni",
    "sachin",
    "virat",
    "rohit",
    "rahul",
    "sachin",
    "virat",
    "rohit",
    "rahul",
    "sachin",
    "virat",
    "rohit",
    "rahul",
    "dhoni",
    "sachin",
    "virat",
    "rohit",
    "rahul",
    "dhoni",
    "sachin",
    "virat",
    "rohit",
    "rahul",
    "dhoni",
    "sachin",
  ];

  return (
    <View>
      <FlatList
        data={users}
        renderItem={({ item, index }) => (
          <Button 
            title={index + ")" + item}
            onPress={() => {
              console.log(index + ")" + item + " is clicked");
            }}
          />
        )}
        keyExtractor={(useritem, index) => index + useritem + Math.random()}
        ListHeaderComponent={() =><View style={{alignItems:'center'}} ><Text style={{ fontSize: 20 }}>Users List</Text></View>}
        ListFooterComponent={() =><Text style={{ fontSize: 20, alignSelf:'center' }}>End of the List</Text>}
        ItemSeparatorComponent={()=><View style={{height:2, backgroundColor:'lightgray'}} />}
      />
    </View>
  );
}
