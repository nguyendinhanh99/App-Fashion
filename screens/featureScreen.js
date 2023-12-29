import React, { useState, useRef } from 'react';
import { Text, View, TextInput, TouchableOpacity, Keyboard, FlatList, ScrollView, Image } from 'react-native';
import AppStyle from '../theme';
import TabView from '../component/TabView';
import images from '../assest/icons';
import LinearGradient from 'react-native-linear-gradient';
import GoBackButtonView from '../component/GoBackButtomView';
export default function FeatureScreen({ navigation }) {
    return (
        <View style={AppStyle.FeaturScreenStyle.container}>

            <View style={AppStyle.FeaturScreenStyle.backGroundView}>
                <TabView />
                <View style={AppStyle.FeaturScreenStyle.TitleView}>
                    <Text style={AppStyle.FeaturScreenStyle.TitleStyle}>
                        Tính năng nhanh
                    </Text>
                </View>
                <View style={AppStyle.FeaturScreenStyle.IconBackgroundView}>
                    <Image
                        source={images.RocketIcon}
                        style={AppStyle.FeaturScreenStyle.IconBackground}
                    />
                </View>
            </View>
            <View style={AppStyle.FeaturScreenStyle.bodyView}>
                <ScrollView>
                    <TouchableOpacity
                        style={AppStyle.FeaturScreenStyle.shadowStyle}
                        onPress={() => navigation.navigate("calculate")}
                        >

                        <LinearGradient
                            colors={['#06969e', '#6cc5cb', '#FFDAB9']}
                            start={{ x: 0, y: 0 }}      // Điểm bắt đầu ở góc trái trên
                            end={{ x: 1, y: 1 }}        // Điểm kết thúc ở góc phải dưới
                            style={AppStyle.FeaturScreenStyle.CalculateView}
                        >
                            <View style={AppStyle.FeaturScreenStyle.CalculateTitle}>
                                <Text style={AppStyle.FeaturScreenStyle.TitleButtomStyle}>
                                    Tính Toán Nhanh
                                </Text>
                                <Text style={AppStyle.FeaturScreenStyle.DescriptionStyle}>
                                    Tính phần trăm một cách nhanh chóng và hiệu quả.
                                </Text>
                            </View>
                            <View style={AppStyle.FeaturScreenStyle.CalculateIcon}>
                                <Image
                                    source={images.CalculateIcon}
                                    style={AppStyle.FeaturScreenStyle.iconStyle}
                                />
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>

                    <View style = {AppStyle.FeaturScreenStyle.smallButtomView}>
                        <TouchableOpacity
                        onPress={() => navigation.navigate("sizeShoes")}
                        style = {AppStyle.FeaturScreenStyle.smallButtomView1}
                        >
                        <LinearGradient
                            colors={['#85e2cd', '#85e2cd', '#d0e6a5']}
                            start={{ x: 0, y: 0 }}      // Điểm bắt đầu ở góc trái trên
                            end={{ x: 1, y: 1 }}        // Điểm kết thúc ở góc phải dưới
                            style={AppStyle.FeaturScreenStyle.CalculateView}
                        >
                            <View style={AppStyle.FeaturScreenStyle.CalculateTitle}>
                                <Text style={AppStyle.FeaturScreenStyle.TitleButtomStyle}>
                                    Tìm Size
                                </Text>
                                <Text style={AppStyle.FeaturScreenStyle.DescriptionStyle}>
                                    Tìm Size giày
                                </Text>
                            </View>
                            <View style={AppStyle.FeaturScreenStyle.CalculateIcon}>
                                <Image
                                    source={images.SizeIcon}
                                    style={AppStyle.FeaturScreenStyle.smallIconStyle}
                                />
                            </View>
                        </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity
                        style = {AppStyle.FeaturScreenStyle.smallButtomView2}
                        onPress={() => navigation.navigate("note")}
                        >
                        <LinearGradient
                             colors={['#85e2cd', '#85e2cd', '#d0e6a5']}
                            start={{ x: 0, y: 0 }}      // Điểm bắt đầu ở góc trái trên
                            end={{ x: 1, y: 1 }}        // Điểm kết thúc ở góc phải dưới
                            style={AppStyle.FeaturScreenStyle.CalculateView}
                        >
                            <View style={AppStyle.FeaturScreenStyle.CalculateTitle}>
                                <Text style={AppStyle.FeaturScreenStyle.TitleButtomStyle}>
                                    Ghi chú
                                </Text>
                                <Text style={AppStyle.FeaturScreenStyle.DescriptionStyle}>
                                    Ghi chú nhanh
                                </Text>
                            </View>
                            <View style={AppStyle.FeaturScreenStyle.CalculateIcon}>
                                <Image
                                    source={images.NoteIcon}
                                    style={AppStyle.FeaturScreenStyle.smallIconStyle}
                                />
                            </View>
                        </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}
