import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity, Image, StatusBar, ImageBackground , Alert} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from 'react-native-snap-carousel';
import { addToCart, removeFromCart } from '../redux/actions';
import ProductItem from '../component/producItem';
import FashionDatas from '../config/FashionData';
import AppStyle from '../theme';
import images from '../assest/icons';

export default function HomeScreen({ navigation }) {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const cartItems = useSelector(state => state.cart.cartItems) || [];
    const dispatch = useDispatch();

    const handleRemoveFromCart = (itemId) => {
        // Xoá sản phẩm từ giỏ hàng
        dispatch(removeFromCart(itemId));
    };

    const handleProductPress = (product) => {
        // Chuyển hướng đến màn hình chi tiết và truyền thông tin sản phẩm
        navigation.navigate('ProductDetail', { product });
      };
    
      const renderProductItem = ({ item }) => (
        <ProductItem
          item={item}
          onPress={handleProductPress}
          onBuyNow={handleBuyNow}
          onAddToCart={() => handleAddToCart(item)}
          onRemoveFromCart={() => handleRemoveFromCart(item.id)}
        />
      );

    const keyExtractor = (item) => item.id.toString();

    const handleBuyNow = (product) => {
        // Xử lý khi nhấn nút "Mua Ngay"
        // Chẳng hạn, có thể chuyển đến màn hình thanh toán ngay tại đây
    };

    const handleAddToCart = (product) => {
        // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
        const isProductInCart = cartItems.some(item => item.id === product.id);

        if (!isProductInCart) {
            // Nếu sản phẩm chưa có trong giỏ hàng, thêm vào danh sách
            dispatch(addToCart(product));

            // Chuyển hướng đến màn hình giỏ hàng và truyền danh sách sản phẩm
            navigation.navigate('UserShopCart');

        } else {
            // Nếu sản phẩm đã có trong giỏ hàng, thực hiện các xử lý khác tùy ý
            console.log("Sản phẩm đã có trong giỏ hàng.");
            Alert.alert(
                "Thông báo",
                "Sản phẩm đã có trong giỏ hàng.",
                [{ text: "OK", onPress: () => console.log("OK Pressed") }]
            );
            
        }
    };
    const TabView = () => {
        return (
            <View style={AppStyle.HomeScreenStyle.tabView}>
                <View style={AppStyle.HomeScreenStyle.tabViewFlex}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Fashion AI')}
                        style={AppStyle.HomeScreenStyle.searchButtomView}>
                        <Image
                            source={images.RobotIcon}
                            style={AppStyle.HomeScreenStyle.tabButtomIcon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={AppStyle.HomeScreenStyle.cartButtomView}
                    >
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
    return (
        <View>
            <StatusBar animated={false} />
            <TabView />
            <FlatList
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                data={FashionDatas}
                keyExtractor={keyExtractor}
                renderItem={renderProductItem}
                numColumns={2}
                contentContainerStyle={AppStyle.HomeScreenStyle.productListContainer}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
            />
            {selectedProduct && (
                <View style={AppStyle.HomeScreenStyle.selectedProductContainer}>
                    <Image source={selectedProduct.image} style={AppStyle.HomeScreenStyle.productItemImage} />
                    <Image source={selectedProduct.image1} style={AppStyle.HomeScreenStyle.productItemImage} />
                    <View style={AppStyle.HomeScreenStyle.selectedProductDetails}>
                        <Text style={AppStyle.HomeScreenStyle.productItemName}>{selectedProduct.productName}</Text>
                        <Text style={AppStyle.HomeScreenStyle.TextItemStyle}>{`Brand: ${selectedProduct.brand}`}</Text>
                        <Text style={AppStyle.HomeScreenStyle.TextItemStyle}>{`Clothing: ${selectedProduct.cloting}`}</Text>
                        <Text style={AppStyle.HomeScreenStyle.TextItemStyle}>{`Pants: ${selectedProduct.pants}`}</Text>
                        <Text style={AppStyle.HomeScreenStyle.TextItemStyle}>{`Sex: ${selectedProduct.sex}`}</Text>
                        <Text style={AppStyle.HomeScreenStyle.TextItemStyle}>{`Size: ${selectedProduct.size}`}</Text>
                        <Text style={AppStyle.HomeScreenStyle.TextItemStyle}>{`Color: ${selectedProduct.color}`}</Text>
                        <Text style={AppStyle.HomeScreenStyle.TextItemStyle}>{`Retail Price: ${selectedProduct.retailPrice}`}</Text>
                        <Text style={AppStyle.HomeScreenStyle.TextItemStyle}>{`Material: ${selectedProduct.material}`}</Text>
                        <TouchableOpacity style={AppStyle.HomeScreenStyle.closeBtn} onPress={() => setSelectedProduct(null)}>
                            <Text style={AppStyle.HomeScreenStyle.closeBtnText}>Đóng</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={AppStyle.HomeScreenStyle.closeBtn} onPress={() => handleAddToCart(selectedProduct)}>
                            <Text style={AppStyle.HomeScreenStyle.closeBtnText}>Thêm vào giỏ hàng</Text>
                        </TouchableOpacity>


                    </View>
                </View>
            )}
        </View>
    );
}


