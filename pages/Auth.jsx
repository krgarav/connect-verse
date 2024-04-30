import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Keyboard,
  Dimensions,
  ImageBackground,
  Image,
} from "react-native";
import React, { useRef } from "react";
import { Button as Btn } from "react-native-paper";

const Auth = ({ navigation }) => {
  const passwordInputRef = useRef(null);
  const handleEmailOrMobileSubmit = () => {
    passwordInputRef.current.focus();
  };

  const LoginHandler = () => {
    navigation.navigate("homepage");
  };
  const screenHeight = Dimensions.get("window").height;
  const iconHeight = screenHeight * 0.3;
  const formHeight = (screenHeight - iconHeight) * 0.6;
  const footerHeight = screenHeight - iconHeight - formHeight;
  return (
    <View style={styles.headContainer}>
      <ImageBackground source={require("../assets/bg.jpg")}>
        <View style={[styles.iconContainer, { height: iconHeight }]}>
          <Image source={require("../assets/logo.png")} />
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
          <Btn onPress={LoginHandler} mode="contained" buttonColor="blue">
            Log In
          </Btn>

          <Btn textColor="white">Forgotten Password?</Btn>
        </View>
        <View style={[styles.footerContainer, { height: footerHeight }]}>
          <Btn mode="outlined">Create new account</Btn>
          <Text style={styles.headtext}>Connect Verse</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Auth;

const styles = StyleSheet.create({
  headContainer: {
    flex: 1,
    justifyContent: "top",
    // marginLeft: 5,
    // marginRight: 5,
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
    justifyContent: "center",
    alignSelf: "center",
  },
  headtext: {
    textAlign: "center",
    fontSize: 20,
    color: "blue",
    fontWeight: "700",
    margin: 10,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    width: "100%",
    height: "40",
    margin: 2,
    padding: 10,
    marginTop: 6,
    marginBottom: 6,
    borderRadius: 8,
    color: "ivory",
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
