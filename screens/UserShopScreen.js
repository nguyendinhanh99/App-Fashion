
import React, { useState } from "react";
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native'
import AppStyle from "../theme";
import TabView from "../component/TabView";
import LinearGradient from 'react-native-linear-gradient';
import images from "../assest/icons";


export default function UserShopScreen({ navigation }) {
    const [cartItems, setCartItems] = useState([]); // Đây là biến chứa danh sách sản phẩm

    return (
        <View style={AppStyle.UserShopScreenStyle.ScrollViewStyle}>
            <TabView />
            <View style={AppStyle.UserShopScreenStyle.cadView}>

                <View style={AppStyle.UserShopScreenStyle.cadViewStyle}>
                    <LinearGradient
                        colors={['#ce9efd', '#a786f8', '#7968f1']}
                        start={{ x: 0, y: 0 }}      // Điểm bắt đầu ở góc trái trên
                        end={{ x: 1, y: 1 }}        // Điểm kết thúc ở góc phải dưới
                        style={AppStyle.UserShopScreenStyle.cadViewStyle}
                    >
                        <View style={AppStyle.UserShopScreenStyle.cadUserIconView}>
                            <Image
                                source={images.MyImage}
                                style={AppStyle.UserShopScreenStyle.cardUserIconStyle}
                            />
                        </View>

                        <View style={AppStyle.UserShopScreenStyle.cadNameView}>
                            <Text style={AppStyle.UserShopScreenStyle.cadNameText}>
                                NiNo Card
                            </Text>
                        </View>
                        <View style={AppStyle.UserShopScreenStyle.cadUserNameView}>
                            <View>
                                <Text
                                    style={AppStyle.UserShopScreenStyle.cadUserNameText}
                                >
                                    NGUYEN DINH ANH
                                </Text>
                                <Text
                                    style={AppStyle.UserShopScreenStyle.cadUserIdText}
                                >
                                    ID: 0000000000
                                </Text>
                            </View>
                            <View style={AppStyle.UserShopScreenStyle.cardEditView}>
                                <TouchableOpacity
                                    ///// navigation
                                    style={AppStyle.UserShopScreenStyle.cardEditButtom}>
                                    <Text style={AppStyle.UserShopScreenStyle.cardEditButtomText}>
                                        Thay đổi
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </LinearGradient>
                </View>
            </View>
            <View style={AppStyle.UserShopScreenStyle.ScrollViewStyle}>
                <ScrollView>
                    <View style={AppStyle.UserShopScreenStyle.titleView}>
                        <Text style={AppStyle.UserShopScreenStyle.titleStyle}>
                            MY SHOP
                        </Text>
                    </View>

                    <View
                        style={AppStyle.UserShopScreenStyle.shopButtomView}
                    >
                        <TouchableOpacity
                            style={AppStyle.UserShopScreenStyle.shopButtomStyle}
                        >
                            <Image
                                source={images.StoreIcon}
                                style={AppStyle.UserShopScreenStyle.shopButtomImageStyle}
                            />
                            <Text
                                style={AppStyle.UserShopScreenStyle.shopButtomTextStyle}
                            >
                                Shop của bạn
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={AppStyle.UserShopScreenStyle.shopButtomStyle}
                            onPress={() => navigation.navigate('UserShopCart', { cartItems: cartItems })}
                            >
                            <Image
                                source={images.ShoppingIcon}
                                style={AppStyle.UserShopScreenStyle.shopButtomImageStyle}
                            />
                            <Text
                                style={AppStyle.UserShopScreenStyle.shopButtomTextStyle}
                            >
                                Giỏ hàng
                            </Text>
                        </TouchableOpacity>

                    </View>

                    <View
                        style={AppStyle.UserShopScreenStyle.shopButtomView}
                    >
                        <TouchableOpacity
                            style={AppStyle.UserShopScreenStyle.shopButtomStyle}
                        >
                            <Image
                                source={images.SettingIcon}
                                style={AppStyle.UserShopScreenStyle.shopButtomImageStyle}
                            />
                            <Text
                                style={AppStyle.UserShopScreenStyle.shopButtomTextStyle}
                            >
                                Cài đặt
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={AppStyle.UserShopScreenStyle.shopButtomStyle}
                        >
                            <Image
                                source={images.AddIcon}
                                style={AppStyle.UserShopScreenStyle.shopButtomImageStyle}
                            />
                            <Text
                                style={AppStyle.UserShopScreenStyle.shopButtomTextStyle}
                            >
                                Thêm
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}