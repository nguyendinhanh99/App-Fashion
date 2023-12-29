import React, { useState, useRef } from 'react';
import { Text, View, TextInput, TouchableOpacity, Keyboard, FlatList } from 'react-native';
import AppStyle from '../theme';
import TabView from '../component/TabView';

export default function HomeScreen() {
    return (
        <View>
            <TabView/>
            <Text>
                home 
            </Text>
        </View>
    )
}
