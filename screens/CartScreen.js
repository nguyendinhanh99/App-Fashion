import React, { useState, useEffect, useReducer } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import TabView from '../component/TabView';
import AppStyle from '../theme';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';

const convertToNumber = (priceString) => {
    return parseFloat(priceString.replace(/\./g, ''));
};

const quantityReducer = (state, action) => {
    switch (action.type) {
        case 'INCREASE':
            return { ...state, [action.itemId]: (state[action.itemId] || 0) + 1 };
        case 'DECREASE':
            return { ...state, [action.itemId]: Math.max(0, (state[action.itemId] || 0) - 1) };
        case 'INITIALIZE':
            return action.payload;
        default:
            return state;
    }
};

const CartScreen = ({ route }) => {
    const [cartItems, setCartItems] = useState([]);
    const [checkedItems, setCheckedItems] = useState({});
    const [quantityItems, dispatchQuantity] = useReducer(quantityReducer, {});

    useEffect(() => {
        const loadCartItems = async () => {
            try {
                if (route?.params?.cartItems) {
                    setCartItems(route.params.cartItems);
                }

                const storedCheckedItems = await AsyncStorage.getItem('checkedItems');
                if (storedCheckedItems) {
                    setCheckedItems(JSON.parse(storedCheckedItems));
                    console.log('Loaded checkedItems successfully:', checkedItems);
                }

                const storedQuantityItems = await AsyncStorage.getItem('quantityItems');
                if (storedQuantityItems) {
                    const parsedQuantityItems = JSON.parse(storedQuantityItems);

                    if (Object.keys(parsedQuantityItems).length > 0) {
                        dispatchQuantity({ type: 'INITIALIZE', payload: parsedQuantityItems });
                        console.log('Loaded quantityItems successfully:', parsedQuantityItems);
                    }
                }
            } catch (error) {
                console.error('Error loading data from AsyncStorage:', error);
            }
        };

        loadCartItems();
    }, [route]);

    const saveCheckedItems = async (newCheckedItems) => {
        try {
            await AsyncStorage.setItem('checkedItems', JSON.stringify(newCheckedItems));
            console.log('Saved checkedItems successfully:', newCheckedItems);
        } catch (error) {
            console.error('Error saving checkedItems:', error);
        }
    };

    const saveQuantityItems = async (newQuantityItems) => {
        try {
            await AsyncStorage.setItem('quantityItems', JSON.stringify(newQuantityItems));
            console.log('Saved quantityItems successfully:', newQuantityItems);
        } catch (error) {
            console.error('Error saving quantityItems:', error);
        }
    };

    useEffect(() => {
        saveCheckedItems(checkedItems);
    }, [checkedItems]);

    useEffect(() => {
        saveQuantityItems(quantityItems);
    }, [quantityItems]);

    const calculateTotalRetailPrice = () => {
        return cartItems.reduce((total, item) => {
            if (checkedItems[item.id]) {
                const itemTotalPrice = convertToNumber(item.retailPrice) * (quantityItems[item.id] || 0);
                return total + itemTotalPrice;
            }
            return total;
        }, 0);
    };

    const totalRetailPrice = calculateTotalRetailPrice();

    const decreaseQuantity = (itemId) => {
        dispatchQuantity({ type: 'DECREASE', itemId });
    };

    const increaseQuantity = (itemId) => {
        dispatchQuantity({ type: 'INCREASE', itemId });
    };

    return (
        <View style={AppStyle.CartScreenStyle.container}>
            <TabView />
            <Text style={AppStyle.CartScreenStyle.title}>Giỏ Hàng Của Bạn</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                data={cartItems}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={AppStyle.CartScreenStyle.productContainerView}>
                        <View style={AppStyle.CartScreenStyle.productContainer}>
                            <View style={AppStyle.CartScreenStyle.productInfoImage}>
                                <Image source={item.image} style={AppStyle.CartScreenStyle.imageStyle} />
                            </View>
                            <View style={AppStyle.CartScreenStyle.productInfo}>
                                <Text style={AppStyle.CartScreenStyle.productName}>
                                    Sản phẩm: {item.productName}
                                </Text>
                                <Text style={AppStyle.CartScreenStyle.productName}>
                                    Hãng: {item.brand}
                                </Text>
                                <Text style={AppStyle.CartScreenStyle.productName}>
                                    Đơn giá: {item.retailPrice} ₫
                                </Text>
                            </View>
                        </View>
                        <View style={AppStyle.CartScreenStyle.buttomView}>
                            <View style={AppStyle.CartScreenStyle.buttomViewCheckBox}>
                                <CheckBox
                                    style={AppStyle.CartScreenStyle.checkbox}
                                    value={checkedItems[item.id] || false}
                                    onValueChange={(newValue) => {
                                        setCheckedItems((prevCheckedItems) => ({
                                            ...prevCheckedItems,
                                            [item.id]: newValue,
                                        }));
                                    }}
                                />
                            </View>
                            <View style={AppStyle.CartScreenStyle.buttomViewNumber}>
                                <TouchableOpacity onPress={() => decreaseQuantity(item.id)}>
                                    <Text style={AppStyle.CartScreenStyle.checkboxButtomText}>-</Text>
                                </TouchableOpacity>
                                <Text style={AppStyle.CartScreenStyle.checkboxText}>
                                    {quantityItems[item.id] !== undefined ? quantityItems[item.id] : 1}
                                </Text>
                                <TouchableOpacity onPress={() => increaseQuantity(item.id)}>
                                    <Text style={AppStyle.CartScreenStyle.checkboxButtomText}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
            />
            <Text style={AppStyle.CartScreenStyle.totalPrice}>
                Số lượng: ({cartItems.length} sản phẩm)
            </Text>
            <Text style={AppStyle.CartScreenStyle.totalPrice}>
                Tổng giá trị: {totalRetailPrice.toLocaleString()} ₫
            </Text>
        </View>
    );
};

export default CartScreen;
