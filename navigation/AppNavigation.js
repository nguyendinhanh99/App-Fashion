import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider, useSelector } from 'react-redux'; // Thêm useSelector vào đây
import store from '../redux';
import HomeScreen from '../screens/homeSceen';
import NoteScreen from '../screens/noteScreen';
import SizeShoesScreen from '../screens/SizeShoesScreen';
import AIFashionScreen from '../screens/AIFashionScreen';
import MyShopScreen from '../screens/myShopScreen';
import CalculateScreen from '../screens/calculateScreen';
import FeatureScreen from '../screens/featureScreen';
import UserShopScreen from '../screens/UserShopScreen';
import CartScreen from '../screens/CartScreen';
import ProductDetailScreen from '../screens/productDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tính Phần Trăm" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="UserShopCart" component={CartScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Fashion AI" component={AIFashionScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ headerShown: false }} />

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

function cartStack() {
  return (
    <Stack.Navigator initialRouteName='userShop'>
      <Stack.Screen name="UserShopCart" component={CartScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

function MyTabs() {
  const cartItemsLength = useSelector(state => state.cart.cartItems.length);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="AIFashion"
        component={AIFashionStack}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Tính năng"
        component={FeatureStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Giỏ Hàng"
        component={CartScreen}
        options={{
          headerShown: false,
          tabBarBadge: cartItemsLength,
        }}
      />
      <Tab.Screen
        name="Tôi"
        component={UserShopStack}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </Provider>
  );
}
