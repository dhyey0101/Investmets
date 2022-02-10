import React, { Component } from "react";
import { StatusBar,View, Text, StyleSheet, SafeAreaView, TextInput, Image, TouchableOpacity, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPassword: true,
        }
    }
    toggleSwitch() {
        if (this.state.showPassword == true) {
            this.setState({
                showPassword: false
            });
        } else {
            this.setState({
                showPassword: true
            });
        }
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar />
                <LinearGradient
                    colors={['rgba(0, 79, 109, 1)', 'rgba(27, 117, 187, 1)']}
                    style={styles.linearGradient}
                />
                <View style={styles.title} >
                    <Text style={{ fontSize: 24 }}>
                        Sign Up
                    </Text>
                </View>
                <View style={{ paddingHorizontal: "5%" }}>
                    <View>
                        <Text>Username</Text>
                    </View>
                    <View>
                        <TextInput
                            style={styles.userNameTextInput}
                            placeholder={"Username"}
                        />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text>Email</Text>
                    </View>
                    <View style={styles.emailField}>
                        <TextInput
                            style={[styles.textInput, { width: "100%" }]}
                            placeholder={"Email"}
                        />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text>Password</Text>
                    </View>
                    <View style={styles.passwordField}>
                        <TextInput
                            style={[styles.textInput, { width: "90%" }]}
                            secureTextEntry={this.state.showPassword}
                            placeholder={"Password"}
                        />
                        <TouchableOpacity onPress={() => this.toggleSwitch()} style={{ justifyContent: 'center', marginRight: 10 }}>

                            <View >
                                <Image source={require("../../../assets/eyes.png")} style={styles.eyeLogo} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")} style={styles.signupButton}>

                        <View >
                            <Text style={{ color: "#fff" }}>SIGN UP</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={{ marginTop: 15, alignItems: 'center' }}>
                        <Text style={{ fontSize: 16 }}>OR</Text>
                    </View>
                    <View style={styles.socialLoginView}>
                        <View>
                            <Image source={require("../../../assets/Google.png")} style={styles.socialLogin} />
                        </View>
                        <View>
                            <Image source={require("../../../assets/facebook.png")} style={styles.socialLogin} />
                        </View>
                        <View>
                            <Image source={require("../../../assets/apple.png")} style={styles.appleLogo} />
                        </View>
                    </View>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")} style={styles.bottomText}>
                        <View >
                            <Text>Have an account! <Text style={{ color: '#F6921E' }}>Log In</Text></Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    linearGradient: {
        height: 60
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    heading: {
        textAlign: "center",
        padding: 12,
    },
    title: {
        fontWeight: "bold",
    },
    textInput: {
        ...Platform.select({
            ios: {
                borderRadius: 10,
                padding: 5,
                backgroundColor: '#F9F9F9',
                color: "#000",
                paddingVertical: 10
            },
            android: {
                borderRadius: 10,
                padding: 5,
                backgroundColor: '#F9F9F9',
                color: "#000"
            }
        })
    },
    userNameTextInput: {
        ...Platform.select({
            ios: {
                borderRadius: 10,
                paddingVertical: 15,
                paddingHorizontal: 10,
                backgroundColor: '#F9F9F9',
                color: "#000",
            },
            android: {
                borderRadius: 10,
                paddingVertical: 8,
                paddingHorizontal: 10,
                padding: 5,
                backgroundColor: '#F9F9F9',
                color: "#000"
            }
        })
    },
    socialLogin: {
        width: 25,
        height: 25
    },
    socialLoginView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '25%',
        padding: 20,
        alignItems: 'center'
    },
    signupButton: {
        backgroundColor: '#1B75BB',
        borderRadius: 10,
        alignItems: 'center',
        padding: 15,
        marginTop: 25
    },
    passwordField: {
        flexDirection: 'row',
        backgroundColor: '#F9F9F9',
        borderRadius: 10,
        padding: 5,
        justifyContent: 'space-between'
    },
    emailField: {
        flexDirection: 'row',
        backgroundColor: '#F9F9F9',
        borderRadius: 10,
        padding: 5,
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30
    },
    appleLogo: {
        width: 23,
        height: 25
    },
    eyeLogo: {
        width: 25,
        height: 15
    },
    bottomText:{
        ...Platform.select({
            ios:{
                alignItems: 'center', marginTop: "60%" 
            },
            android:{
                alignItems: 'center', marginTop: "50%" 
            }
        })
    }
});