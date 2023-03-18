import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import useRouteNav from "./router.js";

export default function App() {
  const routing = useRouteNav({});

  return (
    <SafeAreaProvider>
      <NavigationContainer>{routing}</NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
