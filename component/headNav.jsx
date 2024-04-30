import { StyleSheet, Text, View } from "react-native";
import { IconButton, MD3Colors } from "react-native-paper";
import React from "react";

const headNav = () => {
  return (
    <View>
      <View style={styles.homepage}>
        <View style={styles.homenav}>
          <Text style={styles.txt}>Connect Verse</Text>
          <View style={styles.icons}>
            <IconButton
              icon="plus"
              // iconColor={MD3Colors.error50}
              size={20}
              onPress={() => console.log("Pressed")}
            />
            <IconButton
              icon="camera"
              // iconColor={MD3Colors.error50}
              size={20}
              onPress={() => console.log("Pressed")}
            />
            <IconButton
              icon="message"
              // iconColor={MD3Colors.error50}
              size={20}
              onPress={() => console.log("Pressed")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default headNav;

const styles = StyleSheet.create({
  homepage: {
    marginTop: 30,
  },
  txt: {
    fontSize: 20,
    textAlign: "left",
    alignSelf: "center",
  },
  homenav: {
    display: "flex",
    flexDirection: "row",
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "65%",
  },
});
