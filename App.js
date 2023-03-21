import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import useRoute from "./router.js";

export default function App() {
  const routing = useRoute({});

  return (
    <SafeAreaProvider>
      <NavigationContainer>{routing}</NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
