import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
} from "react-native";
import { Camera } from "expo-camera";
// import * as Permissions from "expo-permissions";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const CreatePostsScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState("");
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [permissionStatus, setPermissionStatus] = useState(null);

  const handleCameraReady = () => {
    setIsCameraReady(true);
  };
  // const handleMountError = (error) => {
  //   console.error("Failed to mount camera", error);
  // };
  const takePhoto = async () => {
    if (camera && isCameraReady) {
      // console.log("taking picture");
      try {
        const photo = await camera.takePictureAsync();
        console.log("photo", photo.uri);
        setPhoto(photo.uri);
      } catch (error) {
        console.error("Failed to take photo", error);
      }
    } else {
      console.log("Camera is not ready yet");
    }
  };

  const sendPhoto = () => {
    console.log("navigation", navigation);
    navigation.navigate("Posts", { photo });
  };

  useEffect(() => {
    const getPermissionStatus = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setPermissionStatus(status);
    };
    getPermissionStatus();
  }, []);

  if (!permissionStatus) {
    return <View />;
  }

  if (permissionStatus !== "granted") {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera
        type={type}
        style={styles.camera}
        ref={(ref) => setCamera(ref)}
        onCameraReady={handleCameraReady}
        // onMountError={handleMountError}
      >
        {photo && (
          <View style={styles.takePhotoContainer}>
            <Image
              source={{ uri: photo }}
              style={{ height: 100, width: 100 }}
            />
          </View>
        )}
        <TouchableOpacity style={styles.cameraBtn} onPress={takePhoto}>
          <FontAwesome name="camera" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </Camera>
      <Text style={styles.text}>Загрузите фото</Text>
      <View>
        <TextInput style={styles.input} placeholder="Название..." />
        <View style={styles.inputMap}>
          <Feather
            name="map-pin"
            size={24}
            color="#BDBDBD"
            style={styles.mapIcon}
          />
          <TextInput style={styles.input} placeholder="Местность..." />
        </View>
        <TouchableOpacity style={styles.button} onPress={sendPhoto}>
          <Text style={styles.textButton}>Опубликовать</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CreatePostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
  },
  camera: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
    height: 240,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  cameraBtn: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    backgroundColor: "#FFFFFF",
    borderRadius: "50%",
  },
  takePhotoContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 8,
  },
  text: {
    marginTop: 8,
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  input: {
    fontSize: 16,
    lineHeight: 19,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
  button: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    height: 51,
    marginTop: 43,
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: "#FFFFFF",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
  },
});
