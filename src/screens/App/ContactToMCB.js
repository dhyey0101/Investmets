import React, { Component } from "react";
import {  StatusBar,View, Text, StyleSheet, SafeAreaView, TextInput, Image, TouchableOpacity, Platform, FlatList, ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ToggleSwitch from 'toggle-switch-react-native'
import DropdownAlert from 'react-native-dropdownalert';



export default class ContactToMCB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switch: false,
            NumberHolder: 1,
            loader: false,
            count: 0,
            data: [
                {
                    id: "1",
                    image: require("../../../assets/Cloud.png"),
                    title: "iCloud",
                    text: "Jessie29@icloud.com",
                    Contacts: "Contacts",
                    Count: "144"
                },
                {
                    id: "2",
                    image: require("../../../assets/Email.png"),
                    title: "Gmail",
                    text: "Jessie29@gmail.com",
                    Contacts: "Contacts",
                    Count: "68"
                },
                {
                    id: "3",
                    image: require("../../../assets/Yahoo.png"),
                    title: "Yahoo",
                    text: "Jessie29@yahoo.com",
                    Contacts: "Contacts",
                    Count: "68"
                },
                {
                    id: "4",
                    image: require("../../../assets/Outlook.png"),
                    title: "Exchange/Outlook-Group 1",
                    text: "Jessie29@outlook.com",
                    Contacts: "Contacts",
                    Count: "245"
                },
                {
                    id: "5",
                    image: require("../../../assets/Outlook.png"),
                    title: "Exchange/Outlook-Group 2",
                    text: "Jessie29@outlook.com",
                    Contacts: "Contacts",
                    Count: "77"
                },
                {
                    id: "5",
                    image: require("../../../assets/Outlook.png"),
                    title: "Exchange/Outlook-Group 3",
                    text: "Jessie29@outlook.com",
                    Contacts: "Contacts",
                    Count: "14"
                }
            ]
        }
    }
    async GenerateRandomNumber() {
        // this.setState({loader: true})
        var RandomNumber = Math.floor(Math.random() * 100) + 1;

        this.setState({

            NumberHolder: RandomNumber

        })
        if (this.state.NumberHolder % 2 === 0) {

            this.setState({ loader: true })
            await setTimeout(() => {
                this.setState({ loader: false });
                this.dropdown.alertWithType('error', 'Error', "Content not coppied");
            }, 2000)
        } else {
            this.setState({ loader: true })
            // this.setState({loader: false})
            await setTimeout(() => {
                this.setState({ loader: false });
                this.dropdown.alertWithType('success', 'Succsess', "Coppied");
            }, 2000)
            await setTimeout(() => {
                this.props.navigation.navigate("BackupContacts")
            }, 5000)
        }
    }

    renderItem(item) {
        return (
            <View style={styles.renderItemStyle}>
                <View style={{ marginRight: 5 }}>
                    <ToggleSwitch
                        isOn={this.state.switch}
                        onColor="green"
                        offColor="#fff"
                        // label="Example label"
                        labelStyle={{ color: "black", fontWeight: "900" }}
                        size="medium"
                        onToggle={isOn => this.setState({ switch: isOn })}
                    />
                </View>
                <View>
                    <Image source={item.item.image} style={styles.socialLogin} />
                    {/* <Image source={require("../../../assets/Copy.png")} style={styles.socialLogin} /> */}
                </View>
                <View style={{ paddingHorizontal: 10, width: "60%" }}>
                    <Text style={styles.flatListTitle}>{item.item.title}</Text>
                    <Text style={styles.flatListText}>{item.item.text}</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.flatListContactsText}>{item.item.Contacts}</Text>
                    <Text style={styles.flatListCountText}>{item.item.Count}</Text>
                </View>
            </View>
        )
    }

    render() {
        if (!this.state.loader) {
            return (
                <SafeAreaView style={styles.container}>
                    <StatusBar />
                    <LinearGradient
                        colors={['rgba(0, 79, 109, 1)', 'rgba(27, 117, 187, 1)']}
                        style={styles.linearGradient}
                    >
                        <SafeAreaView style={styles.safeArea}>
                            {/* <View style={styles.title} > */}
                            <Text style={{ fontSize: 24, color: "#fff" }}>
                                Backup Contacts
                            </Text>
                        </SafeAreaView>
                        {/* </View> */}
                    </LinearGradient>
                    <View style={{ paddingHorizontal: 10, marginTop: 20 }}>
                        <View>
                            <Text style={styles.notes}>This function will create a backup of all the contacts from the Accounts you have selected in the Accounts menu below</Text>
                        </View>
                        <View style={styles.flatListHeadingView}>
                            <Text style={styles.flatListHeading}>Select Accounts to Copy</Text>
                        </View>
                        <FlatList
                            data={this.state.data}
                            renderItem={item => this.renderItem(item)}
                            keyExtractor={item => item.id.toString()}

                        />
                        <TouchableOpacity onPress={() => this.GenerateRandomNumber()} style={styles.continueButton}>

                            <View >
                                <Text style={{ color: "#fff" }}>Continue</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <DropdownAlert ref={ref => this.dropdown = ref} />
                </SafeAreaView>
            )
        } else {
            return (
                <ActivityIndicator visible={this.state.loader} color='#bc2b78'
                    size="large" style={styles.activityIndicator} />
            )
        }

    }
}
const styles = StyleSheet.create({
    linearGradient: {
        // height: 60
        ...Platform.select({
            android: {
                height: 80,
                paddingHorizontal: 10
            },
            ios: {
                height: 90,
                paddingHorizontal: 10
            }
        })
    },
    safeArea: {
        ...Platform.select({
            android: {
                paddingTop: 30
            },
        })
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
        fontSize: 12,
        color: "#F6921E",
    },
    flatListText: {
        fontSize: 12,
    },
    flatListContactsText: {
        fontSize: 10,
        color: "#666666"
    },
    flatListCountText: {
        fontSize: 14,
        color: "#F6921E"
    },
    socialLogin: {
        width: 26,
        height: 28
    },
    notes: {
        color: "#1B75BB",
        fontSize: 14,
        fontWeight: "300"
    },
    flatListHeading: {
        fontSize: 18,
        fontWeight: "500",
        color: "#1B75BB",
        textAlign: 'center'
    },
    flatListHeadingView: {
        marginVertical: 10
    },
    continueButton: {
        backgroundColor: '#F6921E',
        borderRadius: 10,
        alignItems: 'center',
        padding: 15,
        marginTop: 25
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    },
    renderItemStyle:{
        backgroundColor: '#F9F9F9', 
        flexDirection: 'row', 
        padding: 10, 
        borderRadius: 10, 
        alignItems: 'center', 
        marginVertical: 5
    }

});