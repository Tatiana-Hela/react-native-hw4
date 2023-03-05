import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { View, Text, StyleSheet, FlatList } from "react-native";

const PostsScreen = ({ route }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  console.log(posts);
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, indx) => indx.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              marginBottom: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: item.photo }}
              style={{ width: 350, height: 200 }}
            />
          </View>
        )}
      />
    </View>
  );
};
export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
});
