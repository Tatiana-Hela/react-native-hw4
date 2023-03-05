import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RegistrationScreens from "./Screens/auth/RegistrationScreen";
import LoginScreen from "./Screens/auth/LoginScreen";

import PostsScreen from "./Screens/mainScreen/PostsScreen";
import CreatePostsScreen from "./Screens/mainScreen/CreatePostsScreen";
import ProfileScreen from "./Screens/mainScreen/ProfileScreen";
// import Home from "./Screens/mainScreen/Home";

///icons
import { Feather } from "@expo/vector-icons";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
  console.log(isAuth);
  if (!isAuth) {
    return (
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
    );
  }
  return (
    <MainTab.Navigator
      initialRouteName="Posts"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 83,
          display: "flex",
          gap: 30,
          paddingHorizontal: 80,
        },
      }}
    >
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="grid" size={size} color={color} />
          ),
          tabBarActiveTintColor: "#BDBDBD",
          title: "Публикации",
          headerRight: () => (
            <Feather name="log-out" size={24} color="#BDBDBD" />
          ),
        }}
        name="Posts"
        component={PostsScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="plus" size={size} color={color} />
          ),
          tabBarActiveBackgroundColor: "#FF6C00",
          tabBarActiveTintColor: "#FFFFFF",
          title: "Создать публикацию",
        }}
        name="Create"
        component={CreatePostsScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
          tabBarActiveBackgroundColor: "#FF6C00",
          tabBarActiveTintColor: "#FFFFFF",
          headerShown: false,
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};
