import React, { useState } from 'react';
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

    const [selectedSize, setSelectedSize] = useState(null);
    const [heartIconColor, setHeartIconColor] = useState('black');
    const [isHeartIconPressed, setIsHeartIconPressed] = useState(false);



    const handleSizeSelection = (size) => {
        setSelectedSize(size);
        // Thực hiện các thao tác khác nếu cần
    };

    const handleHeartIconPress = () => {
        // Thay đổi trạng thái của hình ảnh khi nút được nhấn
        setIsHeartIconPressed(!isHeartIconPressed);
        // Thực hiện các thao tác khác khi nút được nhấn
    };

    const handleAddToCart = () => {
        const isProductInCart = cartItems.some(item => item.id === product.id);

        if (!isProductInCart) {
            dispatch(addToCart(product));
        } else {
            Alert.alert(
                'Thông báo !',
                'Sản phẩm đã có trong giỏ hàng.',
                [{ text: 'Đóng' }]
            );
        }
    };


    const handleBuyToCart = () => {
        const isProductInCart = cartItems.some(item => item.id === product.id);

        if (!isProductInCart) {
            dispatch(addToCart(product));
            // Chuyển hướng ngay sau khi thêm sản phẩm vào giỏ hàng
            navigation.navigate('UserShopCart');
        } else {
            Alert.alert(
                'Thông báo !',
                'Sản phẩm đã có trong giỏ hàng.',
                [{ text: 'Đóng', onPress: () => navigation.navigate('UserShopCart') }]
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
                <View
                    style={{
                        backgroundColor: "#FFF",
                        marginTop: 5,
                        paddingLeft: 10,
                    }}
                >
                    <Text style={AppStyle.productDetailScreenStyle.productName}>{product.productName}</Text>
                    <Text style={AppStyle.productDetailScreenStyle.productInfoBrand}>{`Hãng: ${product.brand}`}</Text>
                    <Text style={AppStyle.productDetailScreenStyle.productInfoPrice}>{`Giá: ${product.retailPrice}`}đ</Text>

                    <Text style={AppStyle.productDetailScreenStyle.productInfoCloting}>{`Dòng: ${product.cloting}`}</Text>
                    <Text style={AppStyle.productDetailScreenStyle.productInfoSex}>{`Giới tính: ${product.sex}`}</Text>
                    <Text style={AppStyle.productDetailScreenStyle.productInfoMaterial}>{`Chất liệu: ${product.material}`}</Text>
                </View>
                <View
                    style={{
                        backgroundColor: "#FFF",
                        marginTop: 5,
                    }}
                >
                    <Text style={AppStyle.productDetailScreenStyle.selectSizeTitle}>Chọn Size</Text>
                    <View style={AppStyle.productDetailScreenStyle.selectSizeButtomView}>
                        <TouchableOpacity
                            style={[
                                AppStyle.productDetailScreenStyle.selectSizeButtomStyle,
                                selectedSize === 'XS' && { backgroundColor: '#FCD1AC' },
                            ]}
                            onPress={() => handleSizeSelection('XS')}
                        >
                            <Text style={AppStyle.productDetailScreenStyle.selectSizeButtomText}>XS</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                AppStyle.productDetailScreenStyle.selectSizeButtomStyle,
                                selectedSize === 'S' ? { backgroundColor: '#FCD1AC' } : null,
                            ]}
                            onPress={() => handleSizeSelection('S')}
                        >
                            <Text style={AppStyle.productDetailScreenStyle.selectSizeButtomText}>S</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                AppStyle.productDetailScreenStyle.selectSizeButtomStyle,
                                selectedSize === 'M' ? { backgroundColor: '#FCD1AC' } : null,
                            ]}
                            onPress={() => handleSizeSelection('M')}
                        >
                            <Text style={AppStyle.productDetailScreenStyle.selectSizeButtomText}>M</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                AppStyle.productDetailScreenStyle.selectSizeButtomStyle,
                                selectedSize === 'L' ? { backgroundColor: '#FCD1AC' } : null,
                            ]}
                            onPress={() => handleSizeSelection('L')}
                        >
                            <Text style={AppStyle.productDetailScreenStyle.selectSizeButtomText}>L</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                AppStyle.productDetailScreenStyle.selectSizeButtomStyle,
                                selectedSize === 'XL' ? { backgroundColor: '#FCD1AC' } : null,
                            ]}
                            onPress={() => handleSizeSelection('XL')}
                        >
                            <Text style={AppStyle.productDetailScreenStyle.selectSizeButtomText}>XL</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                AppStyle.productDetailScreenStyle.selectSizeButtomStyle,
                                selectedSize === 'XXL' ? { backgroundColor: '#FCD1AC' } : null,
                            ]}
                            onPress={() => handleSizeSelection('XXL')}
                        >
                            <Text style={AppStyle.productDetailScreenStyle.selectSizeButtomText}>XXL</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                <View
                    style={{
                        backgroundColor: "#FFF",
                        marginTop: 5,
                    }}
                >
                    <View style={AppStyle.productDetailScreenStyle.selectSizeButtomView}>
                        <View
                            style={AppStyle.productDetailScreenStyle.buyInfoView}
                        >
                            <Text
                                style={AppStyle.productDetailScreenStyle.buyInfoText}
                            >
                                Đã bán: 1000
                            </Text>
                        </View>
                        <View
                            style={AppStyle.productDetailScreenStyle.interactView}
                        >
                            <TouchableOpacity
                                style={AppStyle.productDetailScreenStyle.interactButtomView}
                                onPress={handleHeartIconPress}
                            >
                                <Image
                                    source={images.HeartIcon}
                                    style={[
                                        AppStyle.productDetailScreenStyle.interactIconStyle,
                                        isHeartIconPressed && { tintColor: 'red' },
                                    ]}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={AppStyle.productDetailScreenStyle.interactButtomView}
                            >
                                <Image
                                    source={images.ShareIcon}
                                    style={AppStyle.productDetailScreenStyle.interactIconStyle}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={AppStyle.productDetailScreenStyle.interactButtomView}
                            >
                                <Image
                                    source={images.MessengerIcon}
                                    style={AppStyle.productDetailScreenStyle.interactIconStyle}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
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
                        style={AppStyle.productDetailScreenStyle.iconStyle}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={AppStyle.productDetailScreenStyle.goBackCartButton}
                    onPress={handleAddToCart}
                >
                    <Image
                        source={images.AddCartIcon}
                        style={AppStyle.productDetailScreenStyle.iconStyle}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={AppStyle.productDetailScreenStyle.addToCartButton}
                    onPress={handleBuyToCart}
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
