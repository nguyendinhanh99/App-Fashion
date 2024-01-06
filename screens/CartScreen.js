import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import TabView from '../component/TabView';
import AppStyle from '../theme';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';

const convertToNumber = (priceString) => {
    return parseFloat(priceString.replace(/\./g, ''));
};

const CartScreen = ({ route }) => {
    const [cartItems, setCartItems] = useState([]);
    const [checkedItems, setCheckedItems] = useState({});
    const [quantityItems, setQuantityItems] = useState({});

    useEffect(() => {
        const loadCartItems = async () => {
            try {
                if (route && route.params && route.params.cartItems) {
                    setCartItems(route.params.cartItems);
                }

                const storedCheckedItems = await AsyncStorage.getItem('checkedItems');
                if (storedCheckedItems) {
                    setCheckedItems(JSON.parse(storedCheckedItems));
                    console.log('Loaded checkedItems successfully:', JSON.parse(storedCheckedItems));
                }

                const storedQuantityItems = await AsyncStorage.getItem('quantityItems');
                if (storedQuantityItems) {
                    setQuantityItems(JSON.parse(storedQuantityItems));
                    console.log('Loaded quantityItems successfully:', JSON.parse(storedQuantityItems));
                }
            } catch (error) {
                console.error('Error loading data from AsyncStorage:', error);
            }
        };

        loadCartItems();
    }, [route]);

    useEffect(() => {
        const saveCheckedItems = async () => {
            try {
                await AsyncStorage.setItem('checkedItems', JSON.stringify(checkedItems));
                console.log('Saved checkedItems successfully:', checkedItems);
            } catch (error) {
                console.error('Error saving checkedItems:', error);
            }
        };

        saveCheckedItems();
    }, [checkedItems]);

    useEffect(() => {
        const saveQuantityItems = async () => {
            try {
                await AsyncStorage.setItem('quantityItems', JSON.stringify(quantityItems));
                console.log('Saved quantityItems successfully:', quantityItems);
            } catch (error) {
                console.error('Error saving quantityItems:', error);
            }
        };

        saveQuantityItems();
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
        setQuantityItems((prevQuantityItems) => {
            const newQuantity = (prevQuantityItems[itemId] || 0) - 1;
            const updatedQuantityItems = {
                ...prevQuantityItems,
                [itemId]: Math.max(0, newQuantity),
            };
            saveQuantityItems(updatedQuantityItems); // Lưu trạng thái mới vào AsyncStorage
            return updatedQuantityItems;
        });
    };

    const increaseQuantity = (itemId) => {
        setQuantityItems((prevQuantityItems) => {
            const updatedQuantityItems = {
                ...prevQuantityItems,
                [itemId]: (prevQuantityItems[itemId] || 0) + 1,
            };
            saveQuantityItems(updatedQuantityItems); // Lưu trạng thái mới vào AsyncStorage
            return updatedQuantityItems;
        });
    };

    const saveQuantityItems = async (newQuantityItems) => {
        try {
            // Lưu trạng thái mới vào AsyncStorage
            await AsyncStorage.setItem('quantityItems', JSON.stringify(newQuantityItems));

            // Log giá trị mới của quantityItems
            AsyncStorage.getItem('quantityItems').then((value) => {
                console.log('Updated Quantity Items:', JSON.parse(value));
            });

            console.log('Saved quantityItems successfully');
        } catch (error) {
            console.error('Error saving quantityItems:', error);
        }
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
                                    {quantityItems[item.id] !== undefined ? quantityItems[item.id] : 0}
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
