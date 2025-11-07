//Productlist.jsx
import { View, Text, FlatList, Button, StatusBar, Alert} from "react-native";
import { products } from "./products";
import { useState } from "react";
import { Productitem } from "./Productitem";
import { SafeAreaView } from "react-native-safe-area-context";
export function Productlist() {
  const [productlist, setlist] = useState(products);

  const addproduct = () => {
    console.log("add product");
    let newproduct = {
      id: products.length + 1 + Math.random(),
      name: "Tshirt",
      brand: "Uspollo",
      price: 6000,
      category: "apparel",
      rating: 4.5,
      instock: true,
      comments: ["good", "average", "Great"],
    };
    // productlist.push(newproduct)
    setlist([...productlist, newproduct]);
  };

  const deleteProduct = (item) => {
    Alert.alert("Confirm","Do you want to delete?",
        [
            {text:"Ok",
             onPress:()=>{
                       let newlist=productlist.filter((product)=>product!==item)//filter the items based on given condition
                        setlist(newlist)
             }   
            },
            {
                text:"cancel",
                onPress:()=>{
                    console.log("Deletion cancelled!!")
                }
            },
            {
                text:"Ask me later",
                onPress:()=>{console.log("Ask me later")}
            },
            {
                text:"btn4",
                onPress:()=>{console.log("Btn4")}
            }
        ]
       )
  };
  const updateProduct = (item) => {
    let newlist = productlist.map((product) => {
      if (product === item) {
        product.price = product.price + 1000;
        return product;
      }
      return product;
    });

    setlist(newlist);
  };

  let filterProduct = (category) => {
    let newlist = products.filter((product) => product.category === category);
    setlist(newlist);
  };
  return (
    <View style={{ flex: 1, rowGap: 10 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <Button
          title="All"
          onPress={() => {
            setlist(products);
          }}
        />
        <Button
          title="Electronics"
          onPress={() => {
            filterProduct("electronics");
          }}
        />
        <Button
          title="Furniture"
          onPress={() => {
            filterProduct("furniture");
          }}
        />
      </View>
      <Button title="ADD Product" onPress={addproduct} />
      <FlatList
        data={productlist}
        renderItem={({ item }) => (
          <Productitem
            prod_item={item}
            delete_item={deleteProduct}
            update_item={updateProduct}
          />
        )}
        ItemSeparatorComponent={<View style={{ height: 10 }}></View>}
      />
    </View>
  );
}
