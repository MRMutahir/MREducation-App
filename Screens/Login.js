import React from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Color from "../App/Shared/Color";

const Login = () => {
  return (
    <SafeAreaView>
      <Image source={require("../assets/bg.jpg")} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.welcomeText}>WELCOME MR Education</Text>
        <Text style={styles.Login}>Login/Signup</Text>
        <TouchableOpacity style={styles.button}>
          <AntDesign
            name="google"
            size={24}
            color="black"
            style={{
              marginRight: "10px",
            }}
          />
          <Text
            style={{
              marginLeft: "10px",
            }}
          >
            {" "}
            Sign In with Google
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 40,
    marginTop: 60,
    backgroundColor: "#fff",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  image: {
    // width: '100%',
    height: 200,
  },
  welcomeText: {
    marginTop: 10,
    fontSize: 35,
    textAlign: "center",
    fontWeight: "bold",
    color: "black",
  },
  Login: {
    textAlign: "center",
    color: "black",
    marginTop: 10,
  },
  button: {
    backgroundColor: Color.primary,
    padding: 10,
    margin: 30,
    textAlign: "center",
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Login;
