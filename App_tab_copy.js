import { StatusBar as StatusBarExpo } from 'expo-status-bar';
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Counter } from './RNComponents/Counter';
import { Currency } from './RNComponents/Currency';
import { BMI } from './RNComponents/BMI';
import { JSXdemo } from './RNComponents/JSXDemo';
import { Image } from 'react-native-web';
import { ImageDemo } from './RNComponents/ImageDemo';
import { PressableDemo } from './RNComponents/PressableDemo';
import { MyBtn } from './RNComponents/MyBtn';
import { TouchablesDemo } from './RNComponents/TouchablesDemo';
import { StylesDemo } from './RNComponents/StylesDemo';
import { FlexDemo } from './RNComponents/FlexDemo';
import { Learn } from './RNComponents/Learn';
import { Login } from './Pages/Login/Login';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ListDemoReact } from './RNComponents/ListDemoReact';
import { Productlist } from './Pages/Products/ProductList';
import { Todos } from './Pages/Todos/Todos';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {

  //let Stack=createNativeStackNavigator()
  let Tab=createBottomTabNavigator()
  return (
    <View style={styles.container}>
      <StatusBarExpo style="auto" />
      
      {/* <Learn/> */}
      {/* <Login/> */}
      {/* <Productlist/> */}

      {/* <Todos/> */}
      <NavigationContainer>
        {/* <Stack.Navigator screenOptions={{
          headerTitle:"Welcome",
          headerStyle:{backgroundColor:"cadetblue"},
          headerTintColor:"greenyellow",
          headerRight:()=><View><Text>Settings</Text></View>
        }}>
        <Stack.Screen name="Learn" component={Learn} />
        <Stack.Screen options={{headerTitle:"Login",
            headerStyle:{backgroundColor:"blueviolet"}
           }} name="Login" component={Login}/>
           <Stack.Screen name="Bmi" component={BMI}/>
           <Stack.Screen name="Counter" component={Counter}/>
      
        </Stack.Navigator> */}
        <Tab.Navigator
        screenOptions={{
          headerTitle:"Welcome",
          tabBarStyle:{backgroundColor:"cadetblue"},
          tabBarActiveBackgroundColor:"greenyellow",
          tabBarActiveTintColor:"black",
          tabBarInactiveTintColor:"greenyellow"
        }}
        >
           <Tab.Screen
           
           options={{headerTitle:"Learn",
            tabBarIcon:()=><MaterialIcons name="home" size={20}/>
           }}
           
           name="Home" component={Learn}/>
           <Tab.Screen 
            options={{headerTitle:"Login",
            tabBarIcon:()=><MaterialIcons name="login" size={20}/>
           }}
           name="Login" component={Login}/>
           <Tab.Screen name="Bmi" component={BMI}/>
           <Tab.Screen name="Counter" component={Counter}
           initialParams={{min:0,max:10}}
           />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:Platform.OS==="android"?StatusBar.currentHeight:0
  },
});
