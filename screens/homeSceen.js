// Trong HomeScreen.js
import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native';
import ProductItem from '../component/producItem';
import FashionDatas from '../config/FashionData';
import AppStyle from '../theme';
import images from '../assest/icons';

const styles = StyleSheet.create({
    productListContainer: {
        paddingHorizontal: 10,
        paddingTop: 10,
    },
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
        width: '75%',
        height: '35%',
        resizeMode: 'cover',
        borderRadius: 20,
        marginBottom: 20
    },
    productItemInfo: {
        padding: 10,
        backgroundColor: '#fff',
    },
    productItemName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    productItemDetails: {
        fontSize: 14,
        color: '#888',
    },
    selectedProductContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    selectedProductDetails: {
        padding: 30,
        backgroundColor: '#fff',
        borderRadius: 8,
    },
    closeBtn: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#3498db',
        borderRadius: 8,
    },
    closeBtnText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
    },
    cartButton: {
        backgroundColor: '#e74c3c',
        padding: 10,
        borderRadius: 8,
        marginTop: 20,
        alignSelf: 'center',
    },
    cartButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        position: 'relative',
    },
    cartItemCount: {
        position: 'absolute',
        top: 5,
        right: 5,
        backgroundColor: '#e74c3c',
        borderRadius: 50,
        padding: 5,
        color: '#fff',
    },
    TextItemStyle: {
        color: '#383838',
        fontSize: 17,
    }
});

export default function HomeScreen({ navigation }) {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [cartItems, setCartItems] = useState([]);


    const renderProductItem = ({ item }) => (
        <ProductItem
            item={item}
            onPress={setSelectedProduct}
            onBuyNow={handleBuyNow}
            onAddToCart={handleAddToCart}
        />
    );

    const keyExtractor = (item) => item.id.toString();

    const handleBuyNow = (product) => {
        // Xử lý khi nhấn nút "Mua Ngay"
        // Chẳng hạn, có thể chuyển đến màn hình thanh toán ngay tại đây
    };

    const handleAddToCart = (product) => {
        // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
        const isProductInCart = cartItems.some((item) => item.id === product.id);

        if (!isProductInCart) {
            // Nếu sản phẩm chưa có trong giỏ hàng, thêm vào danh sách
            setCartItems((prevCartItems) => [...prevCartItems, product]);

            // Chuyển hướng đến màn hình giỏ hàng và truyền danh sách sản phẩm
            navigation.navigate('UserShopCart', { cartItems: [...cartItems, product] });
        } else {
            // Nếu sản phẩm đã có trong giỏ hàng, thực hiện các xử lý khác tùy ý
            console.log("Sản phẩm đã có trong giỏ hàng.");
        }
    };


    const handleViewCart = () => {
        // Chuyển hướng đến màn hình giỏ hàng
        navigation.navigate('UserShopCart', { cartItems });
      };
    
      const TabView = () => {
        return (
          <View style={AppStyle.HomeScreenStyle.tabView}>
            <View style={AppStyle.HomeScreenStyle.tabViewFlex}>
              <TouchableOpacity style={AppStyle.HomeScreenStyle.searchButtomView}>
                <Image
                  source={images.RobotIcon}
                  style={AppStyle.HomeScreenStyle.tabButtomIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleViewCart}
                style={AppStyle.HomeScreenStyle.cartButtomView}>
                <Image
                  source={images.ShoppingIcon}
                  style={AppStyle.HomeScreenStyle.tabButtomIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        );
      };
    

    return (
        <View>
            <StatusBar
                animated={false}
            />
            <TabView />
            <FlatList
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                data={FashionDatas}
                keyExtractor={keyExtractor}
                renderItem={renderProductItem}
                numColumns={2}
                contentContainerStyle={styles.productListContainer}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
            />
            {selectedProduct && (
                <View style={styles.selectedProductContainer}>
                    <Image source={selectedProduct.image} style={styles.productItemImage} />
                    <View style={styles.selectedProductDetails}>
                        <Text style={styles.productItemName}>{selectedProduct.productName}</Text>
                        <Text style={styles.TextItemStyle}>{`Brand: ${selectedProduct.brand}`}</Text>
                        <Text style={styles.TextItemStyle}>{`Clothing: ${selectedProduct.cloting}`}</Text>
                        <Text style={styles.TextItemStyle}>{`Pants: ${selectedProduct.pants}`}</Text>
                        <Text style={styles.TextItemStyle}>{`Sex: ${selectedProduct.sex}`}</Text>
                        <Text style={styles.TextItemStyle}>{`Size: ${selectedProduct.size}`}</Text>
                        <Text style={styles.TextItemStyle}>{`Color: ${selectedProduct.color}`}</Text>
                        <Text style={styles.TextItemStyle}>{`Retail Price: ${selectedProduct.retailPrice}`}</Text>
                        <Text style={styles.TextItemStyle}>{`Material: ${selectedProduct.material}`}</Text>
                        <TouchableOpacity style={styles.closeBtn} onPress={() => setSelectedProduct(null)}>
                            <Text style={styles.closeBtnText}>Đóng</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
            <TouchableOpacity style={styles.cartButton} onPress={handleViewCart}>
                <Text style={styles.cartButtonText}>
                    Xem Giỏ Hàng
                    <Text style={styles.cartItemCount}>{cartItems.length}</Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
}
