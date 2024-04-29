import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Keyboard,
  Dimensions,
} from "react-native";
import React, { useRef } from "react";
import { Button as Btn } from "react-native-paper";

const Auth = () => {
  const passwordInputRef = useRef(null);
  const handleEmailOrMobileSubmit = () => {
    passwordInputRef.current.focus();
  };
  const focusPasswordInput = () => {
    // Explicitly show the keyboard and focus on the password input
    Keyboard.dismiss();
    setTimeout(() => passwordInputRef.current.focus(), 100); // Adding a small delay to ensure keyboard is closed before focusing
  };
  const screenHeight = Dimensions.get("window").height;
  const iconHeight = screenHeight * 0.3;
  const formHeight = (screenHeight - iconHeight) * 0.6;
  const footerHeight = screenHeight - iconHeight - formHeight;
  return (
    <View style={styles.headContainer}>
   
      <View style={[styles.iconContainer, { height: iconHeight }]}>
        <Text>English</Text>
      </View>
      <View style={[styles.formContainer, { height: formHeight }]}>
        <TextInput
          placeholder="Mobile number or email address"
          returnKeyType="next"
          onSubmitEditing={handleEmailOrMobileSubmit}
          style={styles.input}
          onFocus={Keyboard.isVisible}
          onBlur={Keyboard.isVisible}
        />
        <TextInput
          placeholder="Password"
          ref={passwordInputRef}
          style={styles.input}
        />
        <Text style={{ height: 8 }}></Text>
        <Btn mode="contained" buttonColor="blue">
          Log In
        </Btn>

        <Btn>Forgotten Password?</Btn>
      </View>
      <View style={[styles.footerContainer, { height: footerHeight }]}>
        <Btn mode="outlined">Create new account</Btn>
        <Text style={styles.headtext}>Connect Verse</Text>
      </View>
      {/* </LinearGradient> */}
    </View>
  );
};

export default Auth;

const styles = StyleSheet.create({
  headContainer: {
    flex: 1,
    justifyContent: "top",
    marginLeft: 5,
    marginRight: 5,
  },
  gradient: {
    flex: 1,
    justifyContent: "center", // Adjust as needed
    alignItems: "center", // Adjust as needed
  },
  formContainer: {
    alignSelf: "center",
    width: "95%",
  },
  iconContainer: {
    // height : "20vh"
    height: 100,
  },
  headtext: {
    textAlign: "center",
    fontSize: 20,
    color: "blue",
    fontWeight: "700",
    margin: 10,
  },
  input: {
    backgroundColor: "#C5C6D0",
    width: "100%",
    height: "40",
    margin: 2,
    padding: 10,
    marginTop: 6,
    marginBottom: 6,
    borderRadius: 8,
  },
  divider1: {
    width: "45%",
    alignSelf: "center",
    height: 1,
  },
  divider2: {
    width: "45%",
    alignSelf: "center",
    // backgroundColor: "black",
    height: 1,
  },
  dividerContainer: {
    display: "flex",
    flexDirection: "row",
  },
  footerContainer: {
    borderColor: "black",
    justifyContent: "flex-end",
    margin: 10,
    paddingBottom: 30,
  },
});
