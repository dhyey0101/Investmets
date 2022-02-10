import React, { Component } from "react";
import { StatusBar, View, Text, StyleSheet, SafeAreaView, TextInput, Image, TouchableOpacity, Platform, Modal } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import DropDownPicker from 'react-native-dropdown-picker';


export default class CopyContactToMCB_2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            open: false,
            value: null,
            types: [
                { label: 'vCard Format', value: 0 },
                { label: '.csv Format', value: 1 }
            ],
            data: [
                {
                    label: "Social",
                    value: "Social"
                },
                {
                    label: "Facebook",
                    value: "Facebook"
                }
            ]
        }
    }
    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    setOpen(open) {
        this.setState({
            open
        });
    }

    setValue(callback) {
        this.setState({
            value: callback
        });
    }

    setItems(callback) {
        this.setState({
            items: callback
        });
    }

    render() {
        const { modalVisible } = this.state;

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
                                Copy Contacts to MCB
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
                        <Text style={styles.title}>Choose MCB Circle</Text>
                    </View>
                    <DropDownPicker
                        style={{
                            backgroundColor: "#F9F9F9",
                            marginTop: 10,
                            marginBottom: 20,
                            borderWidth: 0
                        }}
                        // open={this.state.open}
                        placeholder={"Choose Group"}
                        placeholderStyle={{ color: "#8A8A8A" }}
                        value={this.state.value}
                        items={this.state.data}
                    // setOpen={this.setOpen()}
                    // setValue={this.setValue()}
                    // setItems={this.setItems()}
                    />
                    <View>
                        <Text style={styles.title}>Choose MCB Circle</Text>
                    </View>
                    <DropDownPicker
                        style={{
                            backgroundColor: "#F9F9F9",
                            marginTop: 10,
                            borderWidth: 0
                        }}
                        placeholder={"Choose Group"}
                        placeholderStyle={{ color: "#8A8A8A" }}
                        // open={this.state.open}
                        value={this.state.value}
                        items={this.state.data}
                    // setOpen={this.setOpen()}
                    // setValue={this.setValue()}
                    // setItems={this.setItems()}
                    />


                </View>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        this.setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View>
                                <Image source={require("../../../assets/Done.png")} style={{ width: 60, height: 60 }} />
                            </View>
                            <Text style={styles.modalText}>The contacts from the Accounts you selected have been Successfully copies to your MCB Account</Text>
                            <View style={{ backgroundColor: 'rgba(40, 180, 70, 0.1)', paddingHorizontal: 30, paddingVertical: 10, borderRadius: 5, justifyContent: 'space-between', alignItems: 'center' }}>
                                <View>
                                    <Text style={{ fontSize: 12, fontWeight: "500" }}>Number of Contacts Copied</Text>
                                </View>
                                <View style={{ marginTop: 10 }}>
                                    <Text style={{ color: "#28B446", fontSize: 20, fontWeight: "600" }}>279</Text>
                                </View>
                            </View>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => this.setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>


                <View style={{ flex: 1, justifyContent: "flex-end", paddingHorizontal: "2%", marginBottom: 5 }}>
                    <TouchableOpacity onPress={() => this.setState({ modalVisible: true })} style={styles.continueButton}>
                        <View >
                            <Text style={{ color: "#fff" }}>Continue</Text>
                        </View>
                    </TouchableOpacity>
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
    title: {
        fontSize: 14,
        fontWeight: "500"
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
    continueButton: {
        backgroundColor: '#F6921E',
        borderRadius: 10,
        alignItems: 'center',
        padding: 15,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)"
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
        marginTop: 15
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginVertical: 15,
        textAlign: "center"
    }
});