import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import React from "react";

const profileCard = () => {
  return (
    <View>
      <ImageBackground
        style={styles.bg}
        source={{
          uri: "https://st4.depositphotos.com/10614052/25239/i/450/depositphotos_252391082-stock-photo-sweet-chocolate-cake-on-wooden.jpg",
        }}
        resizeMode="cover"
        blurRadius={30}
      >
        <View style={styles.bakerContainer}>
          <Image
            style={{
              width: "80%",
              height: 150,
              zIndex: 998,
              //   borderTopRightRadius: 10,
              //   borderTopLeftRadius: 10,
            }}
            source={{
              uri: "https://st4.depositphotos.com/10614052/25239/i/450/depositphotos_252391082-stock-photo-sweet-chocolate-cake-on-wooden.jpg",
            }}
          />
          <View style={styles.textContainer}>
            <Text>BMW</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default profileCard;

const styles = StyleSheet.create({
  bakerContainer: {
    elevation: 10,
    borderRadius: 10,
    zIndex: 999,
    width: 100,
    height: 180,
    backgroundColor: "rgba(255, 255, 255, 0.2)", 
  },
  bg: {
    //  opacity: 0.5
  },
  textContainer: {
    padding: 10,
  },
});
