import { StyleSheet, Dimensions } from 'react-native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;


const CartScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E0FFFF",
    },
    nullCart: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    nullCartText: {
        fontSize: 18,
        color: "#707070",
        fontWeight: "400"
    },
    imageStyle: {
        height: 80,
        width: 80
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        padding: 10
    },
    productContainerView: {
        backgroundColor: "#FFF",
        marginBottom: 15,
        margin: 5
    },
    productContainer: {
        flexDirection: 'row',
        borderRadius: 8,
        padding: 5,
        backgroundColor: "#FFF",
    },
    productImage: {
        width: 80,
        height: 80,
        marginRight: 12,
        resizeMode: 'cover',
        borderRadius: 8,
    },
    productInfo: {
        flex: 7.5,

    },
    productInfoImage: {
        flex: 2.5
    },
    productName: {
        fontSize: 16,
        fontWeight: '400',
        marginBottom: 3
    },
    totalPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#FF9900",
        padding: 5
    },
    buttomView: {
        height: 40,
        flex: 1,
        flexDirection: "row"
    },
    buttomViewCheckBox: {
        flex: 2,
        justifyContent : "center",
        alignItems: "center"
    },
    buttomViewNumber: {
        flex: 8,
        justifyContent : "center",
        alignItems: "center",
        flexDirection: "row"
    },
    checkbox: {
        alignSelf: 'center',
    },
    checkboxText: {
        fontSize:18
    },
    checkboxButtomText: {
        fontSize:18,
        padding:10
    }
});


export default CartScreenStyle;
