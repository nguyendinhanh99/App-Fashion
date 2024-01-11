import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Alert,
    ScrollView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/actions';
import TabView from '../component/TabView';
import AppStyle from '../theme';
import images from '../assest/icons';

const ProductDetailScreen = ({ route, navigation }) => {
    const { product } = route.params;
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems) || [];

    const handleAddToCart = () => {
        const isProductInCart = cartItems.some(item => item.id === product.id);

        if (!isProductInCart) {
            dispatch(addToCart(product));
            Alert.alert(
                'Thông báo !',
                'Sản phẩm đã được thêm vào giỏ hàng.',
                [{ text: 'Đóng', onPress: () => navigation.goBack() }]
            );
        } else {
            Alert.alert(
                'Thông báo !',
                'Sản phẩm đã có trong giỏ hàng.',
                [{ text: 'Đóng' }]
            );
        }
    };

    return (
        <View style={AppStyle.productDetailScreenStyle.container}>
            <TabView />
            <View style={AppStyle.productDetailScreenStyle.scrollViewImageView}>
                <ScrollView
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={true}
                    style={AppStyle.productDetailScreenStyle.scrollView}
                    horizontal={true}>
                    <View style={AppStyle.productDetailScreenStyle.imageView}>
                        <Image source={product.image} style={AppStyle.productDetailScreenStyle.productImage} />
                    </View>
                    <View style={AppStyle.productDetailScreenStyle.imageView}>
                        <Image source={product.image1} style={AppStyle.productDetailScreenStyle.productImage} />
                    </View>
                </ScrollView>
            </View>
            <View style={{
                height: 10,
                width: "100%",
                backgroundColor: "#fd8258"
            }}>
            </View>
            <View style={AppStyle.productDetailScreenStyle.productDetails}>
                <Text style={AppStyle.productDetailScreenStyle.productName}>{product.productName}</Text>
                <Text style={AppStyle.productDetailScreenStyle.productInfo}>{`Hãng: ${product.brand}`}</Text>
                <Text style={AppStyle.productDetailScreenStyle.productInfo}>{`Dòng: ${product.cloting}`}</Text>
                <Text style={AppStyle.productDetailScreenStyle.productInfo}>{`Giới tính: ${product.sex}`}</Text>
                <Text style={AppStyle.productDetailScreenStyle.productInfo}>{`Cỡ áo: ${product.size}`}</Text>
                <Text style={AppStyle.productDetailScreenStyle.productInfo}>{`Giá: ${product.retailPrice}`}đ</Text>
                <Text style={AppStyle.productDetailScreenStyle.productInfo}>{`Chất liệu: ${product.material}`}</Text>
            </View>
            <View style={
                AppStyle.productDetailScreenStyle.buttomView
            }>
                <TouchableOpacity
                    style={AppStyle.productDetailScreenStyle.goBackCartButton}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                    source={images.goBackIcon}
                    style= {AppStyle.productDetailScreenStyle.iconStyle}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={AppStyle.productDetailScreenStyle.goBackCartButton}
                    onPress={handleAddToCart}
                >
                    <Image
                    source={images.AddCartIcon}
                    style= {AppStyle.productDetailScreenStyle.iconStyle}
                    />
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={AppStyle.productDetailScreenStyle.addToCartButton}
                    onPress={handleAddToCart}
                >
                    <Text
                        style={AppStyle.productDetailScreenStyle.goBackButtomText}
                    >
                        Mua ngay
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ProductDetailScreen;
