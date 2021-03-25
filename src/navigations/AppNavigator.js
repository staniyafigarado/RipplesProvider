import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { Text, View, Dimensions, TextInput, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// Screens
import BasicScreen from '../screens/BasicScreen';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
const Stack = createStackNavigator();
const MainNavigation = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    gestureEnabled: true,
                    gestureDirection: 'horizontal',
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }}
                initialRouteName="Login">
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false, animationEnabled: false }}
                />
                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                    options={{ headerShown: false, animationEnabled: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default MainNavigation;