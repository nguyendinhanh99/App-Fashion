import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/homeSceen';
import NoteScreen from '../screens/noteScreen';
import SizeShoesScreen from '../screens/SizeShoesScreen';
import AIFashionScreen from '../screens/AIFashionScreen';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{ headerShown: false }} name="Tính Phần Trăm" component={HomeScreen} />
      <Tab.Screen options={{ headerShown: false }}  name="Fashion AI" component={AIFashionScreen} />
      <Tab.Screen options={{ headerShown: false }}  name="Ghi Chú" component={NoteScreen} />
      <Tab.Screen options={{ headerShown: false }}  name="Cỡ Giày" component={SizeShoesScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}