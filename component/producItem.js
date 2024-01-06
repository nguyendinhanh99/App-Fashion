// Trong ProductItem.js
import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    productItemContainer: {
        marginBottom: 20,
        width: '48%',
        height: 250,
        borderRadius: 8,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#ddd',
    },
    productItemImage: {
        width: '100%',
        height: '60%',
        resizeMode: 'cover',
    },
    productItemInfo: {
        padding: 10,
        backgroundColor: '#fff',
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
        backgroundColor: '#27ae60',
        padding: 8,
        borderRadius: 8,
        flex: 1,
    },
    addToCartButton: {
        backgroundColor: '#3498db',
        padding: 8,
        borderRadius: 8,
        flex: 1,
        marginLeft: 5,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 10
    },
    retailPrice: {
        fontSize: 12,
        fontWeight: 'bold',
    },
});

const ProductItem = ({ item, onPress, onBuyNow, onAddToCart }) => {
    return (
        <TouchableOpacity style={styles.productItemContainer} onPress={() => onPress(item)}>
            <Image source={item.image} style={styles.productItemImage} />
            <View style={styles.productItemInfo}>
                <Text style={styles.productItemName}>{item.productName}</Text>
                <Text style={styles.productItemDetails}>Hãng: {item.brand}</Text>
                <Text style={styles.retailPrice}>Giá: {item.retailPrice}₫</Text>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buyNowButton} onPress={() => onBuyNow(item)}>
                        <Text style={styles.buttonText}>Mua</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addToCartButton} onPress={() => onAddToCart(item)}>
                        <Text style={styles.buttonText}>Giỏ Hàng</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default ProductItem;