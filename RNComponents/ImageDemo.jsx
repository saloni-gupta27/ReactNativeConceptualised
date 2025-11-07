import { Text, View, Image, ImageBackground, Pressable } from "react-native";

export function ImageDemo() {
  return (
    <View>
      <View
        style={{
          borderColor: "black",
          borderWidth: 5,
          borderRadius: 5,
          margin: 5,
        }}
      >
        <ImageBackground
          source={{
            uri: "data:image/jpeg;base64,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",
          }}
          style={{
            height: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Image Demo</Text>
        </ImageBackground>
      </View>
      <Image source={require("../assets/favicon.png")} />
      <Image
        style={{ height: 180, width: 150 }}
        source={{
          uri: "https://pagepro.co/blog/wp-content/uploads/2020/03/react-native-logo-884x1024.png",
        }}
      />
    <Pressable onPress={()=>{console.log("Hare Krishna!!!")}}>
      <Image
        style={{ height: 200 }}
        source={{
          uri: "https://sptheinteriorstudio.com/cdn/shop/files/g0a.jpg?v=1726383056",
        }}
      />
      </Pressable>
    </View>
  );
}
