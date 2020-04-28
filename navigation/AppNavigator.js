import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import SettingScreen from "../screens/SettingScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createStackNavigator();

export default AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ホーム"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="設定" component={SettingScreen} />
        <Stack.Screen name="ログイン" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
