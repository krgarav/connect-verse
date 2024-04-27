import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const Auth = () => {
  return (
    <View>
      <Text style={styles.headtext}>connect verse</Text>
      <Text></Text>
      <TextInput
        placeholder="Mobile number or email address"
        style={styles.input}
      />

      <TextInput placeholder="Password" style={styles.input} />
    </View>
  );
};

export default Auth;

const styles = StyleSheet.create({
  headtext: {
    margin: 60,
    fontSize: 30,
  },
  input: {
    backgroundColor: "#C5C6D0",
    width: "80%",
    height: "40",
    margin: 2,
  },
});
