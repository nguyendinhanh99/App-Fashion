import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList
} from "react-native";
import AppStyle from "../theme";
import TabView from "../component/TabView";
import LinearGradient from 'react-native-linear-gradient';
import userInfoDatas from '../config/userInfoData';
import images from "../assest/icons";
import { useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';

export default function PayScreen() {
    const user = userInfoDatas[0];
    const route = useRoute();
    const { checkedItems } = route.params || {};
    const [selectedProductText, setSelectedProductText] = useState('');
    const cartItems = useSelector(state => state.cart.cartItems);

    useEffect(() => {
        console.log('Cart Items:', cartItems);

        if (checkedItems && typeof checkedItems === 'object') {
            const selectedProducts = Object.entries(checkedItems)
                .filter(([itemId, isChecked]) => isChecked)
                .map(([itemId]) => {
                    const selectedItem = cartItems.find(item => item.id === parseInt(itemId));

                    return selectedItem ? `${selectedItem.id} - ${selectedItem.productName}` : '';
                });

            const textToShow = selectedProducts.length > 0 ? `Sản phẩm đã chọn: ${selectedProducts.join(', ')}` : 'Không có sản phẩm được chọn';
            setSelectedProductText(textToShow);
        }
    }, [checkedItems, cartItems]);

    const calculateTotalAmount = () => {
        let totalAmount = 0;
    
        cartItems.forEach(item => {
            if (checkedItems[item.id]) {
                // Chuyển đổi giá bán lẻ từ chuỗi sang số và thêm vào tổng
                totalAmount += parseInt(item.retailPrice.replace(/\D/g, ''), 10);
            }
        });
    
        // Sử dụng Intl.NumberFormat để định dạng số thành chuỗi theo định dạng mong muốn
        const formattedTotalAmount = new Intl.NumberFormat('vi-VN').format(totalAmount);
    
        return formattedTotalAmount;
    };
    
    

    return (
        <View style={AppStyle.PayScreenStyle.container}>
            <TabView />
            <View style={AppStyle.PayScreenStyle.CardView}>
                <LinearGradient
                    colors={['#ce9efd', '#a786f8', '#7968f1']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={AppStyle.PayScreenStyle.CardFlexView}
                >
                    <View style={AppStyle.PayScreenStyle.userImage}>
                        <Image
                            style={AppStyle.PayScreenStyle.userImageStyle}
                            source={user ? user.image : null}
                        />
                    </View>
                    <View style={AppStyle.PayScreenStyle.cardLogoView}>
                        <Text style={AppStyle.PayScreenStyle.cardNameText}>
                            NiNo Card
                        </Text>
                    </View>
                    <View style={AppStyle.PayScreenStyle.userInfoView}>
                        <View style={AppStyle.PayScreenStyle.userInfoViewStyle}>
                            <View style={AppStyle.PayScreenStyle.userInfoNameView}>
                                <Text style={AppStyle.PayScreenStyle.userInfoNameText}>
                                    {user ? user.userName : ''}
                                </Text>
                                <Text style={AppStyle.PayScreenStyle.userInfoNameIDText}>
                                    {user ? `ID: ${user.id}` : ''}
                                </Text>
                            </View>
                            <View style={AppStyle.PayScreenStyle.userInfoEditButtomView}>
                                <TouchableOpacity
                                    style={AppStyle.PayScreenStyle.userInfoEditButtomViewStyle}
                                >
                                    <Text style={AppStyle.PayScreenStyle.userInfoEditButtomTextStyle}>
                                        Chỉnh sửa
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </LinearGradient>
            </View>
            <View style={AppStyle.PayScreenStyle.infoBuyView}>
                <View style={AppStyle.PayScreenStyle.infoBuyBodyStyle}>
                    <View style={AppStyle.PayScreenStyle.infoBuyBodyTitleView}>
                        <Image
                            source={images.MapIcon}
                            style={AppStyle.PayScreenStyle.mapIconStyle}
                        />
                        <Text style={AppStyle.PayScreenStyle.infoBuyBodyTitleText}>
                            Địa chỉ nhận hàng
                        </Text>

                    </View>
                    <View style={AppStyle.PayScreenStyle.infoBuyBodyAddView}>
                        <Text style={AppStyle.PayScreenStyle.infoBuyBodyAddText}>
                            {user ? `${user.add}` : ''}
                        </Text>

                    </View>
                    <FlatList
                        data={cartItems.filter(item => checkedItems[item.id])}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View style={AppStyle.PayScreenStyle.selectedProductView}>
                                <Text style={AppStyle.PayScreenStyle.selectedProductName}>
                                    {`Sản phẩm: ${item.productName}`}
                                </Text>
                                <Text style={AppStyle.PayScreenStyle.selectedProductRetailPrice}>
                                    {`Đơn giá: ${item.retailPrice} ₫`}
                                </Text>
                            </View>
                        )}
                    />
                    <View>
                        <Text>
                        Tổng tiền thanh toán: {calculateTotalAmount()} ₫
                        </Text>
                        <TouchableOpacity
                        style= {{
                            height: 30,
                            backgroundColor: "#f06850",
                            width: "50%",
                            padding: 5,
                            margin: 3,
                            borderRadius: 10,
                            justifyContent : "center",
                            alignItems: "center"
                        }}
                        >
                            <Text>Đặt Hàng</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}
