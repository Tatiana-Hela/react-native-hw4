import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";

import { Feather } from "@expo/vector-icons";

const ProfileScreen = () => {
  return (
    <ImageBackground
      style={styles.image}
      source={require("../../assets/images/photo-bg2x.jpg")}
    >
      <View style={styles.wrapper}>
        <Feather
          style={styles.logout}
          name="log-out"
          size={24}
          color="#BDBDBD"
        />
        <View style={styles.imageWrapper}>
          <Image />
          <Image
            source={require("../../assets/delete-icon.png")}
            style={styles.deleteIcon}
          />
        </View>
        <View>
          <Text style={styles.name}>Natali Romanova</Text>
        </View>
      </View>
    </ImageBackground>
  );
};
export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "flex-end",
    // alignItems: "center",
  },
  wrapper: {
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
    marginTop: 119,
    height: 500,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  imageWrapper: {
    position: "absolute",
    left: "35%",
    top: "-15%",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  deleteIcon: {
    position: "absolute",
    left: "90%",
    top: "65%",
    width: 25,
    height: 25,
  },
  name: {
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    marginTop: 92,
    color: "#212121",
  },
  logout: {
    width: 24,
    height: 24,
  },
});
