import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { IconButton, MD3Colors } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Icon from "react-native-vector-icons/Feather";
import Micon from "react-native-vector-icons/MaterialIcons";
import IoIcon from "react-native-vector-icons/Ionicons";
import Icons from "react-native-vector-icons/Foundation";
import HeadNav from "../component/headNav";
import Homemenu from "../component/homemenu";
const Tab = createMaterialTopTabNavigator();

const Screen1 = () => <Homemenu />;
const Screen2 = () => <Text>Screen 2</Text>;
const Screen3 = () => <Text>Screen3</Text>;
const Screen4 = () => <Text>Screen4</Text>;
const Screen5 = () => <Text>Screen5</Text>;
const Homepage = () => {
  return (
    <NavigationContainer independent={true}>
      {/* <View style={{display:"none"}}> */}
      <HeadNav />
      {/* </View> */}
      <Tab.Navigator
        tabBarOptions={{
          style: { backgroundColor: "#fff" },
          labelStyle: { fontWeight: "bold" },
          indicatorStyle: { backgroundColor: "blue" },
        }}
      >
        <Tab.Screen
          name="Screen 1"
          component={Screen1}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Icon name="home" size={25} color={focused && "blue"} /> // Example icon for Screen 1
            ),
            tabBarShowLabel: false,
          }}
        />

        <Tab.Screen
          name="Screen 2"
          component={Screen2}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Micon
                name="ondemand-video"
                size={25}
                color={focused && "blue"}
              /> // Example icon for Screen 1
            ),
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Screen 3"
          component={Screen3}
          options={({ route }) => ({
            tabBarIcon: ({ color, size, focused }) => (
              <IoIcon
                name="people-outline"
                size={25}
                color={focused && "blue"}
              />
            ),
            tabBarShowLabel: false,
          })}
        />
        <Tab.Screen
          name="Screen 4"
          component={Screen4}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Icon name="bell" size={25} color={focused && "blue"} /> // Example icon for Screen 1
            ),
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Screen 5"
          component={Screen5}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Icon name="home" size={25} color={focused && "blue"} /> // Example icon for Screen 1
            ),
            tabBarShowLabel: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Homepage;

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
</View>;
