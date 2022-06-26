import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import HomeScreen from "./screens/HomeScreen";
import PlayList from "./screens/PlayList";
import UserScreen from "./screens/UserScreen";
import MusicPlayer from "./screens/MusicPlayer";

//Screen names
const homeName = "Home";
const playList = "PlayList";
const userName = "User";
const musicPlayer = "Music";

const Tab = createBottomTabNavigator();

export default class MainContainer extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={homeName}
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let rn = route.name;

              if (rn === homeName) {
                iconName = focused ? "home" : "home-outline";
              } else if (rn === playList) {
                iconName = focused ? "list" : "list-outline";
              } else if (rn === userName) {
                iconName = focused ? "person" : "person-outline";
              }
              else if (rn === musicPlayer) {
                iconName = focused ? "musical-notes" : "musical-notes-outline";
              }
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "#55BCF6",
            inactiveTintColor: "grey",
            labelStyle: { paddingBottom: 10, fontSize: 10 },
            style: { padding: 10, height: 70 },
          }}
        >
          <Tab.Screen name={homeName} component={HomeScreen} />
          <Tab.Screen name={playList} component={PlayList} />
          <Tab.Screen name={userName} component={UserScreen} />
          <Tab.Screen name={musicPlayer} component={MusicPlayer} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}