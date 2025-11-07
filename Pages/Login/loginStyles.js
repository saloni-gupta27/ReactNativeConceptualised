import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
    container: {
      flex: 1,
    },
    imgCard: {
      flex: 1,
      marginVertical: 10,
      maxHeight: 350,
    },
    img: {
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
      width: 320,
      height: 350,
      resizeMode: "contain",
    },
    contentCard: {
      flex: 1,
    },
    headingCard: {
      alignItems: "center",
      justifyContent: "center",
      padding: 5,
      marginVertical: 5,
    },
    title: {
      fontSize: 30,
      fontWeight: "bold",
    },
    text: {
      fontSize: 16,
      textAlign: "center",
      marginTop: 10,
      color: "grey",
    },
    actionCard: {
      justifyContent: "center",
      alignItems: "center",
      padding: 5,
      marginVertical: 5,
    },
    loginBtn: {
      height: 55,
      backgroundColor: "#403d88",
      borderRadius: 20,
      width: "60%",
      alignItems: "center",
      marginVertical: 10,
      alignItems: "center",
      padding: 14,
    },
    loginBtnText: {
      fontSize: 20,
      fontWeight: "semibold",
      color: "white",
    },
    loginBtnPressed: {
      backgroundColor: "#4D49A3",
    },
    signupBtn: {
      borderColor: "#403d88",
      borderWidth: 2,
      borderRadius: 20,
      marginVertical: 10,
      height: 55,
      width: "60%",
      alignItems: "center",
      padding: 14,
    },
    signupBtnText: {
      color: "#403d88",
      fontSize: 20,
      fontWeight: "semibold",
    },
    contactsCard: {
      justifyContent: "center",
      alignItems: "center",
      padding: 5,
      marginVertical: 5,
    },
    contactstext: {
      fontSize: 16,
      textAlign: "center",
      marginTop: 10,
      color: "grey",
    },
    contactslist: {
      flexDirection: "row",
      justifyContent: "center",
      gap: 20,
      alignItems: "center",
      width: "60%",
      marginVertical: 10,
      padding: 5,
    },
    contactimg: {
      height: 30,
      width: 30,
    },
  });
  