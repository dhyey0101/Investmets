import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screens/Auth/Login";
import Signup from "./src/screens/Auth/Signup";
import Tools from "./src/screens/App/Tools";
import ContactToMCB from "./src/screens/App/ContactToMCB";
import CopyContactToMCB from "./src/screens/App/CopyContactToMCB";
import BackupContacts from "./src/screens/App/BackupContacts"
import SplashScreen from 'react-native-splash-screen';
import CopyContactToMCB_2 from './src/screens/App/CopyContactToMCB_2';
const Stack = createNativeStackNavigator();


class MyStack extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen
            name="Login"
            component={Login}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
          />
          <Stack.Screen
            name="Tools"
            component={Tools}
          />
          <Stack.Screen
            name="ContactToMCB"
            component={ContactToMCB}
          />
          <Stack.Screen
            name="CopyContactToMCB"
            component={CopyContactToMCB}
          />
          <Stack.Screen
            name="CopyContactToMCB_2"
            component={CopyContactToMCB_2}
          />
          <Stack.Screen
            name="BackupContacts"
            component={BackupContacts}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
export default MyStack;