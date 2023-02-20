import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import RegistrationScreens from "./Screens/auth/RegistrationScreen";
import LoginScreen from "./Screens/auth/LoginScreen";

const AuthStack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <AuthStack.Navigator>
          <AuthStack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={LoginScreen}
          />
          <AuthStack.Screen
            options={{ headerShown: false }}
            name="Registration"
            component={RegistrationScreens}
          />
        </AuthStack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
