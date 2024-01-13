import { StyleSheet, Dimensions } from 'react-native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;


const CartScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E6E6E6",
    },
    nullCart: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF"
    },
    nullCartText: {
        fontSize: 18,
        color: "#707070",
        fontWeight: "400"
    },
    imageStyle: {
        height: 80,
        width: 80,
        borderRadius: 10
    },
    nullIconStyle: {
        height: 150,
        width: 150,
        borderRadius: 10
    },
    cartNullText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        padding: 10
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        padding: 10
    },
    productContainerView: {
        backgroundColor: "#FFF",
        marginBottom: 5,
        margin: 5,
        borderRadius: 10,
        height: 150
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
        color: "#e25b45",
        padding: 5
    },
    buttomView: {
        height: 40,
        flex: 1,
        flexDirection: "row"
    },
    buttomViewCheckBox: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    buttomViewNumber: {
        flex: 8,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center"
    },
    checkbox: {
        alignSelf: 'center',
    },
    checkboxText: {
        fontSize: 18,
        padding: 5,
        borderWidth: 0.3,
        marginTop: 5,
        marginBottom: 5,
        paddingLeft: 15,
        paddingEnd: 15
    },
    checkboxButtomText: {
        fontSize: 18,
        padding: 5,
        borderWidth: 0.3,
        marginTop: 5,
        marginBottom: 5,
        paddingLeft: 15,
        paddingEnd: 15
    },
    confirmDeleteModal: {
        margin: 5,
        backgroundColor: "#FFF",
        borderRadius: 10
    },
    confirmDeleteModalTitle: {
        fontSize: 22,
        paddingLeft: 10,
        color: "#fd8258",

    },
    confirmDeleteModalButtom1: {
        backgroundColor: "#06969e",
        borderRadius: 109,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
        padding: 3
    },
    confirmDeleteModalButtom2: {
        backgroundColor: "#e9674c",
        borderRadius: 109,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
        padding: 3
    },
    confirmDeleteModalButtomText: {
        fontSize: 20,
        padding: 3,
        color: "#FFF",
        fontWeight: "600"
    },
    buttomViewDelete: {
        justifyContent: "flex-end",
        alignItems: "flex-start"
    },
    buttomViewDeleteText: {
        fontSize: 18,
        color: "#fd8258",
        padding: 15
    },
    payView: {
        flexDirection: "row",
        height: 50,
        backgroundColor: "#FFF"
    },
    titleCart: {
        flex: 8,
        justifyContent : "center"
    },
    payButtomView: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    payIconStyle: {
        height: 40,
        width: 40
    },
    payButtomText: {
        fontSize: 10,
        color : "#545454"
    }
});


export default CartScreenStyle;
