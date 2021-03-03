import React from "react"
import { Text, StyleSheet, } from "react-native";


const Logo = ({ file }) => {
  return <Text style = {styles.logo}><strong>Insta Animal</strong></Text>
};


const styles = StyleSheet.create ({
  logo: {
    alignSelf: "center",
    marginVertical: 20,
    fontSize: 25,
    color: "#483D8B",
    
  },
});

export default Logo;

