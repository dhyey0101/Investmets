import React, { Component } from "react";
import { StatusBar,View, Text, StyleSheet, SafeAreaView, TextInput, Image, TouchableOpacity, Platform, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export default class Tools extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: "1",
                    image: require("../../../assets/Copy.png"),
                    title: "Copy",
                    text: "Copy selected contacts to you’re a specific circle and group on you MCB Account"
                },
                {
                    id: "2",
                    image: require("../../../assets/Backup.png"),
                    title: "Backup",
                    text: "Backup selected contacts to a file, save or email to yourself"
                },
                {
                    id: "3",
                    image: require("../../../assets/Sync.png"),
                    title: "Sync",
                    text: "Sync the contacts in your MCB Account to your other account"
                },
                {
                    id: "4",
                    image: require("../../../assets/Delete.png"),
                    title: "Delete",
                    text: "Delete selected contacts in any account"
                },
                {
                    id: "5",
                    image: require("../../../assets/Clean.png"),
                    title: "Clean",
                    text: "Find and merge or delete duplicates, delete contacts with no data"
                }
            ]
        }
    }

    Nav(title){
        if(title === "Copy"){
            this.props.navigation.navigate("CopyContactToMCB")
        }else if(title === "Backup"){
            // this.props.navigation.navigate("BackupContacts")
            this.props.navigation.navigate("ContactToMCB")
        }else{

        }
    }
    
    renderItem(item) {
        return (
            <TouchableOpacity onPress={() => this.Nav(item.item.title)}
                style={{ backgroundColor: '#F9F9F9', flexDirection: 'row', padding: 10, borderRadius: 10, alignItems: 'center', marginVertical: 5 }}>
                
                <View>
                    <Image source={item.item.image} style={styles.socialLogin} />
                    {/* <Image source={require("../../../assets/Copy.png")} style={styles.socialLogin} /> */}
                </View>
                <View style={{ paddingHorizontal: 10 }}>
                    <Text style={styles.flatListTitle}>{item.item.title}</Text>
                    <Text style={styles.flatListText}>{item.item.text}</Text>
                </View>
            </TouchableOpacity>
        )
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
                        <Text style={{ fontSize: 24, color: "#fff" }}>
                            Tools
                        </Text>
                    </SafeAreaView>
                    {/* </View> */}
                </LinearGradient>
                <View style={{ paddingHorizontal: 10, marginTop: 20 }}>
                    <FlatList
                        data={this.state.data}
                        renderItem={item => this.renderItem(item)}
                        keyExtractor={item => item.id.toString()}

                    />
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

});