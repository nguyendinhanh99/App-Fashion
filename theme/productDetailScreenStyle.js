import { StyleSheet, Dimensions } from 'react-native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;


const productDetailScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    scrollViewImageView: {
        width: Width,
        justifyContent: "center",
        alignItems: "center",
        flex:5,
        marginTop:20
    },
    imageView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: Width
    },
    productImage: {
        width: Width - 100,
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 8,
        marginRight: 16, // Adjust as needed
    },
    productDetails: {
        marginBottom: 16,
        flex:4,
        padding: 10
    },
    productName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    productInfo: {
        fontSize: 16,
        marginBottom: 4,
    },
    addToCartButton: {
        backgroundColor: '#ef8c5a',
        borderRadius: 20,
        alignItems: 'center',
        height: 40,
        margin: 5,
        justifyContent: "center",
        flex: 1
    },
    buyToCartButton: {
        backgroundColor: '#fd8258',
        borderRadius: 20,
        alignItems: 'center',
        height: 40,
        justifyContent: "center",
        width:50
    },
    goBackCartButton: {
        backgroundColor: '#feb183',
        borderRadius: 20,
        alignItems: 'center',
        height: 40,
        margin: 5,
        justifyContent: "center",
        width:50
    },
    addToCartButtonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
    buyToCartButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttomView: {
        flex: 1,
        flexDirection: "row"
    },
    goBackButtomStyle: {
        height: 50,
    },
    goBackButtom : {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#feb183",
        borderRadius: 20,
        margin:5
    },
    goBackButtomText : {
        fontSize: 20,
        color: "#FFF",
        fontWeight: "600"
    },
    iconStyle : {
        height:25,
        width:25
    }
});

export default productDetailScreenStyle;
