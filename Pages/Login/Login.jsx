//create react-native function boilerplate
import { useState } from "react";
import { Pressable, TouchableHighlight, TouchableOpacity } from "react-native";
import { View, Text, Image } from "react-native";
import { styles } from "./loginStyles";

export function Login() {
  const [isLoginPressed, setIsLoginPressed] = useState(false);
  const [isSignupPressed, setIsSignupPressed] = useState(false);

  return (
      <View style={styles.container}>
        <View style={styles.imgCard}>
          <Image
            style={styles.img}
            source={require("../../assets/login.png")}
          />
        </View>
        <View style={styles.contentCard}>
          <View style={styles.headingCard}>
            <Text style={styles.title}>Hello</Text>
            <Text style={styles.text}>
              Welcome To Little Drop, where you manage your daily tasks
            </Text>
          </View>
          <View style={styles.actionCard}>
            <Pressable
              onPress={() => console.log("Login Pressed")}
              onPressIn={() => setIsLoginPressed(true)}
              onPressOut={() => setIsLoginPressed(false)}
              style={[
                styles.loginBtn,
                isLoginPressed && styles.loginBtnPressed,
              ]}
            >
              <Text style={styles.loginBtnText}>Login</Text>
            </Pressable>
            <Pressable
              style={[
                styles.signupBtn,
                isSignupPressed && { backgroundColor: "#403d88" },
              ]}
              onPress={() => {
                console.log("Signup Pressed");
              }}
              onPressIn={() => setIsSignupPressed(true)}
              onPressOut={() => setIsSignupPressed(false)}
            >
              <Text
                style={[
                  styles.signupBtnText,
                  isSignupPressed && { color: "#fff" },
                ]}
              >
                Sign&nbsp;Up
              </Text>
            </Pressable>
            {/* <TouchableHighlight
              style={
                styles.signupBtn}
              onPress={() => {
                console.log("Signup touchable");
              }}
              activeOpacity={0.5} underlayColor={"#403d88"}
            >
              <Text
                style={[
                  styles.signupBtnText,
                  isSignupPressed && { color: "#fff" },
                ]}
              >
                Sign&nbsp;Up
              </Text>
            </TouchableHighlight> */}
          </View>
          <View style={styles.contactsCard}>
            <Text style={styles.contactstext}>Sign up using</Text>
            <View style={styles.contactslist}>
              <TouchableOpacity activeOpacity={0.5}>
                <Image
                  source={require("../../assets/facebook.png")}
                  style={styles.contactimg}
                />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5}>
                <Image
                  source={require("../../assets/google.png")}
                  style={styles.contactimg}
                />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5}>
                <Image
                  source={require("../../assets/linkedin.png")}
                  style={styles.contactimg}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
  );
}
