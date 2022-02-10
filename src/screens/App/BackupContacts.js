import React, { Component } from "react";
import { StatusBar,View, Text, StyleSheet, SafeAreaView, TextInput, Image, TouchableOpacity, Platform, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';


export default class BackupContacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            types: [
                { label: 'vCard Format', value: 0 },
                { label: '.csv Format', value: 1 }
            ]
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar />
                <LinearGradient
                    colors={['rgba(0, 79, 109, 1)', 'rgba(27, 117, 187, 1)']}
                    style={styles.linearGradient}
                >
                    <SafeAreaView style={styles.safeArea}>
                        {/* <View style={styles.title} > */}
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <View style={{ marginRight: 20 }}>
                                <Image source={require("../../../assets/BackArrow.png")} style={{ width: 15, height: 25 }} />
                            </View>
                        </TouchableOpacity>
                        <View>
                            <Text style={{ fontSize: 24, color: "#fff" }}>
                                Backup Contacts
                            </Text>
                        </View>
                    </SafeAreaView>
                    {/* </View> */}
                </LinearGradient>
                <View style={{ paddingHorizontal: 10, marginTop: 20 }}>
                    <View style={{ backgroundColor: "rgba(27, 117, 187, 0.1)", paddingVertical: 15, paddingHorizontal: 10, borderRadius: 10, alignItems: 'center', flexDirection: 'row', marginBottom: 30 }}>
                        <View>
                            <Image source={require("../../../assets/Backup.png")} style={{ width: 25, height: 25 }} />
                        </View>
                        <View style={{ width: "80%", marginLeft: 10 }}>
                            <Text style={styles.BackupContactsText}>Number of Contacts in Backup</Text>
                        </View>
                        <View>
                            <Text style={styles.counts}>279</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.chooseFormat}>Choose format</Text>
                    </View>
                    <View style={{marginVertical: 20}}>
                        <RadioForm
                            radio_props={this.state.types}
                            initial={0}
                            formHorizontal={false}
                            labelHorizontal={true}
                            buttonColor={'#F6921E'}
                            selectedButtonColor={'#F6921E'}
                            animation={true}
                            labelStyle={{fontSize: 14}}
                            onPress={(value) => { this.setState({ value: value }) }}
                        />
                    </View>
                    <View>
                        <Text style={styles.emailTitle}>Email Address to Send Backup FIle</Text>
                    </View>
                    <View>
                        <TextInput 
                            style={[styles.textInput, { width: "100%", marginTop: 10, paddingVertical: 10 }]}
                            placeholder={"Email"}
                            keyboardType={"email-address"}
                        />
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal: "5%"}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("BackupContacts")} style={[styles.fileButton, {paddingHorizontal: 40, backgroundColor:'#fff', borderColor:"#F6921E", borderWidth:1}]}>

                        <View >
                            <Text style={{ color: "#F6921E" }}>Email File</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("BackupContacts")} style={[styles.fileButton, {paddingHorizontal: 40}]}>

                        <View >
                            <Text style={{ color: "#fff" }}>Export File</Text>
                        </View>
                    </TouchableOpacity>
                    </View>
                </View>

            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    linearGradient: {
        // height: 60
        ...Platform.select({
            android: {
                height: 80,
                paddingHorizontal: 10,
            },
            ios: {
                height: 90,
                paddingHorizontal: 10,
            }
        })
    },
    safeArea: {
        ...Platform.select({
            android: {
                paddingTop: 30,
                flexDirection: 'row',
                alignItems: 'center'
            },
            ios: {
                flexDirection: 'row',
                alignItems: 'center'
            }
        })
    },
    BackupContactsText: {
        fontSize: 14,
        color: "#484848"
    },
    counts: {
        fontSize: 20,
        color: "#F6921E"
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    heading: {
        textAlign: "center",
        padding: 12,
    },
    flatListTitle: {
        fontWeight: "500",
        fontSize: 18,
        color: "#F6921E",
    },
    flatListText: {
        fontSize: 12,
    },
    socialLogin: {
        width: 26,
        height: 28
    },
    emailTitle: {
        fontSize: 14,
        color: "#F6921E",
    },
    chooseFormat: {
        fontSize: 14,
        color: "#1B75BB"
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
    fileButton: {
        backgroundColor: '#F6921E',
        borderRadius: 10,
        alignItems: 'center',
        padding: 15,
        marginTop: 25
    },

});