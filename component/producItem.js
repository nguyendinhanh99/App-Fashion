// Trong ProductItem.js
import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';

const styles = StyleSheet.create({
    productItemContainer: {
        marginBottom: 10,
        width: '48%',
        height: 250,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        backgroundColor: "#FFF"
    },
    productItemImage: {
        width: '85%',
        height: '57%',
        resizeMode: 'cover',
        marginLeft: 10,
        flex: 6,
        marginTop:2,
        borderRadius: 8
    },
    productItemInfo: {
        padding:5,
        backgroundColor: '#fff',
        flex: 4
    },
    productItemName: {
        fontSize: 13,
        fontWeight: 'bold',
    },
    productItemDetails: {
        fontSize: 14,
        color: '#888',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    buyNowButton: {
        backgroundColor: '#fd8258',
        borderRadius: 8,
        flex: 1,
        padding:5
    },
    addToCartButton: {
        backgroundColor: '#3498db',
        borderRadius: 8,
        flex: 1,
        marginLeft: 5,
        padding:5
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: "500"
    },
    retailPrice: {
        fontSize: 13,
        fontWeight: 'bold',
        color : "#fd8258"
    },
    materialText: {
        fontSize: 10,
        color: '#888',
    },
    brandText: {
        fontSize: 10,
        color: '#888',
    }
});

const ProductItem = ({ item, onPress, onBuyNow }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(item));
    };

    return (
        <TouchableOpacity style={styles.productItemContainer} onPress={() => onPress(item)}>
            <Image source={item.image} style={styles.productItemImage} />
            <View style={styles.productItemInfo}>
                <Text style={styles.productItemName}>{item.productName}</Text>
                <Text style={styles.brandText}>Hãng: {item.brand}</Text>
                <Text style={styles.materialText} numberOfLines={1} ellipsizeMode="tail">
                    Chất liệu: {item.material}
                </Text>
                <Text style={styles.retailPrice}>Giá: {item.retailPrice}₫</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buyNowButton} sonPress={() => onBuyNow(item)}>
                        <Text style={styles.buttonText}>Mua</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
                        <Text style={styles.buttonText}>Giỏ Hàng</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default ProductItem;
