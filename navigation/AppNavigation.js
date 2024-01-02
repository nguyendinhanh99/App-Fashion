import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/homeSceen';
import NoteScreen from '../screens/noteScreen';
import SizeShoesScreen from '../screens/SizeShoesScreen';
import AIFashionScreen from '../screens/AIFashionScreen';
import MyShopScreen from '../screens/myShopScreen';
import CalculateScreen from '../screens/calculateScreen';
import FeatureScreen from '../screens/featureScreen';
import UserShopScreen from '../screens/UserShopScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tính Phần Trăm" component={HomeScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function AIFashionStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Fashion AI" component={AIFashionScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function FeatureStack() {
  return (
    <Stack.Navigator initialRouteName='feature'>
      <Stack.Screen name="feature" component={FeatureScreen} options={{ headerShown: false }} />
      <Stack.Screen name="sizeShoes" component={SizeShoesScreen} options={{ headerShown: false }} />
      <Stack.Screen name="note" component={NoteScreen} options={{ headerShown: false }} />
      <Stack.Screen name="calculate" component={CalculateScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
function UserShopStack() {
  return (
    <Stack.Navigator initialRouteName='userShop'>
    <Stack.Screen name="userShop" component={UserShopScreen} options={{ headerShown: false }} />
    <Stack.Screen name="myShop" component={MyShopScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
  )
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{ headerShown: false }} name="Home" component={HomeStack} />
      <Tab.Screen options={{ headerShown: false }} name="AIFashion" component={AIFashionStack} />
      <Tab.Screen options={{ headerShown: false }} name="Tính năng" component={FeatureStack} />
      <Tab.Screen options={{ headerShown: false }} name="Tôi" component={UserShopStack} />
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
