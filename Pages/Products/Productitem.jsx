//Productitem.jsx
import { View, Text, Button, Image, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export function Productitem({ prod_item, delete_item, update_item }) {
  let bgcolor = prod_item.instock ? "#fff" : "lightgrey";

  return (
    <View style={[mystyle.container, { backgroundColor: bgcolor }]}>
      <View style={mystyle.img_container}>
        <Image
          style={{ height: 100, width: 100 }}
          source={require("../../assets/splash-icon.png")}
        />
      </View>
      <View>
        <View style={mystyle.title_container}>
          <Text style={mystyle.title}>{prod_item.name}</Text>
          {prod_item.category === "electronics" || <Text>Flat50% off</Text>}
        </View>
        <Text>{prod_item.brand}</Text>
        <Text>{prod_item.price}</Text>
        <View style={mystyle.btn_container}>
          {prod_item.instock ? (
            <Button title="Add" />
          ) : (
            <Text style={{ color: "red" }}>Out of stock!</Text>
          )}
          <MaterialIcons
            name="delete"
            size={24}
            color="red"
            onPress={() => {
              delete_item(prod_item);
            }}
          />
          <MaterialIcons
            name="edit"
            size={24}
            color="black"
            onPress={() => {
              update_item(prod_item);
            }}
          />
        </View>
      </View>
    </View>
  );
}

let mystyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderColor: "grey",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 5,
    columnGap: 10,
    margin: 5,
    padding: 10,
    justifyContent: "center",
    alignContent: "center",
  },
  btn_container: {
    flexDirection: "row",
    columnGap: 5,
  },
  img_container: {
    justifyContent: "center",
    alignItems: "center",
  },
  title_container: {
    flexDirection: "row",
    columnGap: 10,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

/*
cond?true_statement:false_Statement
cond&&true_statement
cond||false_statement

*/
