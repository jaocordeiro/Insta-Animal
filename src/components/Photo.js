import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Photo = ({ file, count }) => {
  const [like, setLike] = useState(count);

  const increment = () => {
    setLike (like + 1);
  }
  
  return (
    <View style = {styles.container}>
      <Image style = {styles.image} source = {file} />

      <Text style = {styles.text}> </Text>
      <TouchableOpacity onPress = {increment}>
        <Text style = {styles.like}> {like} <strong>Likes</strong> </Text>
      </TouchableOpacity> 

    </View>   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eaeaea",
  },
  text: {
    fontSize: 20,
  },
  image: {
    marginTop: 20,
    borderRadius: 100,
    height: 200,
    width: 200,
  },
  like: {
    color: "#000000",
  }
});

export default Photo;