import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileCard from "./profileCard";
const homemenu = () => {
  return (
    <View>
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.bakerContainer}
        showsHorizontalScrollIndicator={false}
      >
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </ScrollView>
    </View>
  );
};

export default homemenu;

const styles = StyleSheet.create({
  bakerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    overflow: "scroll",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 10,
  },
});
