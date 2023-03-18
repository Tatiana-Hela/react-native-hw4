import React from "react";
import {} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import DefaultScreenPosts from "./nestedScreens/DefaultScreenPosts";
import CommentsScreen from "./nestedScreens/CommentsScreen";
import MapScreen from "./nestedScreens/MapScreen";
import { Feather } from "@expo/vector-icons";

const NestedScreen = createStackNavigator();

const PostsScreen = () => {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        options={{
          title: "Публикации",
          headerRight: () => (
            <Feather name="log-out" size={24} color="#BDBDBD" />
          ),
        }}
        name="DefaultScreen"
        component={DefaultScreenPosts}
      />
      <NestedScreen.Screen name="Comments" component={CommentsScreen} />
      <NestedScreen.Screen name="Map" component={MapScreen} />
    </NestedScreen.Navigator>
  );
};

export default PostsScreen;
