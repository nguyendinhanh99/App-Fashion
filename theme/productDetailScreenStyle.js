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
        flex:5,
        backgroundColor: "#F5F5F5"
    },
    productInfo: {
        fontSize: 16,
        marginBottom: 4,
    },
    addToCartButton: {
        backgroundColor: '#ef8c5a',
        borderRadius: 20,
        alignItems: 'center',
        height: 35,
        margin: 5,
        justifyContent: "center",
        flex: 1
    },
    buyToCartButton: {
        backgroundColor: '#fd8258',
        borderRadius: 20,
        alignItems: 'center',
        height: 35,
        justifyContent: "center",
        width:40
    },
    goBackCartButton: {
        backgroundColor: '#feb183',
        borderRadius: 20,
        alignItems: 'center',
        height: 35,
        margin: 5,
        justifyContent: "center",
        width:40
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
        flexDirection: "row"
    },
    goBackButtomStyle: {
        height: 30,
    },
    goBackButtom : {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#feb183",
        borderRadius: 20,
    },
    goBackButtomText : {
        fontSize: 20,
        color: "#FFF",
        fontWeight: "600"
    },
    iconStyle : {
        height:25,
        width:25
    },
    productName: {
        fontSize: 20,
        fontWeight: "400",
        marginBottom: 8,
    },
    productInfoBrand: {
        fontSize: 16,
        marginBottom: 4,
    },
    productInfoCloting: {
        fontSize: 16,
        marginBottom: 4,
        color: "#3E3F40",
        fontWeight: "400"
    },
    productInfoSex: {
        fontSize: 16,
        marginBottom: 4,
        color: "#3E3F40",
        fontWeight: "400"
    },
    productInfoPrice: {
        fontSize: 17,
        marginBottom: 4,
        color : "#fd8258",
        fontWeight: "500"
    },
    productInfoMaterial: {
        fontSize: 16,
        marginBottom: 4,
        color: "#3E3F40",
        fontWeight: "400"
    },
    selectSizeButtomView : {
        flexDirection: "row",
        margin: 2
    },
    selectSizeButtomStyle : {
        flex:1,
        margin:1,
        justifyContent : "center",
        alignItems: "center",
        borderWidth: 0.2,
        borderRadius: 5,
        borderColor: "#ABAAA9"
    },
    selectSizeButtomText : {
        fontSize: 20,
        fontWeight: "500",
        color: "#213500"
    },
    selectSizeTitle : {
        fontSize: 17,
        padding:2,
        paddingLeft: 5,
        fontWeight: "500"
    },
    buyInfoView: {
        flex: 4,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    buyInfoText: {
        fontSize: 19,
        padding:2,
        paddingLeft: 5,
        fontWeight: "400"
    },
    interactView: {
        flex: 6,
        flexDirection: "row"
    },
    interactButtomView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    interactIconStyle: {
        height: 25,
        width:25,
        margin:3
    },

});

export default productDetailScreenStyle;
