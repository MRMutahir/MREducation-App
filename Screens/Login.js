import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';

const Login = () => {
    return (
        <SafeAreaView>
            <Image source={require('../assets/bg.jpg')} style={styles.image} />
            <View style={styles.container}>
                <Text style={styles.welcomeText}>
                    WELCOME MR Education</Text>
                <Text style={styles.Login}>Login/Signup</Text>
                <TouchableOpacity style={styles.button}>
                    Sign In with Google
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
        marginTop: -20,
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
        textAlign: 'center',
        fontWeight: 'bold',
        color: "black",
    },
    Login: {
        textAlign: "center",
        color: "black",
        marginTop: 10,
    },
    button: {
        backgroundColor: "green",
        padding: 10,
        margin: 30,
        textAlign: "center",
        borderRadius: 10,
    }

});

export default Login;
