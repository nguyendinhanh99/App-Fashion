import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions';
import AppStyle from '../theme';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TabView from '../component/TabView';

const convertToNumber = (priceString) => {
    return parseFloat(priceString.replace(/\./g, ''));
};

const CartScreen = ({ route }) => {
    const dispatch = useDispatch();
    const [checkedItems, setCheckedItems] = useState({});
    const [quantityItems, setQuantityItems] = useState({});
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);
    const cartItems = useSelector(state => state.cart.cartItems) || [];

    useEffect(() => {
        console.log('Cart Items:', cartItems);
        // Phần code còn lại của bạn...
    }, [route, cartItems]);

    useEffect(() => {
        const loadCartItems = async () => {
            const storedCheckedItems = await AsyncStorage.getItem('checkedItems');
            if (storedCheckedItems) {
                setCheckedItems(JSON.parse(storedCheckedItems));
            }

            const storedQuantityItems = await AsyncStorage.getItem('quantityItems');
            if (storedQuantityItems) {
                const parsedQuantityItems = JSON.parse(storedQuantityItems);
                const updatedQuantityItems = {};

                cartItems.forEach((item) => {
                    updatedQuantityItems[item.id] = parsedQuantityItems[item.id] || 1;
                });

                setQuantityItems(updatedQuantityItems);
            } else {
                const defaultQuantityItems = {};
                cartItems.forEach((item) => {
                    defaultQuantityItems[item.id] = 1;
                });

                setQuantityItems(defaultQuantityItems);
            }
        };

        loadCartItems();
    }, [route, cartItems]);

    useEffect(() => {
        const saveCheckedItems = async () => {
            try {
                await AsyncStorage.setItem('checkedItems', JSON.stringify(checkedItems));
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
            const currentQuantity = prevQuantityItems[itemId] || 1;
            const newQuantity = Math.max(1, currentQuantity - 1);

            return {
                ...prevQuantityItems,
                [itemId]: newQuantity,
            };
        });
    };

    const increaseQuantity = (itemId) => {
        setQuantityItems((prevQuantityItems) => {
            const newQuantity = (prevQuantityItems[itemId] || 0) + 1;
            const maxQuantity = 10;

            if (newQuantity > maxQuantity) {
                return prevQuantityItems;
            }

            return {
                ...prevQuantityItems,
                [itemId]: newQuantity,
            };
        });
    };

    const handleConfirmDelete = (itemId) => {
        setConfirmDelete(true);
        setItemToDelete(itemId);
    };

    const handleDeleteItem = () => {
        dispatch(removeFromCart(itemToDelete));
        setConfirmDelete(false);
        setItemToDelete(null);
    };

    return (
        <View style={AppStyle.CartScreenStyle.container}>
            <TabView />
            <Text style={AppStyle.CartScreenStyle.title}>Giỏ Hàng Của Bạn</Text>
            {cartItems.length === 0 ? (
                <Text style={AppStyle.CartScreenStyle.emptyCartText}>
                    Giỏ hàng của bạn đang trống.
                </Text>
            ) : (
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    data={cartItems}
                    keyExtractor={(item, index) => index.toString()}
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
                                    <View>
                                    <Text style={AppStyle.CartScreenStyle.checkboxText}>
                                        {quantityItems[item.id] || 0}
                                    </Text>
                                    </View>
                                    <TouchableOpacity onPress={() => increaseQuantity(item.id)}>
                                        <Text style={AppStyle.CartScreenStyle.checkboxButtomText}>+</Text>
                                    </TouchableOpacity>
                                </View>
                                
                                <TouchableOpacity
                                style={AppStyle.CartScreenStyle.buttomViewDelete}
                                 onPress={() => handleConfirmDelete(item.id)}>
                                    <Text
                                    style={AppStyle.CartScreenStyle.buttomViewDeleteText}
                                    >Xoá</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                />
            )}
            <Text style={AppStyle.CartScreenStyle.totalPrice}>
                Số lượng: ({cartItems.length} sản phẩm)
            </Text>
            <Text style={AppStyle.CartScreenStyle.totalPrice}>
                Tổng giá trị: {totalRetailPrice.toLocaleString()} ₫
            </Text>
            {confirmDelete && (
                <View style={AppStyle.CartScreenStyle.confirmDeleteModal}>
                    <Text
                        style={AppStyle.CartScreenStyle.confirmDeleteModalTitle}
                    >Bạn muốn xoá sản phẩm không?</Text>
                    <TouchableOpacity
                        style={AppStyle.CartScreenStyle.confirmDeleteModalButtom1}
                        onPress={handleDeleteItem}>
                        <Text
                        style={AppStyle.CartScreenStyle.confirmDeleteModalButtomText}
                        >Đồng ý</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={AppStyle.CartScreenStyle.confirmDeleteModalButtom2}
                        onPress={() => setConfirmDelete(false)}>
                        <Text
                        style={AppStyle.CartScreenStyle.confirmDeleteModalButtomText}
                        >Hủy</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

export default CartScreen;
